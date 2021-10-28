// 1.1 cambia el valor de la propiedad age a 25//
const character = {name: "jack Sparrow", age: 10};
character["age"] 
character["name"]

character["age"]= 25
//{name: 'Jack Sparrow', age: 25}

//1.2mostrar en consola
const firtName= 'Jon';
const lastName='Snow';
const age= 24;
 
console.log('Soy'+' '+firtName+' '+lastName+', tengo'+' '+age+'años'+' '+'y me gustan los lobos')

// 1.3 imprime en consola la suma la suma del precio de ambos juguetes 
const toy1 = {name: 'Buss myYear', price: 19}
const toy2 = {name: 'Rallo Mcking', price: 29}

toy1['price']
toy2['price']
const priceTotal= [toy1['price']+toy2['price']]

console.log(priceTotal)

//actualiza el valor de la variable globalPrice y actualiza la propiedad finalPrice
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice= 2500;

car1["finalPrice"]
car2["finalPrice"]

car1.finalPrice= car1.basePrice + globalBasePrice;
car2.finalPrice= car2.basePrice + globalBasePrice;






