import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './welcome/new-product/new-product.component';
import { SalesComponent } from './welcome/sales/sales.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'new_product', component: NewProductComponent },
    { path: 'sales', component: SalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
