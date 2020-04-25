<template>
  <div class="main">
    <div class="container">
      <h1>Product Details</h1>
      <div class="cart">
        <form @submit.prevent="onSubmit()">
          <div class="cart-item">
            <label for="category">Category</label>
            <select
              name="category"
              id="category"
              v-model="selectedOption"
              @change="getProducts(selectedOption)"
              required
            >
              <option v-for="(option, i) in options" :key="i">{{
                option
              }}</option>
            </select>
          </div>
          <div class="cart-item">
            <label for="product">Product</label>
            <select
              name="product"
              id="product"
              v-model="selectedProduct"
              required
              @change="productChange()"
            >
              <option v-for="(product, i) in productNames" :key="i">{{
                product
              }}</option>
            </select>
          </div>
          <div class="cart-item">
            <label for="quanitity">Quantity</label>
            <input
              :disabled="!selectedOption || !selectedProduct"
              placeholder="Enter quantity"
              id="quantity"
              type="number"
              v-model="quantity"
              @keyup="calculatePrice(selectedProduct, quantity)"
              required
            />
          </div>
          <div class="cart-item">
            <label for="total">Total Price</label>
            <input disabled id="total" v-model="finalPrice" type="number" />
          </div>
          <div class="actions">
            <input class="submit" type="submit" value="submit" />
            <button @click="clear()">Clear</button>
          </div>
        </form>
      </div>
    </div>
    <div class="results" style="color: black">
      <h1 style="color:black">Cart</h1>
      <div v-if="orders && orders.length > 0">
        <div class="order" v-for="(order, i) in orders" :key="i">
          {{ i + 1 }}) Category:{{ order.category }}| Product:
          {{ order.product }}| Quantity:{{ order.quanitity }}| Price
          {{ order.price }}
        </div>
      </div>
      <div style="color: black" v-else>Your cart is empty</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      quantity: Number,
      finalPrice: Number,
      selectedOption: String,
      selectedProduct: String,
      options: [],
      products: [],
      orders: [],
      productsFull: [
        { category: "Electronics", name: "Television", price: 20000 },
        { category: "Electronics", name: "Laptop", price: 30000 },
        { category: "Electronics", name: "Phone", price: 10000 },
        { category: "Grocery", name: "Soap", price: 40 },
        { category: "Grocery", name: "Powder", price: 90 }
      ],
      productNames: []
    };
  },
  created() {
    this.uniqueOptions();
  },
  methods: {
    clear() {
      this.reset();
      this.orders = [];
    },
    reset() {
      this.order = {};
      this.selectedOption = null;
      this.selectedProduct = null;
      this.quantity = null;
      this.finalPrice = null;
    },
    onSubmit() {
      const order = {
        category: this.selectedOption,
        product: this.selectedProduct,
        quantity: this.quantity,
        price: this.finalPrice
      };
      this.orders.push(order);
      this.reset();
    },
    uniqueOptions() {
      for (let i = 0; i < this.productsFull.length; i++) {
        this.options.push(this.productsFull[i].category);
      }
      this.options = new Set(this.options);
    },
    getProducts(selectedCategory) {
      this.productNames = [];
      this.products = this.productsFull.filter(
        product => product.category === selectedCategory
      );
      for (let i = 0; i < this.products.length; i++) {
        this.productNames.push(this.products[i].name);
      }
      this.productChange();
    },
    productChange() {
      this.quantity = null;
      this.finalPrice = null;
    },
    calculatePrice(selectedProduct, quantity) {
      let priceArray = this.productsFull.filter(
        product => product.name === selectedProduct
      );
      this.finalPrice = priceArray[0].price * quantity;
    }
  }
};
</script>

<style scoped>
.main {
  background-color: none;
  display: flex;
  flex-direction: row;
}
select {
  width: 200px;
}
input {
  width: 200px;
}
label {
  color: white;
  font-size: 15px;
  font-family: sans-serif;
  margin-right: 10px;
  font-weight: bold;
}
label::after {
  content: ":";
}
.container {
  /* margin-left: 35%; */
  margin-top: 5%;
  min-height: 400px;
  min-width: 400px;
  max-height: 400px;
  max-width: 400px;
  border: 1px solid black;
  background-color: blue;
}
.cart {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  min-height: 300px;
  min-width: 85%;
  max-width: 300px;
  max-width: 85%;
  border: 5px solid white;
}
.cart-item {
  border: 1px solid white;
  padding: 15px;
  flex: 1;
}
h1 {
  color: white;
}
.actions {
  margin-top: 20px;
}
.actions > button {
  padding-right: 10px;
  margin-right: 10px;
}
.submit {
  width: 60px;
  margin-right: 10px;
}
.results {
  margin-top: 5%;
  max-height: 400px;
  max-width: 500px;
  border: 1px solid black;
  margin-left: 100px;
  border: 1px solid black;
  height: 400px;
  width: 500px;
}
.order {
  margin-bottom: 10px;
}
</style>
