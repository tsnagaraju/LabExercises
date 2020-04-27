<template>
  <div>
    <h3>Products</h3>
    <br />
    <form id="form1">
      <label>Category:</label>
      <select v-model="cat">
        <option v-for="(c,i) in categories" :key="i" :value="c">{{c}}</option>
      </select>
      <br />
      <label>Product:</label>
      <select v-model="prodPrice">
        <option v-for="(p,i) in filterProducts()" :key="i" :value="p.price">{{p.name}}</option>
      </select>
      <br />
      <label>Quantity:</label>
      <input type="number" v-model="qty" />
      <br />
      <br />
      <label>Total Price: {{calculate()}}</label>
      <br />
      <br />
      <button type="submit">Submit</button>
      <button type="reset">Clear</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      categories: ["Electronics", "Grocery"],
      products: [
        { category: "Electronics", name: "Television", price: 20000 },
        { category: "Electronics", name: "Laptop", price: 30000 },
        { category: "Electronics", name: "Phone", price: 10000 },
        { category: "Grocery", name: "Soap", price: 40 },
        { category: "Grocery", name: "Powder", price: 90 }
      ],
      cat: "",
      prodPrice: 0,
      qty: 0,
      total: 0
    };
  },
  methods: {
    filterProducts() {
      const newProducts = this.products.filter(
        element => element.category == this.cat
      );

      return newProducts;
    },
    calculate() {
      this.total = this.prodPrice * this.qty;
      return this.total;
    }
  }
};
</script>

<style scoped>
</style>