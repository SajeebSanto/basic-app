import { Component } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { googleProducts } from '../google-products';
import { appleProducts } from '../apple-products';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  store: string = '';

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.store = params.get('store') || '';
      this.products = this.store === 'google' ? googleProducts : appleProducts;
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    this.openDialog('You will be notified when the product goes on sale');
  }

  openDialog(message: string): void {
    this.dialog.open(DialogContentComponent, {
      width: '250px',
      data: { message: message },
    });
  }

 // onNotify() {
 //   window.alert('You will be notified when the product goes on sale');
 // }

  /*onNotify() {
    this.modalMessage = 'You will be notified when the product goes on sale.';
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }*/
}


