<template>
  <div class="flex justify-center">
    <input
      class="outline-none text-4xl text-center font-medium"
      @change="setWord"
      @keyup.enter="search"
      placeholder="Search"
      type="text"
    />
  </div>
</template>

<script>
import { getDefinition } from "../../services/dictionary";

function data() {
  return {
    word: ""
  };
}

function setWord(e) {
  this.word = e.target.value;
}

async function search() {
  const result = await getDefinition(this.word);

  this.$store.commit("setWord", result);
}

export default {
  data,
  methods: {
    setWord,
    search
  }
};
</script>
