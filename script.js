document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('product-grid');

  // Carrega o arquivo JSON gerado pelo CMS ou pela lista de produtos
  fetch('produtos.json')
    .then(response => response.json())
    .then(produtos => {
      container.innerHTML = produtos.map(prod => `
        <div class="product-card">
          <div class="product-image">
            <img src="${prod.imagem}" alt="${prod.title}">
          </div>
          <div class="product-info">
            <span class="category">${prod.categoria.toUpperCase()}</span>
            <h3>${prod.title}</h3>
            <p class="description">${prod.descricao}</p>
            <div class="card-footer">
              <span class="price">R$ ${prod.preco}</span>
              <a href="https://wa.me/55199XXXXXXXX?text=Tenho%20interesse%20em%20${encodeURIComponent(prod.title)}" target="_blank" class="btn-encomendar">
                Encomendar
              </a>
            </div>
          </div>
        </div>
      `).join('');
    });
});