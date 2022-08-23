import { ProfileComponent } from './profile/profile.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './admin/categories/categories.component';
import { SangleProductComponent } from './ecommerce/sangle-product/sangle-product.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { DisplayTagComponent } from './display-tag/display-tag.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportsproComponent } from './reportspro/reportspro.component';
import { ReportsordComponent } from './reportsord/reportsord.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component:DashbordComponent ,
  },
  {
    path: 'sangle/product/:idProduct',
    component: SangleProductComponent
  },
  {
    path: 'puy/product/:name',
    component: SangleProductComponent
  },
  {
    path: 'dsiplay-category/:idCategory',
    component: DisplayCategoryComponent
  },
  {
    path: 'display-tag/:idTag',
    component: DisplayTagComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [
      {
        path: 'categories/:idCategory',
        component: CategoriesComponent
      }
    ]
  },
  {path:'home', component:HomeComponent},
  {path:'reg', component:RegComponent },
  {path:'orders',component:OrdersComponent},
  {path:'userreport',component:ReportsComponent},
  {path:'productsreport', component:ReportsproComponent},
  {path:'catreport',component:ReportsordComponent},
  {path:'rep',component:ReportComponent}
  

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }