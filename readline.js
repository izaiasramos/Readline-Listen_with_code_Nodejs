const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// exibe um texto que instrui o usuario a fazer algo:
rl.question('Digite o código do produto: ', (codigoString) => {
    console.log('\n Switch case:')

let produtoId = parseInt(codigoString);
let precoProduto;
let categoriaProduto;

switch (produtoId) {
    case 1:
        precoProduto = 19.99;
        categoriaProduto = 'Roupas';
        break;
    case 2:
        precoProduto = 299.99;
        categoriaProduto = 'Eletrônicos';
        break;
    case 3:
        precoProduto = 45.50;
        categoriaProduto = 'Livros';
        break;
    default:
        precoProduto = 0;
        categoriaProduto = 'Desconhecida';
}

console.log(`O produto ID ${produtoId} custa R$ ${precoProduto} e pertence à categoria ${categoriaProduto}.`);

rl.close()
})