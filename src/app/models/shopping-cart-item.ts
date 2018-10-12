import { Product } from './products';

export class ShoppingCartItem {
    $key: string;
    category: string;
    imageUrl: string;
    price: number;
    title: string;
    quantity: number;

    get totalPrice() {
       return this.price * this.quantity;
    }
}