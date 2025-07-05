//Ações que o carrinho faz

//Adicionar um item ao carrinho ou wishlist
async function addItem(cart, item) {
    cart.push(item);
}


//deletar um item do carrinho ou wishlist
async function deleteItem(cart, index) {
   const deleteIndex = index - 1;
   if(index >= 1 && index < cart.length) {
     cart.splice(deleteIndex, 1);
   } 
}


//calcular o total do carrinho
async function totalSumCart(cart, typeCart) {
    const sum = cart.reduce((acc, curr) => {
        return acc + parseFloat(curr.subtotal());
    }, 0);

    if(typeCart === 'carrinho') {
        if(sum == 0) return 'O seu carrinho está vazio! Escolha algum produto e adicione ao carrinho!\n'
        return `\nA soma total do seu carrinho é: R$ ${sum.toFixed(2)}\n`;
    } else if(typeCart === 'wishlist') {
        if(sum == 0) return 'Vc não tem produtos na sua wishlist!\n';
        return `\nA soma total da sua wishlist é: R$ ${sum.toFixed(2)}\n`;
    }
         
}

//Exibir o que tem no carrinho
async function displayCart(cart, typeCart) {
    console.log(`Produtos no(a) ${typeCart}:\n`);
    cart.forEach((el, index) => {
       console.log(`${index + 1}. ${el.name}, ${el.price.toFixed(2)}, quantidade: ${el.quantity} | Subtotal: ${el.subtotal()}`); 
    });
    console.log(await totalSumCart(cart, typeCart));
}

export {
    addItem,
    deleteItem,
    totalSumCart,
    displayCart
}