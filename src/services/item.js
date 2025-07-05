//Ações que o item faz

//Criação de itens
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: function() { 
            return (this.price * this.quantity).toFixed(2); 
        }
    }
}

//decrementa quantidade de itens
async function decreaseQuantity(cart, item) {
    if(item.quantity > 1) {
        item.quantity--;
    } else {
        console.log('Vc só tem 1 item na lista, removendo o item do carrinho!');
        const index = cart.findIndex((el) => {
            return el.name === item.name;
        });
        item.quantity--;
        cart.splice(index, 1);
    }
}

//incrementa quantidade de itens
async function increaseQuantity(cart, item) {
    if(cart.length == 0 || !Object.values(cart).includes(item)) {
        console.log('Vc precisa selecionar um item válido para incrementar a quantidade!\n');
    } else {
        item.quantity++;
    }     
}

//faz o cálculo do subtotal daquele item (quantidade x preço)
async function subtotalSum(item) {
    return item.subtotal();
}


export {
    createItem,
    decreaseQuantity,
    increaseQuantity,
    subtotalSum
}