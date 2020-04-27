<template>
  <div>
    <h3>Products</h3>
    <br />
    <label>Sort by price :</label>
    <select v-model="sortBy">
      <option value="l2h">Low to high</option>
      <option value="h2l">High to low</option>
    </select>
    <button @click="sort" >Sort</button>
    <br />
    <table>
      <tr>
        <th>Id</th>
        <th>Product</th>
        <th>Price</th>
      </tr>
      <tr v-for="p in products" :key="p.id">
        <td>{{p.id}}</td>
        <td>{{p.name}}</td>
        <td>{{p.price}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      products: [
        { id: 1001, name: "Television", price: 20000 },
        { id: 1002, name: "Laptop", price: 30000 },
        { id: 1003, name: "Phone", price: 10000 },
        { id: 1004, name: "Soap", price: 40 },
        { id: 1005, name: "Powder", price: 90 }
      ],
      sortBy: ""
    };
  },
  methods: {
    sort() {
      if (this.sortBy == "l2h")
        this.products.sort(function(a, b) {
          return a.price - b.price;
        });
      else
        this.products.sort(function(a, b) {
          return b.price - a.price;
        });
    }
  }
};
</script>

<style scoped>
</style>