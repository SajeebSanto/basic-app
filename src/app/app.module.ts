import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { CartComponent } from './cart/cart.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentComponent } from './dialog-content/dialog-content.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    HomeComponentComponent,
    DialogContentComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


