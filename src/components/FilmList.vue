<template>
  <div>
    <ModalFilm :filmShownModal="this.filmShownModal" />
    <ul class="cards">
      <Film
        v-for="film in films"
        :key="film.id"
        :film="film"
        @show-modal="showModal"
      />
    </ul>
  </div>
</template>

<script>
import Film from "@/components/Film.vue";
import ModalFilm from "@/components/ModalFilm.vue";

export default {
  name: "FilmList",
  props: ["films"],
  data: function() {
    return {
      filmShownModal: this.films[1]
    };
  },
  components: { Film, ModalFilm },
  methods: {
    showModal: function(event, film) {
      this.filmShownModal = film;
      this.$store.dispatch("open");
    }
  }
};
</script>

<style lang="scss" scoped></style>
