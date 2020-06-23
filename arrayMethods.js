const items  = [
    {name: 'kawasaki', price: 121000},
    {name: 'suzuki',   price: 70100},
    {name: 'honda',    price: 55000},
    {name: 'tvs',      price: 22000},
    {name: 'yamaha',   price: 35555},
    {name: 'mv agusta',price: 91000},
    {name: 'ducati',   price: 85000}
]

const filteredItemsbyPrice = items.filter((item) => {
 return item.price <= 55000;
});

const GetItemsbyName = items.map((item) => {
    return item.name
});
   
const foundItem = items.find((item) => {
    return item.name === "kawasaki"
});

items.forEach((item) => {
    console.log(item.name)
})

const hasinExpensiveItems = items.some((item) => {
    return item.price <= 50000;
});

const hasinExpensiveItemsEvery = items.every((item) => {
    return item.price >= 11000;
});

const getTotal = items.reduce((currentTotal,item) => {
   return item.price + currentTotal
}, 0);

//includes

console.table(items,['name'],['price'])
console.log(filteredItemsbyPrice)
console.log(GetItemsbyName)
console.log(foundItem)
console.log(hasinExpensiveItems)
console.log(hasinExpensiveItemsEvery)
console.log(getTotal)

