const cars = [
    { name: "Toyota Camry", price: 5000, category: "Sedan", image: "images/toyota.jpg", details: "The Toyota Camry is one of the best-selling midsize sedans, known for its reliability, safety, and fuel efficiency. It's a great choice for commuters, families, and anyone looking for a balance of performance and comfort." },
    { name: "Ford Mustang", price: 30000, category: "Sports", image: "images/mustang.jpg", details: "The Mercedes-Benz S-Class combines sophistication with innovation. Featuring a 3.0-liter V6 engine paired with a 9-speed automatic transmission, this sedan guarantees a smooth, quiet ride. The cabin offers a world-class experience, with massaging seats, advanced tech, and the finest materials. Whether you're commuting to work or embarking on a road trip, the S-Class is the definition of luxury and comfort." },
    { name: "Tesla Model S", price: 45000, category: "Electric", image: "images/tesla.jpg", details: "The Tesla Model 3 is a game-changer in the electric car industry. Powered by electric motors and a long-range battery, the Model 3 offers a seamless driving experience with instant torque and incredible efficiency. Enjoy cutting-edge technology, from Autopilot to a minimalist interior with a central touchscreen. The Model 3 offers sustainability without sacrificing performance or style. Drive into the future today." }
    ,{ name: "Toyota Camry", price: 20000, category: "Sedan", image: "images/toyota1.jpg", details: "The Audi A8 is the epitome of sophistication, combining cutting-edge technology with unparalleled luxury. Under the hood, it features a 3.0-liter V6 that delivers a smooth yet powerful performance, with 333 horsepower and a zero-to-sixty time of just 5.6 seconds. The interior is an oasis of comfort, equipped with premium leather upholstery, heated and ventilated seats, and a Bang & Olufsen sound system for a concert-like experience on every drive. Whether you're commuting or embarking on a long journey, the A8’s advanced driver-assistance features, such as adaptive cruise control and lane-keeping assist, ensure you travel in ultimate comfort and style." },
    { name: "Ford Mustang", price: 35000, category: "Sports", image: "images/mustang1.jpg", details: "The Ford F-150 Raptor is a beast on any terrain. Powered by a 3.5-liter EcoBoost V6 engine, this truck delivers 450 horsepower for unmatched power and performance. It’s built for off-roading with a robust suspension system, reinforced frame, and aggressive design. Whether you're hauling heavy loads or tackling tough trails, the F-150 Raptor offers both rugged utility and modern technology." },
    { name: "Tesla Model S", price: 70000, category: "Electric", image: "images/tesla1.jpg", details: "The Tesla Model 3 is a game-changer in the electric car industry. Powered by electric motors and a long-range battery, the Model 3 offers a seamless driving experience with instant torque and incredible efficiency. Enjoy cutting-edge technology, from Autopilot to a minimalist interior with a central touchscreen. The Model 3 offers sustainability without sacrificing performance or style. Drive into the future today." }
,    { name: "Toyota Camry", price: 55000, category: "Sedan", image: "images/toyota2.jpg", details: "The Ferrari 488 GTB is the epitome of luxury and performance. With its powerful 3.9-liter twin-turbo V8 engine, this car delivers an exhilarating 661 horsepower and goes from 0 to 60 mph in just 3.0 seconds. Its sleek, aerodynamic design ensures that you not only feel the power but look amazing while doing it. Whether you're on the track or the open road, the 488 GTB offers unparalleled driving pleasure and elegance.." },
    { name: "Ford Mustang", price: 41000, category: "Sports", image: "images/mustang2.jpg", details: "Experience the thrill of the open road with the Porsche 911 Cabriolet. With a powerful 3.0-liter turbocharged engine and 374 horsepower, this convertible offers an exhilarating driving experience. The retractable soft top lets you enjoy the sun and wind in style. Whether you're on winding country roads or cruising the coast, the 911 Cabriolet combines performance with elegance in every turn." },
    { name: "Tesla Model S", price: 85000, category: "Electric", image: "images/tesla2.jpg", details: "The Ford F-150 Raptor is a beast on any terrain. Powered by a 3.5-liter EcoBoost V6 engine, this truck delivers 450 horsepower for unmatched power and performance. It’s built for off-roading with a robust suspension system, reinforced frame, and aggressive design. Whether you're hauling heavy loads or tackling tough trails, the F-150 Raptor offers both rugged utility and modern technology." }
,    { name: "Toyota Camry", price: 22000, category: "Sedan", image: "images/toyota3.jpg", details: "The BMW 7 Series is a luxurious full-size sedan built for those who demand nothing but the best. Equipped with a 4.4-liter twin-turbo V8, it offers 523 horsepower for an unforgettable driving experience. Inside, you’ll find premium leather seats, a massive touchscreen, and a Bowers & Wilkins sound system. With its refined styling, unmatched comfort, and advanced features, the 7 Series is the epitome of luxury." },
    { name: "Ford Mustang", price: 39000, category: "Sports", image: "images/mustang3.jpg", details: "Experience the thrill of the open road with the Porsche 911 Cabriolet. With a powerful 3.0-liter turbocharged engine and 374 horsepower, this convertible offers an exhilarating driving experience. The retractable soft top lets you enjoy the sun and wind in style. Whether you're on winding country roads or cruising the coast, the 911 Cabriolet combines performance with elegance in every turn." },
    { name: "Tesla Model S", price: 65000, category: "Electric", image: "images/tesla3.jpg", details: "The Range Rover Velar is an ideal blend of luxury and off-road capability. This SUV comes equipped with a 2.0-liter turbocharged engine, delivering an impressive performance on both paved roads and rugged terrain. Inside, you’ll find a beautifully designed interior with premium leather seats, advanced navigation, and state-of-the-art audio systems. Whether you're navigating city streets or exploring nature, the Velar ensures an exceptional driving experience." }
   , { name: "Toyota Camry", price: 28000, category: "Sedan", image: "images/toyota4.jpg", details: "The Mercedes-Benz S-Class combines sophistication with innovation. Featuring a 3.0-liter V6 engine paired with a 9-speed automatic transmission, this sedan guarantees a smooth, quiet ride. The cabin offers a world-class experience, with massaging seats, advanced tech, and the finest materials. Whether you're commuting to work or embarking on a road trip, the S-Class is the definition of luxury and comfort." },
    { name: "Ford Mustang", price: 50000, category: "Sports", image: "images/mustang4.jpg", details: "The Ferrari 488 GTB is the epitome of luxury and performance. With its powerful 3.9-liter twin-turbo V8 engine, this car delivers an exhilarating 661 horsepower and goes from 0 to 60 mph in just 3.0 seconds. Its sleek, aerodynamic design ensures that you not only feel the power but look amazing while doing it. Whether you're on the track or the open road, the 488 GTB offers unparalleled driving pleasure and elegance." },
    { name: "Tesla Model S", price: 74000, category: "Electric", image: "images/tesla4.jpg", details: "The BMW 7 Series is a luxurious full-size sedan built for those who demand nothing but the best. Equipped with a 4.4-liter twin-turbo V8, it offers 523 horsepower for an unforgettable driving experience. Inside, you’ll find premium leather seats, a massive touchscreen, and a Bowers & Wilkins sound system. With its refined styling, unmatched comfort, and advanced features, the 7 Series is the epitome of luxury." }
];

