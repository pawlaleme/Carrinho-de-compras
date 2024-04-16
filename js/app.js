let totalCompra = 0;
limpar();

function add() {
    //pegando valores : nome de produtos, qnt e valor
    let produto = document.getElementById('produto').value;
    //split separar strings em arrays - em parenteses eu ajudo localizar onde eu quero
    let produtoNome = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let qntd = document.getElementById('quantidade').value;


    //calcular o preço total
    let totalProdutos = qntd * valorProduto;
    //add produto carrinho
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qntd}</span> ${produtoNome} <span class="texto-azul">R$${totalProdutos}</span>
  </section>`;

    //att valor total da compra
    totalCompra = totalCompra + totalProdutos;
    let txtTotal = document.getElementById('valor-total');
    txtTotal.textContent = `R$ ${totalCompra}`;
    qntd = document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalCompra = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$';
}