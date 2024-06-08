document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Винна шафа Amica WCB2K60B36.1",
            price: "$980,00",
            imgSrc: "/img/category/built-in_appliances/wine_coolers/Amica WCB2K60B36.1.png",
            imgAlt: "Amica-Wine_Cooler",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Винна шафа Amica WCF2V60B38.1",
            price: "$925,00",
            imgSrc: "/img/category/built-in_appliances/wine_coolers/Amica WCF2V60B38.1.png",
            imgAlt: "Amica-Wine_Cooler",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            "name": "",
            "price": "",
            "imgSrc": "",
            "imgAlt": "",
            "sale": false,
            "imgWidth": "",
            "imgHeight": ""
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
