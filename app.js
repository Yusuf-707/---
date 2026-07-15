let id = "id";
let name = "customer";
let prom = +prompt("введите ID");

const obj1 = {
  [id]: 123,
  [name]: "Ali",
  items: [{ name: "Samsung Galaxy S22 Ultra", price: 39000, quantity: 1 }],
  status: "pending",
};
const obj2 = {
  [id]: 456,
  [name]: "Argen",
  items: [{ name: "Iphone 15pro", price: 4000, quantity: 1 }],
  status: "shipped",
};
const obj3 = {
  [id]: 789,
  [name]: "Tima",
  items: [{ name: "Xiaomi 14", price: 60000, quantity: 3 }],
  status: "pending",
};

if (prom == obj1.id) {
  console.log(Object.values(obj1.items));
} else if (prom == obj2.id) {
  console.log(Object.values(obj2.items));
} else if (prom == obj3.id) {
  console.log(Object.values(obj3.items));
} else {
  console.log("Идентификатор не найден");
}
