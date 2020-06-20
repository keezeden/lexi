<template>
  <div class="flex p-12 h-screen">
    <div class="overflow-y-auto w-1/3 p-2 px-6 m-2">
      <p class="text-4xl text-gray-500 text-center font-medium">History</p>
      <div class="bg-white even:bg-gray-100" :key="entry.word" v-for="entry in words">
        <div class="p-2 px-4">
          <p class="text-xl font-medium text-gray-800 capitalize">{{entry.word}}</p>
          <p class="text-xl text-gray-600 truncate">{{entry.descriptions[0]}}</p>
        </div>
      </div>
    </div>

    <div class="border-l-4 border-gray-300 w-2/3 p-2 px-12 m-2">
      <div class="flex justify-center">
        <input
          class="outline-none text-4xl text-center font-medium"
          @change="setSearch"
          @keyup.enter="getWordDefinition"
          placeholder="Search"
          type="text"
        />
      </div>
      <div v-if="filteredInfo.word !== ''">
        <span class="text-4xl font-medium text-gray-800 capitalize">
          {{filteredInfo.word}} &bull;
          <p class="inline text-gray-600 lowercase">{{filteredInfo.type}}</p>
        </span>
        <ul :key="desc" v-for="(desc, index) in filteredInfo.descriptions">
          <li class="m-1 my-2">
            <p class="text-gray-600 text-xl">{{index+1}}: {{desc}}</p>
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
      console.log("Info:", this.info);
      console.log("words", this.words);
      const word = this.info?.meta?.id || "";
      return {
        word: word.includes(":") ? word.substring(0, word.indexOf(":")) : word,
        type: this.info?.fl,
        descriptions: this.info?.shortdef?.slice(0, 3)
      };
    }
  },
  methods: {
    addWordToHistory: function(word) {
      this.words = [word, ...this.words];
      localStorage.setItem("words", JSON.stringify(this.words));
    },
    getWordDefinition: function() {
      const setError = error => {
        console.log(`A search error has occurred: ${error}`);
      };
      const setWord = result => {
        const topResult = result.length ? result[0] : result;
        console.log("Top result", topResult);
        if (typeof topResult === "string")
          return console.log("Did you mean:", topResult);
        this.info = topResult;
        this.addWordToHistory(this.filteredInfo);
      };
      getDefinition(this.search)
        .then(setWord)
        .catch(setError);
    },
    setSearch: function(e) {
      this.search = e.target.value;
    }
  },
  data: function() {
    return {
      words: JSON.parse(localStorage.getItem("words")) || [],
      info: [],
      search: ""
    };
  }
};
</script>