// Este é um exemplo básico de script JavaScript para adicionar funcionalidades ao site
// Por exemplo, você poderia adicionar uma função para adicionar produtos ao carrinho de compras
document.querySelectorAll('.produto button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});
