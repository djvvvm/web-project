document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Еспрес Bosch CTL636EB6",
            price: "$1550,00",
            imgSrc: "/img/category/small_appliances/coffee_machines/Bosch CTL636EB6.webp",
            imgAlt: "Bosch-Coffee_Machine",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Еспрес Bosch CTL7181B0",
            price: "$2900,00",
            imgSrc: "/img/category/small_appliances/coffee_machines/Bosch CTL7181B0.webp",
            imgAlt: "Bosch-Coffee-Machine",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Еспрес Siemens CT636LES1",
            price: "$1500,00",
            imgSrc: "/img/category/small_appliances/coffee_machines/Siemens CT636LES1.webp",
            imgAlt: "Siemens-Coffee-Machine",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Еспрес Siemens CT636LEW1",
            price: "$1430,00",
            imgSrc: "/img/category/small_appliances/coffee_machines/Siemens CT636LEW1.webp",
            imgAlt: "Siemens-Coffee-Machine",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Еспрес Siemens CT718L1B0",
            price: "$2900,00",
            imgSrc: "/img/category/small_appliances/coffee_machines/Siemens CT718L1B0.webp",
            imgAlt: "Siemens-Coffee-Machine",
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
