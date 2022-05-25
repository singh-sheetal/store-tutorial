// tslint:disable

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ProductsListComponent} from './products/components/products-list/products-list.component';
import {ProductDetailsComponent} from './products/components/product-details/product-details.component';
const appRoutes: Routes = [
  {
    path: "product-list",
    component: ProductsListComponent,
  },
  {
    path: "product-list/:id",
    component: ProductDetailsComponent,
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "product-list",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
