document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Мікрохвильовка Amica AMGB20E2GB",
            price: "$190.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Amica AMGB20E2GB.webp",
            imgAlt: "Amica-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Amica AMMB20E5SGB",
            price: "$225.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Amica AMMB20E5SGB.webp",
            imgAlt: "Amica-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Amica AMMB25E2SGB",
            price: "$305.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Amica AMMB25E2SGB.webp",
            imgAlt: "Amica-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BEL554MS0",
            price: "$380.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BEL554MS0.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BEL623MB3",
            price: "$225.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BEL623MB3.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL524MB0",
            price: "$330.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL524MB0.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL524MS0",
            price: "$320.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL524MS0.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL524MW0",
            price: "$330.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL524MW0.jpeg",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL554MW0",
            price: "$385.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL554MW0.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL623MB3",
            price: "$210.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL623MB3.jpeg",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL634GB1",
            price: "$535.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL634GB1.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL634GS1",
            price: "$540.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL634GS1.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL634GW1",
            price: "$540.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL634GW1.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL7221B1",
            price: "$730.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL7221B1.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFL7221W1",
            price: "$715.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFL7221W1.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFR634GB1",
            price: "$535.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFR634GB1.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFR634GS1",
            price: "$520.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFR634GS1.webp",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Bosch BFR634GW1",
            price: "$535.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Bosch BFR634GW1.jpeg",
            imgAlt: "Bosch-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Electrolux LMS2203EMK",
            price: "$260.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Electrolux LMS2203EMK.png",
            imgAlt: "Electrolux-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Electrolux LMS2203EMX",
            price: "$235.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Electrolux LMS2203EMX.jpeg",
            imgAlt: "Electrolux-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },{
            name: "Мікрохвильовка Electrolux LMS4253TMK",
            price: "$325.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Electrolux LMS4253TMK.jpeg",
            imgAlt: "Electrolux-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Electrolux LMS4253TMX",
            price: "$320.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Electrolux LMS4253TMX.jpeg",
            imgAlt: "Electrolux-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Electrolux LMSD253TM",
            price: "$330.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Electrolux LMSD253TM.webp",
            imgAlt: "Electrolux-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Gorenje BM251SG2WG",
            price: "$240.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Gorenje BM251SG2WG.png",
            imgAlt: "Gorenje-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Gorenje BMI251SG3BG",
            price: "$265.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Gorenje BMI251SG3BG.png",
            imgAlt: "Gorenje-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Samsung ME83M",
            price: "$105.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Samsung ME83M.webp",
            imgAlt: "Samsung-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Samsung NQ5B4513IBK",
            price: "$400.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Samsung NQ5B4513IBK.jpeg",
            imgAlt: "Samsung-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Siemens BE732L1B1",
            price: "$740.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Siemens BE732L1B1.webp",
            imgAlt: "Siemens-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Siemens BE732R1B1",
            price: "$740.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Siemens BE732R1B1.webp",
            imgAlt: "Siemens-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Siemens BF634LGS1",
            price: "$515.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Siemens BF634LGS1.jpeg",
            imgAlt: "Siemens-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Siemens BF634RGS1",
            price: "$520.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Siemens BF634RGS1.jpeg",
            imgAlt: "Siemens-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool AMW 442 NB",
            price: "$240.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool AMW 442 NB.jpeg",
            imgAlt: "Whirlpool-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool AMW442IX",
            price: "$250.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool AMW442IX.jpeg",
            imgAlt: "Whirlpool-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool AMW4900NB",
            price: "$225.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool AMW4900NB.jpeg",
            imgAlt: "Whirlpool-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool AMW730IX",
            price: "$310.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool AMW730IX.webp",
            imgAlt: "Whirlpool-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool AMW730NB",
            price: "$330.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool AMW730NB.webp",
            imgAlt: "Whirlpool-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool AMW730SD",
            price: "$335.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool AMW730SD.webp",
            imgAlt: "Whirlpool-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool AMW730WH",
            price: "$335.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool AMW730WH.webp",
            imgAlt: "Whirlpool-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool AMW731NB",
            price: "$340.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool AMW731NB.webp",
            imgAlt: "Whirlpool-Microwave",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Мікрохвильовка Whirlpool WMF 200 GNB",
            price: "$185.00",
            imgSrc: "/img/category/built-in_appliances/microwaves/Whirlpool WMF 200 GNB.webp",
            imgAlt: "Whirlpool-Microwave",
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
