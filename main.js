console.log("=== TASK 1 RESULTS ===");


const smartProduct = {
    id: 1,
    title: "Smart Watch",
    price: 5000,
    tags: ["wearable", "tech", "fitness"],
    updatePrice: function(newValue) {
        this.price = newValue;
    }
};


smartProduct.updatePrice(4500);
console.log("Updated Product:", smartProduct);


console.log("=== TASK 2 RESULTS ===");


const userDatabase = [];


function registerUser(id, name, role) {
    const newUser = { id, name, role };
    userDatabase.push(newUser);
}


registerUser(101, "Ali", "Admin");
registerUser(102, "Sara", "Editor");
registerUser(103, "Bilal", "Viewer");


console.log("User Database:", userDatabase);


console.log("=== TASK 3 RESULTS ===");


const storeInventory = [
    { name: "Laptop", stockCount: 5, category: "Electronics" },
    { name: "Phone", stockCount: 2, category: "Electronics" },
    { name: "Shoes", stockCount: 12, category: "Fashion" },
    { name: "Book", stockCount: 1, category: "Education" }
];


const findLowStockItems = (threshold) => {
    const lowStock = [];
    for (let item of storeInventory) {
        if (item.stockCount < threshold) {
            lowStock.push(item);
        }
    }
    return lowStock;
};


console.log("Low Stock Items:", findLowStockItems(3));


console.log("=== TASK 4 RESULTS ===");


const prices = [100, 250, 400, 80, 150];
const discountedPrices = [];


for (let price of prices) {
    const discounted = price - (price * 0.15);
    discountedPrices.push(discounted);
}


console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);

