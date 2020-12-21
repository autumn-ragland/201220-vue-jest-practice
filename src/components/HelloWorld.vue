<template>
  <div class="hello">
    <div>
      Counter : {{counter}}
      <button @click="counter++">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    counter: 0,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
button {
  background-color: #42b983;
  color: #2c3e50;
  padding: 1% 3%;
  border-radius: 5px;
}
</style>
