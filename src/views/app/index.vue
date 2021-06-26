<template>
  <div class="flex h-screen">
    <div class="overflow-y-auto bg-gray-200 w-1/3 p-8 px-8">
      <WordHistory />
    </div>
    <div>
      <WordSearch />
    </div>
    <div>
      <WordInformation />
    </div>
  </div>
</template>

<script>
import WordHistory from "../../components/word-history";
import WordSearch from "../../components/word-search";
import WordInformation from "../../components/word-information";

export default {
  components: {
    WordHistory,
    WordSearch,
    WordInformation
  }
};
</script>
