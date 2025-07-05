import * as itemService from "./services/item.js";
import * as cartService from './services/cart.js'

const carts = {
    cart: [],
    wishlist: []
}

console.log('\n🎁 Bemvindo ao seu carrinho de compras da Shopee!🎁\n');

const item1 = await itemService.createItem('pedivela tx505', 175.00, 1);
const item2 = await itemService.createItem('pedal clip Shimano', 488.50, 1);
const item3 = await itemService.createItem('cabo de cambio traseiro', 29.00, 2);
const item4 = await itemService.createItem('quadro carbon scott', 3500.00, 1);

await cartService.addItem(carts.cart, item1);
await cartService.addItem(carts.cart, item2);
await cartService.addItem(carts.cart, item4);

await cartService.addItem(carts.wishlist, item3);

await cartService.deleteItem(carts.cart, 1);

await itemService.decreaseQuantity(carts.wishlist, item3);
await itemService.decreaseQuantity(carts.wishlist, item3);

await cartService.displayCart(carts.cart, 'carrinho');
await cartService.displayCart(carts.wishlist, 'wishlist');

await itemService.increaseQuantity(carts.cart, item3);

await cartService.displayCart(carts.wishlist, 'wishlist');
