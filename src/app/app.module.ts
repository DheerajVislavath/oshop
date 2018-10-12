import { OrderService } from './order.service';
import { AdminAuthGuard } from './admin-auth.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from 'angular-4-data-table'
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCartService } from './shopping-cart-service.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AuthService } from './auth.service';

import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '' , component: ProductsComponent}, 
      {path: 'products', component: ProductsComponent},
      {path: 'login', component: LoginComponent},

      {path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},

      {path: 'admin/products/:id', 
      component: ProductFormComponent, 
      canActivate: [AuthGuard, AdminAuthGuard]},

      {path: 'admin/products/new', 
      component: ProductFormComponent, 
      canActivate: [AuthGuard, AdminAuthGuard]},
      
      {path: 'admin/products', 
      component: AdminProductsComponent, 
      canActivate: [AuthGuard, AdminAuthGuard]},

      {path: 'admin/orders', 
      component: AdminOrdersComponent, 
      canActivate: [AuthGuard, AdminAuthGuard]}
    ])
  ],
  providers: [AuthService, 
              AuthGuard, 
              UserService, 
              AdminAuthGuard, 
              CategoryService, 
              ProductService, 
              ShoppingCartService, 
              OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }