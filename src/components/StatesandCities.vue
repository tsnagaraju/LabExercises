<template>
  <div>
    <div>
      <label>Enter Name:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Enter Age:</label>
      <input type="number" v-model="age" />
    </div>
    <div>
      <label>Select State:</label>
      <select v-model="stateChoice">
        <option v-for="(s,i) in stateList" :key="i" @click="method1(s)" @change="method1(s)">{{ s }}</option>
      </select>
    </div>
    <div>
      <label>Select City:</label>
      <select v-model="cityChoice">
        <option v-for="(c,i) in list1" :key="i" @click="method2(c)" @change="method2(c)">{{ c }}</option>
      </select>
    </div>
    <br />
    <button @click="onSubmit()">Submit</button>
    <button onclick="history.go(0);">Clear</button>
    <br />
    <br />
    <!-- <span>{{ name + " "+age+" "+stateChoice+" "+cityChoice}}</span> -->
  </div>
</template>

<script>
export default {
  name: "StatesandCities",
  data() {
    return {
      name: "",
      age: 0,
      stateList: ["Karnataka", "Andhra Pradesh", "Telangana", "Tamil Nadu"],
      cityList1: ["Bengaluru", "Mysore", "Mangalore"],
      cityList2: ["Vijayawada", "Guntur", "Vizag"],
      cityList3: ["Hyderabad", "Warrangal"],
      cityList4: ["Chennai", "Coimbatore"],
      stateChoice: "",
      cityChoice: "",
      list1: []
    };
  },
  methods: {
    method1(s) {
      this.stateChoice = s;
      switch (s) {
        case "Karnataka":
          this.list1 = this.cityList1;
          break;
        case "Andhra Pradesh":
          this.list1 = this.cityList2;
          break;
        case "Tamil Nadu":
          this.list1 = this.cityList4;
          break;
        case "Telangana":
          this.list1 = this.cityList3;
      }
    },
    method2(c) {
      this.cityChoice = c;
    },
    onSubmit() {
      alert(`
        Name: ${this.name}
        Age: ${this.age}
        Name: ${this.stateChoice}
        Name: ${this.cityChoice}`);
      (this.name = ""),
        (this.age = 0),
        (this.stateChoice = ""),
        (this.cityChoice = "");
    }
  },
  watch: {
    age() {
      if (this.age < 0) {
        alert("Age cannot be in negative");
        this.age = 0;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
