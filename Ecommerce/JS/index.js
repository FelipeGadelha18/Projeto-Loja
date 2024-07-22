// Função para exibir o modal
function exibirModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Função para confirmar a compra
function confirmarCompra() {
    alert('Compra confirmada!');
    fecharModal();
}

// Event listener para o botão "Comprar"
document.getElementById('comprarBtn').addEventListener('click', exibirModal);

      
