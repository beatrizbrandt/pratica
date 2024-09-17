let inventario =[
    {nome:'lapis', preco:1, emEstoque:true},
    {nome:'borracha', preco:1.50, emEstoque:true},
    {nome:'regua', preco:5, emEstoque:true},
    {nome:'caneta', preco:2.50, emEstoque:true},
    {nome:'compaco', preco:4, emEstoque:false},
    {nome:'pincel', preco:4.50, emEstoque:true},
    {nome:'aquarela', preco:35, emEstoque:true},
    {nome:'tela', preco:55, emEstoque:false},
    {nome:'tintaagua', preco:12, emEstoque:true},
    {nome:'tintaoleo', preco:17, emEstoque:false},
    {nome:'cavalete', preco:120, emEstoque:true},
    {nome:'sketchbook', preco:65, emEstoque:true},
    {nome:'giz', preco:10, emEstoque:false},
    {nome:'paleta', preco:16, emEstoque:true},
    {nome:'marcadores', preco:75, emEstoque:false}
];

for (let i = 0; i < inventario.length;i++) {
    if (inventario[i].emEstoque) {
        console.log(inventario[i].nome + 'esta em estoque.');
    }
}

let produtosEmEtoque =inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEtoque);