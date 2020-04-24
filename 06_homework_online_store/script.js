let bikes = [{
    brand: "BMW",
    model: "R100",
    engineCapacity: 980,
    colour: "white",
    imgSrc: 'images/bmw.jpg',
    price: 2500,
    condition: {
        year: 1993,
        mileage: 40000
    },
    inStock: true,
    description: "BMW motorcycle series, using a two-cylinder four-stroke boxer engine of 980 cc capacity. " +
        "Model production began in 1976, with a premature shutdown and subsequent restart in 1985," +
        " and final completion of the series in 1996."
},

    {
        brand: "Honda",
        model: "CB400F",
        engineCapacity: 408,
        colour: "grey",
        imgSrc: 'images/honda.jpg',
        price: 2500,
        condition: {
            year: 1974,
            mileage: 32000
        },
        inStock: true,
        description: "The Honda CB400F is a motorcycle produced by Honda from 1975 to 1977. " +
            "It first appeared at the 1974 Cologne motorcycle show, Intermot, and was dropped from the Honda range in 1978." +
            "It had an air-cooled, transverse-mounted 408 cc inline four-cylinder engine"
    },

    {
        brand: "Yamaha",
        model: "SR400",
        engineCapacity: 400,
        colour: "black",
        imgSrc: 'images/yamaha.jpg',
        price: 3500,
        condition: {
            year: 1997,
            mileage: 23000
        },
        inStock: true,
        description: "Single-cylinder, air-cooled, two-passenger motorcycles manufactured as a street version of the " +
            "Yamaha XT500, with a standard riding posture and styling resembling the Universal Japanese Motorcycles " +
            "of the 1970s. "
    },

    {
        brand: "Kawasaki",
        model: "W650",
        engineCapacity: 650,
        colour: "black",
        imgSrc: 'images/kawasaki.jpg',
        price: 3200,
        condition: {
            year: 2003,
            mileage: 13000
        },
        inStock: true,
        description: "It is a retro standard motorcycle marketed by Kawasaki for model years 1999-2007" +
            "In 1999,Kawasaki introduced the W650, resembling British motorcycles of the early 1960s, notably the Triumph Bonneville."
    },

    {
        brand: "Triumph",
        model: "Thruxton",
        engineCapacity: 865,
        colour: "black",
        imgSrc: 'images/triumph.jpg',
        price: 6000,
        condition: {
            year: 2008,
            mileage: 8000
        },
        inStock: false,
        description: "The Triumph Thruxton is a series of British motorcycles with parallel-twin engines and sports styling." +
            " The name Thruxton was first applied to a handbuilt machine for endurance racing in the mid 1960s, " +
            "and later revived in the 2000s. Production 2004 - 2016"
    }
];
console.log(bikes);
let i;

function bikeDisplay() {
    for (i = 0; i < bikes.length; i++) {
        bikeCard = document.createElement("div");
        bikeCard.setAttribute("class", "card");
        const main = document.getElementById('main')
        const bikeEl = document.getElementById('card');
        bikeCard.innerHTML = `
<h2>${bikes[i].brand} ${bikes[i].model}</h2>
<img class="bikePic" src="${bikes[i].imgSrc}" />
<li>Price: ${bikes[i].price} Euro.</li>
<li>Year: ${bikes[i].condition.year}</li>
<li>${bikes[i].condition.mileage} Km</li>
<li>Colour: ${bikes[i].colour}</li>
<li>Engine: ${bikes[i].engineCapacity} cc</li>
<p>${bikes[i].description}</p>
<button class="buyButton"> Buy now </button>
                `;
        main.appendChild(bikeCard);
    }
}

function bikesCountDisplay() {
    bikeCountEl = document.getElementById('welcomeTitle');
    bikeCountEl.innerHTML = `
Look at these ${bikes.length} awesome bikes below:
                `;
};
bikesCountDisplay();
bikeDisplay();