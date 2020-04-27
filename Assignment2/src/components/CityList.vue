<template>
  <div>
    <h3>City List</h3>
    <br />

    <label>State:</label>
    <select v-model="selState">
      <option v-for="(s,i) in states" :key="i" :value="s">{{s}}</option>
    </select>
    <br />
    <label>City:</label>
    <select v-model="selCity">
      <option v-for="(c,i) in filterCities()" :key="i" :value="c.city">{{c.city}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      states: ["Tamil Nadu", "Kerala", "Telangana", "Maharashtra", "Karnataka"],
      cities: [
        { state: "Tamil Nadu", city: "Chennai" },
        { state: "Tamil Nadu", city: "Trichy" },
        { state: "Tamil Nadu", city: "Coimbatore" },
        { state: "Kerala", city: "Trivandrum" },
        { state: "Kerala", city: "Kochi" },
        { state: "Kerala", city: "Palakkad" },
        { state: "Karnataka", city: "Bangalore" },
        { state: "Karnataka", city: "Mysuru" },
        { state: "Maharashtra", city: "Pune" },
        { state: "Maharashtra", city: "Mumbai" },
        { state: "Telangana", city: "Hyderabad" },
        { state: "Telangana", city: "Nizamabad" }
      ],
      selState: "",
      selCity: ""
    };
  },
  methods: {
    filterCities() {
      const newCities = this.cities.filter(
        element => element.state == this.selState
      );

      return newCities;
    }
  }
};
</script>

<style scoped>
</style>