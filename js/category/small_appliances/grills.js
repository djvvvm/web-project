document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Електрогриль Delonghi CGH1030D",
            price: "$230,00",
            imgSrc: "/img/category/small_appliances/grills/Delonghi CGH1030D.webp",
            imgAlt: "Delonghi-Grill",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Електрогриль Tefal GC712D34",
            price: "$125,00",
            imgSrc: "/img/category/small_appliances/grills/Tefal GC712D34.jpeg",
            imgAlt: "Tefal-Grill",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Електрогриль Tefal GC724D12",
            price: "$190.00",
            imgSrc: "/img/category/small_appliances/grills/Tefal GC724D12.jpeg",
            imgAlt: "Tefal-Grill",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        }
    ];

    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <a href="#">
                <div class="product__image">
                    ${product.sale ? '<span class="sale-badge">SALE</span>' : ''}
                    <img src="${product.imgSrc}" alt="${product.imgAlt}" style="width: ${product.imgWidth}; height: ${product.imgHeight};">
                </div>
                <div class="product__text">
                    <p class="product-name">${product.name}</p>
                    <span class="product-price">${product.price}</span>
                </div>
            </a>
        `;
        productGrid.appendChild(productElement);
    });
});
