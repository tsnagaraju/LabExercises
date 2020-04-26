<template>
    <div class="container mt-5">
    <form @submit.prevent="onSubmit()">
    <h3 class="text-center">Product Details</h3>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label for="category">Category</label>
                <select id="category" class="form-control" @change="onCategoryChange" v-model="productDetail.category">
                     <option v-for="(product, i) in products" :key="i" :value="product.value">{{product.name}}</option>
                </select>
            </div>
            <div class="form-group">
               <label for="product">Product</label>
               
                <select id="product" class="form-control" @change="onProductChange" v-model="productDetail.product">
                    <option v-for="(item,i) in productsArray" :key="i" :value="item.price" >{{item.productName}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="quantity">Quantity</label>
                <input id="quantity" :disabled="!(productDetail.product && productDetail.category)" placeholder="Enter Quantity" min="0" class="form-control" type="number" v-model="productDetail.quantity">
            </div>
            <div class="form-group">
                <label for="finalPrice">Final Price</label>
                <input disabled id="finalPrice" class="form-control" type="text" v-model="productDetail.finalPrice">
            </div>
            
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 text-center">
            <button class="btn btn-primary mr-3" :disabled="!(productDetail.product && productDetail.category && productDetail.quantity)" type="submit">Submit</button>
            <button class="btn btn-primary" @click="onClearClicked">Clear</button>
        </div>
    </div>
    </form>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Products } from './enums/products.enum';
export default Vue.extend({
  name: "productDetails",
  data() {
    return {
      productsArray: [] as {productName : string,price : number}[],
      priceOfItem: 0 as number,
      products : [
          {name : 'Electronics',value : 'electronics'},
          {name : 'Grocery',value : 'grocery'}],
      productDetail: {
        category: "",
        product: 0,
        quantity: 0,
        finalPrice: 0
      },
      productObj: {
        electronics: [
          { productName: "Television", price: 20000 },
          { productName: "Laptop", price: 30000 },
          { productName: "Phone", price: 10000 }
        ],
        grocery: [
          { productName: "Soap", price: 40 },
          { productName: "Powder", price: 90 }
        ]
      }
    };
  },
  methods: {
    onCategoryChange() {
      const cat = this.productDetail.category.toString();
        if (cat == Products.Electronics) {
            this.productsArray = this.productObj[cat];
        }else {
            this.productsArray = this.productObj.grocery;
        }
         this.productDetail.quantity = 0;
         this.productDetail.finalPrice = 0;
    },
    onSubmit() {
      this.productDetail.finalPrice =
        +this.productDetail.quantity * this.priceOfItem;
    },

    onProductChange() {
      this.priceOfItem = +this.productDetail.product;
      this.productDetail.quantity = 0;
      this.productDetail.finalPrice = 0;
    },
    onClearClicked() {
      this.productDetail = {
        category: "",
        product: 0,
        quantity: 0,
        finalPrice: 0
      };
    }
  }
});
</script>

<style scoped>
</style>
