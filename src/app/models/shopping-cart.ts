import { Product } from './products';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];
    constructor(private itemsMap: {[productId: string]: ShoppingCartItem}){
        this.itemsMap = itemsMap || {};
        for(let productId in itemsMap) {
            let item = itemsMap[productId]
            let x = new ShoppingCartItem();
            Object.assign(x, item);
            x.$key = productId;
            this.items.push(x);
        }
    }
    
    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return item ? item.quantity: 0;
      }

    getItemTotalPrice(product: Product) {
        let item = this.itemsMap[product.$key];
        return (item.quantity * item.price );
    }

    get totalItems() {
        let count = 0;
        for(let key in this.items) {
            count += this.items[key].quantity;
        }
        return count;
    }

    get totalItemsPrice() {
        let sum = 0;
        for(let key in this.items) {
            sum += this.items[key].totalPrice;
        }
        return sum;
    }
}