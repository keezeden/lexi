<template>
  <div>
    <div
      class="hover:bg-purple-500 rounded-lg my-2"
      :key="entry.word"
      v-for="entry in words"
    >
      <ListItem>
        <p class="text-left text-xl">
          {{ entry.name }}
        </p>
      </ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from "../../components/list-item";

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
    words: [
      { name: "Test1", definitions: ["Test definition 1"] },
      { name: "Test2", definitions: ["Test definition 2"] },
      { name: "Test4", definitions: ["Test definition 3"] },
      { name: "Test3", definitions: ["Test definition 4"] }
    ]
  };
}
export default {
  data,
  created,
  components: {
    ListItem
  }
};
</script>
