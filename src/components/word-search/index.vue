<template>
  <div>
    <ListItem class="flex flex-row items-center bg-purple-500">
      <div>
        <SearchIcon class="h-5 w-5 text-white" />
      </div>
      <div class="ml-8">
        <input
          class="focus:outline-none text-white placeholder-white bg-purple-500 w-48"
          :disabled="searching"
          @change="setWord"
          @keyup.enter="search"
          placeholder="Search"
          type="text"
        />
      </div>
    </list-item>
  </div>
</template>

<script>
import SearchIcon from "../../components/search-icon";
import ListItem from "../../components/list-item";
import { getDefinition } from "../../services/dictionary";

function data() {
  return {
    word: "",
    searching: false
  };
}

function setWord(e) {
  this.word = e.target.value;
}

async function search() {
  this.searching = true;
  const result = await getDefinition(this.word);
  this.$store.commit("setWord", result);
  this.searching = false;
}

export default {
  data,
  components: {
    SearchIcon,
    ListItem
  },
  methods: {
    setWord,
    search
  }
};
</script>