let filteredCars = [...cars];

function displayCars() {
    let carList = document.getElementById("carList");
    carList.innerHTML = "";

    filteredCars.forEach(car => {
        let carDiv = document.createElement("div");
        carDiv.classList.add("car");
        carDiv.dataset.name = car.name.toLowerCase();

        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Price: $${car.price.toLocaleString()}</p>
            <button onclick="viewCarDetails('${car.name}')">View Details</button>
        `;

        carList.appendChild(carDiv);
    });
}

function searchCars() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    filteredCars = cars.filter(car => car.name.toLowerCase().includes(input));
    displayCars();
}

function filterByPrice() {
    let maxPrice = parseInt(document.getElementById('priceFilter').value);
    if (!isNaN(maxPrice)) {
        filteredCars = cars.filter(car => car.price <= maxPrice);
    } else {
        filteredCars = [...cars];  // Reset if input is invalid
    }
    displayCars();
}

function filterByCategory() {
    let category = document.getElementById('categoryFilter').value;
    filteredCars = category === "all" ? [...cars] : cars.filter(car => car.category.toLowerCase() === category.toLowerCase());
    displayCars();
}

function viewCarDetails(carName) {
    let car = cars.find(c => c.name === carName);
    if (car) {
        localStorage.setItem("carDetails", JSON.stringify(car));
        window.location.href = "car-details.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayCars();

    let contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let successMessage = document.getElementById('contactSuccessMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });
    }
});
