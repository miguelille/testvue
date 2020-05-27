<template>
  <div>
    <ModalFilm />
    <FilmList :films="films" />
  </div>
</template>

<script>
import FilmList from "@/components/FilmList.vue";
import ModalFilm from "@/components/ModalFilm.vue";

export default {
  name: "Home",
  computed: {
    films() {
      return this.$store.getters.films;
    }
  },
  components: { FilmList, ModalFilm },
  created() {
    this.$store.dispatch("saveFilms");
  }
};
</script>
