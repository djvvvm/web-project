document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Блендер Bosch MS6CB6110",
            price: "$50,00",
            imgSrc: "/img/category/small_appliances/blenders/Bosch MS6CB6110.jpg",
            imgAlt: "Bosch-Blender",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Блендер Bosch MSM67170",
            price: "$60,00",
            imgSrc: "/img/category/small_appliances/blenders/Bosch MSM67170.jpg",
            imgAlt: "Bosch-Blender",
            sale: false,
            imgWidth: "320px",
            imgHeight: "320px"
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
