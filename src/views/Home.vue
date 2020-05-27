<template>
  <div>
    <FilmList :films="films" />
  </div>
</template>

<script>
import FilmList from "@/components/FilmList.vue";

export default {
  name: "Home",
  computed: {
    films() {
      return this.$store.getters.films;
    }
  },
  components: {
    FilmList
  },
  created() {
    this.$store.dispatch("saveFilms");
  }
};
</script>
