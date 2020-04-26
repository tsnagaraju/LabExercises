<template>
  <div>
    <h1>Task-1</h1>
    <h2>Product Details</h2>
    <br />
    <br />
    <br />
    <table align="center" border="2">
      <tr>
        <td>
          <label>Category:</label>
        </td>
        <td>
          <select v-model="catChoice">
            <option v-for="(c,i) in catList" :key="i" @click="method1(c)" @change="method1(c)">{{c}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <label>Product:</label>
        </td>
        <td>
          <select v-model="prodChoice">
            <option disabled value v-if="catChoice==null">--------</option>
            <option v-for="(p,i) in list1" :key="i" @click="method2(p)" @change="method2(p)">{{p}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <label>Quantity:</label>
        </td>
        <td>
          <input type="number" v-model="qty" @change="method4(qty)" />
        </td>
      </tr>
      <tr>
        <td>
          <label>Total Price:</label>
        </td>
        <td>
          <input v-model="totalPrice" readonly />
        </td>
      </tr>
      <tr>
        <td>
          <button @click="method3()">Submit</button>
        </td>
        <td>
          <button onclick="history.go(0);">Clear</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Task1",
  data() {
    return {
      catList: ["Electronics", "Grocery"],
      prodList: ["Television", "Phone", "Laptop"],
      grocList: ["Powder", "Soap"],
      catChoice: null,
      prodChoice: "",
      price: 0,
      qty: 0,
      totalPrice: 0,
      list1: []
    };
  },
  methods: {
    method1(choice1) {
      if (choice1 == "Electronics") {
        this.list1 = this.prodList;
      } else {
        this.list1 = this.grocList;
      }
      (this.qty = 0), (this.totalPrice = 0);
    },
    method2(choice2) {
      switch (choice2) {
        case "Television":
          this.price = 20000;
          break;
        case "Laptop":
          this.price = 30000;
          break;
        case "Phone":
          this.price = 10000;
          break;
        case "Soap":
          this.price = 40;
          break;
        case "Powder":
          this.price = 90;
      }
      (this.qty = 0), (this.totalPrice = 0);
    },
    method3() {
      if (this.qty > 0 && this.prodChoice != null && this.catChoice != null) {
        alert(
          `Category: ${this.catChoice}
                     Product: ${this.prodChoice}
                     Quantity: ${this.qty}
                     Bill: ${this.totalPrice}`
        );
      }
    },
    method4(quat) {
      if (quat < 0) {
        this.qty = 0;
        alert("Quantity in negative");
      } else {
        this.totalPrice = quat * this.price;
      }
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  color: rgb(22, 12, 12);
}
h2 {
  margin: 40px 0 0;
  color: rgb(43, 58, 197);
}
</style>