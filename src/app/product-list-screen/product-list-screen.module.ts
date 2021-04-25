import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListScreenComponent } from './product-list-screen.component';
import { ProductListScreenService } from './product-list-screen.service';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { ProductTableComponent } from './product-table/product-table.component';
import {DialogModule} from 'primeng/dialog';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductListCommonDataService } from './product-list-screen-common-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ProductListScreenComponent,
    ProductTableComponent,
    AddEditProductComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
      HttpClientModule,
      ButtonModule,
      TableModule,
      DialogModule,
      BrowserAnimationsModule,
      InputTextModule,
      ToastModule
  ],
  providers: [ProductListScreenService, ProductListCommonDataService, MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ProductListScreenModule { }
