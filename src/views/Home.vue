<template>
  <div>
    <FilmList :films="films" />
  </div>
</template>

<script>
import FilmService from "@/services/FilmService.js";
import FilmList from "@/components/FilmList.vue";

export default {
  name: "Home",
  data() {
    return {
      films: []
    };
  },
  components: {
    FilmList
  },
  created() {
    FilmService.getFilms().then(response => {
      console.log("Descarga");
      this.films = response.data.results;
    });
  }
};
</script>
