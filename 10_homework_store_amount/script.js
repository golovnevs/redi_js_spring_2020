let bikes = [{
        brand: "BMW",
        model: "R100",
        engineCapacity: 980,
        colour: "white",
        imgSrc: 'images/bmw.jpg',
        price: 3400,
        currency: "Euro",
        condition: {
        year: 1993,
        mileage: 40000,
        mileageUnit: "km"
    },
        amount: 1,
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
        currency: "Euro",
        condition: {
            year: 1974,
            mileage: 32000,
            mileageUnit: "km"
        },
        amount: 3,
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
        price:  3500,
        currency: "Euro",
        condition: {
            year: 1997,
            mileage: 23000,
            mileageUnit: "km"

        },
        amount: 0,
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
        currency: "Euro",
        condition: {
            year: 2003,
            mileage: 13000,
            mileageUnit: "km"
        },
        amount: 3,
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
        currency: "Pounds",
        condition: {
            year: 2008,
            mileage: 8000,
            mileageUnit: "mi"
        },
        amount: 5,
        description: "The Triumph Thruxton is a series of British motorcycles with parallel-twin engines and sports styling." +
                     "The name Thruxton was first applied to a handbuilt machine for endurance racing in the mid 1960s, " +
                     "and later revived in the 2000s. Production 2004 - 2016"
    }
];
let inCart = [];
function bikeListDisplay() {
    for (let i = 0; i < bikes.length; i++) {
        bikeCard = document.createElement("div");
        bikeCard.setAttribute("class", "card");
        const main = document.getElementById('main');

        if (bikes[i].amount > 1 && bikes[i].amount <= 3) {
            bikeCard.innerHTML = ` 
          <h2>${bikes[i].brand} ${bikes[i].model}</h2>
          <img class="bikePic" id="pic_${i}" src="${bikes[i].imgSrc}" />
          <li>Price: ${bikes[i].price} ${bikes[i].currency}</li>
          <li>Year: ${bikes[i].condition.year}</li>
          <li>Mileage: ${bikes[i].condition.mileage} ${bikes[i].condition.mileageUnit}</li>
          <li>Colour: ${bikes[i].colour}</li>
          <li>Engine: ${bikes[i].engineCapacity} cc</li>
          <p>${bikes[i].description}</p>
          <li id="${i}">Avaliable now: ${bikes[i].amount} (almost out of stock)</li>
            `;}

        else if (bikes[i].amount == 1) {
            bikeCard.innerHTML = ` 
          <h2>${bikes[i].brand} ${bikes[i].model}</h2>
          <img class="bikePic" id="pic_${i}" src="${bikes[i].imgSrc}" />
          <li>Price: ${bikes[i].price} ${bikes[i].currency}</li>
          <li>Year: ${bikes[i].condition.year}</li>
          <li>Mileage: ${bikes[i].condition.mileage} ${bikes[i].condition.mileageUnit}</li>
          <li>Colour: ${bikes[i].colour}</li>
          <li>Engine: ${bikes[i].engineCapacity} cc</li>
          <p>${bikes[i].description}</p>
          <li id="${i}">Avaliable now: ${bikes[i].amount} (last chance)</li>
            `;}

        else if (bikes[i].amount < 1) {
            bikeCard.innerHTML = ` 
          <h2>${bikes[i].brand} ${bikes[i].model}</h2>
          <img class="bikePic" id="pic_${i}" src="${bikes[i].imgSrc}" />
          <li>Price: ${bikes[i].price} ${bikes[i].currency}</li>
          <li id="${i}">Out of stock</li>
          <li>Year: ${bikes[i].condition.year}</li>
          <li>Mileage: ${bikes[i].condition.mileage} ${bikes[i].condition.mileageUnit}</li>
          <li>Colour: ${bikes[i].colour}</li>
          <li>Engine: ${bikes[i].engineCapacity} cc</li>
          <p>${bikes[i].description}</p>
          <li id=${i}>Out of stock.</li>
            `;}

        else {
            bikeCard.innerHTML = `    
          <h2>${bikes[i].brand} ${bikes[i].model}</h2>
          <img class="bikePic" id="pic_${i}" src="${bikes[i].imgSrc}" />
          <li>Price: ${bikes[i].price} ${bikes[i].currency}</li>
          <li>Year: ${bikes[i].condition.year}</li>
          <li>Mileage: ${bikes[i].condition.mileage} ${bikes[i].condition.mileageUnit}</li>
          <li>Colour: ${bikes[i].colour}</li>
          <li>Engine: ${bikes[i].engineCapacity} cc</li>
          <p>${bikes[i].description}</p>
          <li id="${i}">Avaliable now: ${bikes[i].amount}</li>
            `;}

        const buttonElement = document.createElement('button');
        buttonElement.innerText = 'Add to cart';
        buttonElement.setAttribute("class", "button");
        if (bikes[i].amount ==0){
            buttonElement.setAttribute("class", "buttonDisabled");
            buttonElement.setAttribute("disabled", "true");
        }
        else {
        buttonElement.setAttribute("id", "addToCart");
        }
        buttonElement.addEventListener('click', function() {
            inCart.push(bikes[i]);
            if (bikes[i].amount == 1) {
                buttonElement.setAttribute("disabled", "true");
                buttonElement.setAttribute("class", "buttonDisabled");
                document.getElementById(i).innerHTML= `
                 <li id=${i}>Out of stock.</li>
                `;}

            else if (bikes[i].amount > 2 && bikes[i].amount <= 4) {
                bikes[i].amount = bikes[i].amount-1;
                document.getElementById(i).innerHTML= `
                <li id=${i}>Avaliable now: ${bikes[i].amount} (almost out of stock)</li>
                `;}

            else if (bikes[i].amount == 2) {
                bikes[i].amount = bikes[i].amount-1;
                document.getElementById(i).innerHTML= `
                <li id=${i}>Avaliable now: ${bikes[i].amount} (last chance)</li>
                `;}

            else {
                bikes[i].amount = bikes[i].amount-1;
                document.getElementById(i).innerHTML= `
                <li id=${i}>Avaliable now: ${bikes[i].amount}</li>
                `;}
        });
        bikeCard.appendChild(buttonElement);
        main.appendChild(bikeCard);
    }
};

bikeListDisplay();

showCart.addEventListener('click', cartListDisplay);
function cartListDisplay() {
    let totalSumm = 0;
    for (let i = 0; i < inCart.length; i++) {
        totalSumm = totalSumm + inCart[i].price;
        bikeCard = document.createElement("div");
        bikeCard.setAttribute("class", "card");
        const main = document.getElementById('cartMain');
        bikeCard.innerHTML = `   
          <h2>${inCart[i].brand} ${inCart[i].model}</h2>
          <img class="bikePic" src="${inCart[i].imgSrc}" />
          <li>Year: ${inCart[i].condition.year}</li>
          <li>Mileage: ${inCart[i].condition.mileage} ${inCart[i].condition.mileageUnit}</li>
          <li>Colour: ${inCart[i].colour}</li>
          <li>Engine: ${inCart[i].engineCapacity} cc</li>
          <p>${inCart[i].description}</p>
          <h3>Price: ${inCart[i].price} ${inCart[i].currency}</h3>
        `;
        main.appendChild(bikeCard);
    }
    main.innerHTML = ` <h1>You have ${inCart.length} items in your cart. Total price: ${totalSumm} Euro.</h1>
                       <a href="online_store.html" class="navigation"><h3>Back to the bike list</h3></a>
    `;
};
