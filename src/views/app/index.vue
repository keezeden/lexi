<template>
  <div class="flex h-screen">
    <div class="flex flex-col w-1/5 h-full bg-purple-600 p-12">
      <div id="logo-spacer" class="h-24"></div>
      <div class="my-4">
        <WordSearch />
      </div>
      <div>
        <WordHistory />
      </div>
    </div>
    <div class="w-4/5 h-full">
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
