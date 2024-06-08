document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Духова шафа AEG BPB331020M",
            price: "$420,00",
            imgSrc: "/img/category/built-in_appliances/ovens/AEG BPB331020M.jpeg",
            imgAlt: "AEG-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Amica EB6229BA",
            price: "$330,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Amica EB6229BA.webp",
            imgAlt: "Amica-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Amica EB7541DB Fine",
            price: "$225,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Amica EB7541DB Fine.webp",
            imgAlt: "Amica-Oven",
            sale: false,
            imgWidth: "290px",
            imgHeight: "290px"
        },
        {
            name: "Духова шафа Amica EB7541W",
            price: "$200,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Amica EB7541W.jpeg",
            imgAlt: "Amica-Oven",
            sale: false,
            imgWidth: "290px",
            imgHeight: "290px"
        },
        {
            name: "Духова шафа Amica MEB6521 Fine",
            price: "$235,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Amica MEB6521 Fine.png",
            imgAlt: "Amica-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch CMG633BB1",
            price: "$910,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch CMG633BB1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch CMG676BB1",
            price: "$1210,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch CMG676BB1.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch CMG7241B1",
            price: "$1120,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch CMG7241B1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch CMG7361B1",
            price: "$1330,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch CMG7361B1.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBA2140B0",
            price: "$450,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBA2140B0.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBA3140S0",
            price: "$330,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBA3140S0.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBA372BB0",
            price: "$535,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBA372BB0.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBA534BW0",
            price: "$340,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBA534BW0.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBA534EB0",
            price: "$300,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBA534EB0.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBA5360W0",
            price: "$430,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBA5360W0.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBA578BB0",
            price: "$540,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBA578BB0.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBF114BS1",
            price: "$290,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBF114BS1.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBF114ES0",
            price: "$305,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBF114ES0.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBF134ES1",
            price: "$290,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBF134ES1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG5370B0",
            price: "$385,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG5370B0.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG5370S0",
            price: "$375,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG5370S0.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG5780S6",
            price: "$540,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG5780S6.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG634BS1",
            price: "$575,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG634BS1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG634BW1",
            price: "$620,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG634BW1.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG635BB1",
            price: "$565,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG635BB1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG636LB1",
            price: "$1030,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG636LB1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG6750S1",
            price: "$750,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG6750S1.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG675BB1",
            price: "$740,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG675BB1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG675BW1",
            price: "$810,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG675BW1.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG6764S1",
            price: "$920,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG6764S1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG676ES6",
            price: "$1060,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG676ES6.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG7341W1",
            price: "$840,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG7341W1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HBG7784B1",
            price: "$1260,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HBG7784B1.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HMG636RS1",
            price: "$1330,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HMG636RS1.jpeg",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HMG6764B1",
            price: "$1600,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HMG6764B1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HNG6764B6",
            price: "$2000,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HNG6764B6.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Bosch HSG636BW1",
            price: "$1300,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Bosch HSG636BW1.webp",
            imgAlt: "Bosch-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Electrolux EOD6C77WZ",
            price: "$410,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Electrolux EOD6C77WZ.jpeg",
            imgAlt: "Electrolux-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Electrolux LOE7C31S",
            price: "$480,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Electrolux LOE7C31S.jpeg",
            imgAlt: "Electrolux-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BO6712E02XK",
            price: "$220,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BO6712E02XK.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BO6725E02BG",
            price: "$250,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BO6725E02BG.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BOS67371SYW",
            price: "$325,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BOS67371SYW.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BOS6737E06FBG",
            price: "$285,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BOS6737E06FBG.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BOS6737E13FBG",
            price: "$290,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BOS6737E13FBG.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BOS6737SYB",
            price: "$330,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BOS6737SYB.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BOS6737SYW",
            price: "$340,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BOS6737SYW.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BPS6737E04DBG",
            price: "$360,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BPS6737E04DBG.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BPS6747A06BG",
            price: "$405,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BPS6747A06BG.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Gorenje BPSA6747A08BG",
            price: "$465,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Gorenje BPSA6747A08BG.png",
            imgAlt: "Gorenje-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens CM656GBS1",
            price: "$1300,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens CM656GBS1.jpeg",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HB634GBS1",
            price: "$680,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HB634GBS1.jpeg",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HB634GBW1",
            price: "$725,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HB634GBW1.webp",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HB636GBS1",
            price: "$860,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HB636GBS1.jpeg",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HB675GBS1",
            price: "$710,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HB675GBS1.webp",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HB676G0S1",
            price: "$760,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HB676G0S1.jpeg",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "ухова шафа Siemens HB774G2B1",
            price: "$1010,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HB774G2B1.jpeg",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HM656GNS1",
            price: "$1250,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HM656GNS1.jpeg",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HM676G0S6",
            price: "$1350,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HM676G0S6.jpeg",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HM678G4S1",
            price: "$1880,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HM678G4S1.png",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "265px",
            imgHeight: "265px"
        },
        {
            name: "Духова шафа Siemens HM778GMB1",
            price: "$2050,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HM778GMB1.webp",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HN678G4S6",
            price: "$1980,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HN678G4S6.jpeg",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Siemens HR776G1B1",
            price: "$1230,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Siemens HR776G1B1.webp",
            imgAlt: "Siemens-Oven",
            sale: false,
            imgWidth: "290px",
            imgHeight: "290px"
        },
        {
            name: "Духова шафа Teka HLB 8600 ST",
            price: "$400,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Teka HLB 8600 ST.jpeg",
            imgAlt: "Teka-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Teka HLC 8400 LB",
            price: "$300,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Teka HLC 8400 LB.webp",
            imgAlt: "Teka-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool AKZ9 6230 NB",
            price: "$320,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool AKZ9 6230 NB.webp",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool AKZ9 6230 S",
            price: "$320,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool AKZ9 6230 S.webp",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool AKZ9 6230IX",
            price: "$305,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool AKZ9 6230IX.webp",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool AKZ9 6240 NB",
            price: "$295,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool AKZ9 6240 NB.webp",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool AKZ9 7940NB",
            price: "$300,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool AKZ9 7940NB.jpeg",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool AKZ9 9481 SP NB",
            price: "$405,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool AKZ9 9481 SP NB.jpeg",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool OAKZ9 7921 CS NB",
            price: "$325,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool OAKZ9 7921 CS NB.webp",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool OMR55CU1B",
            price: "$265,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool OMR55CU1B.webp",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool OMR58HU1B",
            price: "$255,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool OMR58HU1B.webp",
            imgAlt: "Whirlpool-Oven",
            sale: false,
            imgWidth: "220px",
            imgHeight: "220px"
        },
        {
            name: "Духова шафа Whirlpool W9 OS2 4S1 P",
            price: "$540,00",
            imgSrc: "/img/category/built-in_appliances/ovens/Whirlpool W9 OS2 4S1 P.webp",
            imgAlt: "Whirlpool-Oven",
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
