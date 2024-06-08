document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Витяжка Elica ELITE 14 LUX BL/A/50",
            price: "$75,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica ELITE 14 LUX BLA50.jpeg",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica ELITE 14 LUX BL/A/60",
            price: "$80,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica ELITE 14 LUX BLA60.jpeg",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica ELITE 14 LUX GRIX/A/60",
            price: "$80,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica ELITE 14 LUX GRIXA60.jpeg",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica ERA C BL/A/52",
            price: "$80,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica ERA C BLA52.jpeg",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica ERA C BL/A/72",
            price: "$90,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica ERA C BLA72.jpeg",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica ERA C IX/A/52",
            price: "$80,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica ERA C IXA52.jpeg",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica ERA C WH/A/52",
            price: "$80,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica ERA C WHA52.jpeg",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica LANE B BL MAT/A/52",
            price: "$215,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica LANE B BL MATA52.webp",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica LANE BL MAT/A/52",
            price: "$230,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica LANE BL MATA52.webp",
            imgAlt: "Elica-Hood",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Витяжка Elica LANE IX/A/52",
            price: "$235,00",
            imgSrc: "/img/category/built-in_appliances/hoods/Elica LANE IXA52.webp",
            imgAlt: "Elica-Hood",
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
