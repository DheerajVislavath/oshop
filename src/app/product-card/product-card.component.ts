import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart-service.service';
import { Product } from './../models/products';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true; 
  @Input('shopping-cart') shoppingCart: ShoppingCart; 
  quantity: any;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart() {
   this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
   }

  getQuantity() {
    if(!this.shoppingCart) return 0;

    let item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity: 0;
  }
}
