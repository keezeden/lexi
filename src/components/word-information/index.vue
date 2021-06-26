<template>
  <div class="">
    <div v-for="word in definitions">
      <p>
        {{ word.name }}
      </p>
      <div>
      <div v-for="definition in word.definitions">
      <p>{{definition}}</p>
      </div>
    </div>
  </div>
</template>

<script>
function created() {
  this.$store.subscribe(event => {
    const words = event.payload.slice(0, 3); // only show first 3 words
    this.definitions = words;
  });
}

function data() {
  return {
    definitions: null
  };
}
export default {
  data,
  created
};
</script>
