import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { googleProducts } from '../google-products';
import { appleProducts } from '../apple-products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  store: string = '';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    this.store = routeParams.get('store') || '';
  
    
    if (this.store === 'google') {
      this.product = googleProducts.find(product => product.id === productIdFromRoute);
    } else if (this.store === 'apple') {
      this.product = appleProducts.find(product => product.id === productIdFromRoute);
    } else {
      this.product = undefined;
    }
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

