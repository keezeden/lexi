<template>
  <div>
    <p class="text-4xl text-gray-800 text-center font-medium">History</p>
    <div :key="entry.word" v-for="entry in words">
      <div class="p-2 px-4 my-2">
        <p class="text-xl font-medium text-gray-800 capitalize">
          {{ entry.name }}
        </p>
        <p class="text-xl text-gray-600 truncate">
          {{ entry.definitions }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
function created() {
  this.$store.subscribe(event => {
    const [word] = event.payload;
    this.words = [word, ...this.words];
  });
}

function data() {
  const cachedWords = localStorage.getItem("words") || null;

  const words = cachedWords ? JSON.parse(cachedWords) : [];

  return {
    words
  };
}
export default {
  data,
  created
};
</script>
