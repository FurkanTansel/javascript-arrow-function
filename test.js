let split = (text) => text.split(" ");
console.log(split("MUHAMMET FURKAN TANSEL"));

let sayi = (x, y) => x * y;
console.log(sayi(5, 6));

let mesaj = () => console.log("hello word");

hey();

let getProduct = (id, name) => ({
  id: id,
  name: name,
});

console.log(getProduct("1", "ıphone 7"));

const phones = [
  { name: "ıphone 8", price: 3000 },
  { name: "ıphone 7", price: 2500 },
  { name: "ıphone 6", price: 2000 },
  { name: "ıphone 5", price: 1000 },
];

let prices = phones.map((phone) => phone.price);
console.log(prices);









