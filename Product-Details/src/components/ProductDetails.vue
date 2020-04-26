<template>
    <div>
        <h2>Product Details</h2>
        <form @submit="calculatePrice">
            <label for="selectedCategory">Category : </label>
            <select v-model="selectedCategory" required @change="selectProduct">
                <option value="" disabled>Choose one</option>
                <option value="Electronics">Electronics</option>
                <option value="Grocery">Grocery</option>
            </select>
            <br><br>
            <label for="selectedProduct">Product : </label>
            <select v-model="selectedProduct" required>
                <option :value={} disabled>-----</option>
                <option v-for="(p, i) in ddlProductList" :key="i" :value="p">{{p.name}}</option>
            </select>
            <br><br>
            <label for="quantity">Quantity : </label>
            <input type="text" v-model="quantity" required>
            <br><br>
            <label for="totalPrice">Total Price : </label>
            <input type="text" v-model="totalPrice" readonly required>
            <br><br>
            <button type="submit">Submit</button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button type="reset">Clear</button>
        </form>
    </div>
</template>

<script>
export default {

    name : "product-details",

    data() {
        return ({
            productList : {
                Electronics : [{
                    name : 'Television',
                    price : 20000
                    }, {
                        name : 'Laptop',
                        price : 30000
                    }, {
                        name : 'Phone',
                        price : 10000
                    }
                ],
                Grocery : [{
                    name : 'Soap',
                    price : 40
                    }, {
                        name : 'Powder',
                        price : 90
                    }
                ]
            },
            selectedCategory : '',
            ddlProductList : [],
            selectedProduct : {},
            totalPrice : '',
            quantity : ''
        })
    },

    methods : {
        calculatePrice() {
            this.totalPrice = '' + (this.selectedProduct.price * parseInt(this.quantity));

            let newWindow =  window.open('', 'form-popup', 'width=400,height=400,resizeable,scrollbars');
            newWindow.document.write(`
                <table>
                    <tr>
                        <th>Category :</th>
                        <td>${this.selectedCategory}</td>
                    </tr>
                    <tr>
                        <th>Product :</th>
                        <td>${this.selectedProduct.name}</td>
                    </tr>
                    <tr>
                        <th>Quantity :</th>
                        <td>${this.quantity}</td>
                    </tr>
                    <tr>
                        <th>Total Price :</th>
                        <td>${this.totalPrice}</td>
                    </tr>
                </table>
                `);
        },
        selectProduct() {
            if (this.selectedCategory === 'Electronics')
                this.ddlProductList = this.productList.Electronics;
            else if (this.selectedCategory === 'Grocery')
                this.ddlProductList = this.productList.Grocery;
        }
    }
    
}
</script>

<style scoped>
    
</style>