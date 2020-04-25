<template>
  <div>
    <h1>Product Details</h1>
    <form @submit="onSubmit">
      <table align="right">
        <tr>
          <td>Category:</td>
          <td>
            <select @change="changeCategory">
              <option>Electronics</option>
              <option>Grocery</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Product:</td>
          <td>
            <select @change="changeSelected">
              <option v-for="(p, index) in products" :key="index">{{p.product}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Quantity:</td>
          <input
            type="number"
            min="0"
            v-model="quantity"
            @change="changePrice"
            @keyup="changePrice"
          />
        </tr>
        <tr>
          <td>Total Price:</td>
          <td>
            <input type="text" disabled v-model="total" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="submit" />
          </td>
          <td>
            <input type="reset" @click="reset" />
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: "Store",
  data: function() {
    return {
      total: 0,
      quantity: 0,
      selectedProduct: {
        product: "Television",
        price: 20000
      },
      electronicProducts: [
        {
          product: "Television",
          price: 20000
        },
        {
          product: "Laptop",
          price: 50000
        },
        {
          product: "Phone",
          price: 1000
        }
      ],
      groceryProducts: [
        {
          product: "Soap",
          price: 40
        },
        {
          product: "Powder",
          price: 50
        }
      ],
      products: [
        {
          product: "Television",
          price: 20000
        },
        {
          product: "Laptop",
          price: 50000
        },
        {
          product: "Phone",
          price: 1000
        }
      ]
    };
  },
  props: {},
  methods: {
    onSubmit: function() {
      event.preventDefault();
      alert(
        `Name: ${this.selectedProduct.product}
        \nQuantity: ${this.quantity}
        \nPrice: ${this.selectedProduct.price}
        \nTotal: ${this.total}`
      );
    },
    changeCategory: function() {
      event.preventDefault();
      this.total = 0;
      this.quantity = 0;
      if (event.target.value === "Grocery") {
        this.products = this.groceryProducts;
      } else {
        this.products = this.electronicProducts;
      }
    },
    changeSelected: function() {
      this.total = 0;
      this.quantity = 0;
      this.selectedProduct = this.products.find(
        item => item.product === event.target.value
      );
    },
    changePrice: function() {
      this.total = this.selectedProduct.price * this.quantity;
    },
    reset: function() {
      this.quantity = 0;
      this.total = 0;
      this.products = this.electronicProducts;
      this.selectedProduct = {
        product: "Television",
        price: 20000
      };
    }
  }
};
</script>

<style scoped>
select {
  float: left;
}
td {
  text-align: left;
}
</style>
