const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
const notDelivered = orders.filter(
  (order) => order.customerId === "234" && !order.delivered
);
console.log(notDelivered);

// 2) Create a new property on each order with the total price of items ordered.
const totalPrice = orders.map((order) => ({
  ...order,
  TotalPrice: order.items.reduce((acc, item) => acc + item.price, 0),
}));

console.log(totalPrice);

// 3) Have all the orders been delivered?

const isDelivered = orders.every((order) => order.delivered);

console.log(isDelivered);

// 4) Has the customer with ID '123' made any orders?

const hasMadeOrder = orders.some((order) => order.customerId == "123");

console.log(hasMadeOrder);

// 5) Have any products with an id of 123 been sold?
const withPrdId = orders.reduce(
  (acc, order) =>
    acc + order.items.reduce((acc, item) => acc + (item.productId === "123"), 0),
  0
);
console.log(withPrdId);
