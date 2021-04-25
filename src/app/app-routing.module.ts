import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListScreenComponent } from './product-list-screen/product-list-screen.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListScreenComponent
  },
  {
    path: 'products',
    component: ProductListScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
