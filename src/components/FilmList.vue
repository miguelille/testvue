<template>
  <div>
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

export default {
  name: "FilmList",
  props: ["films"],
  components: { Film },
  methods: {
    showModal: function(event, film) {
      this.filmShownModal = film;
      this.$store.dispatch("open");
    }
  }
};
</script>

<style lang="scss" scoped></style>
