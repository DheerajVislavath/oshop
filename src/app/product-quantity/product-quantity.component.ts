import { ShoppingCart } from './../models/shopping-cart';
import { Product } from './../models/products';
import { ShoppingCartService } from './../shopping-cart-service.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true; 
  @Input('shopping-cart') shoppingCart: ShoppingCart; 

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart() {
   this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
   }
}
