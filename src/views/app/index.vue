<template>
  <div>
    <div>
      <h1>Current Words:</h1>
      <ul :key="word" v-for="word in words">
        <li>{{word}}</li>
      </ul>
    </div>
    <div>
      <input @change="setSearch" type="text" />
      <button @click="getWordDefinition">search</button>
      <div>
        <h2>{{search}}</h2>
        <h3>{{info.type}}</h3>
        <ul :key="desc" v-for="desc in filteredInfo.descriptions">
          <li>
            <h2>{{desc}}</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getDefinition } from "../../services/dictionary";

export default {
  computed: {
    filteredInfo: function() {
      console.log("info", this.info);
      return {
        type: this.info.fl,
        descriptions: this.info?.shortdef?.slice(0, 3)
      };
    }
  },
  methods: {
    addWordToHistory: function(word) {
      const wordAdded = [word, ...this.words];
      this.words = wordAdded;
      localStorage.setItem("words", JSON.stringify(wordAdded));
    },
    getWordDefinition: function() {
      const setWord = result => {
        const [topResult] = result;
        this.info = topResult;
      };

      getDefinition(this.search).then(setWord);
    },
    setSearch: function(e) {
      console.log("Search: ", e.target.value);
      this.search = e.target.value;
    }
  },
  data: function() {
    return {
      words: JSON.parse(localStorage.getItem("words")) || [],
      info: [],
      search: "Search for words"
    };
  }
};
</script>