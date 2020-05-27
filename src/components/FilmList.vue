<template>
  <div>
    <ul class="cards">
      <Film v-for="film in films" :key="film.id" :film="film" />
    </ul>
  </div>
</template>

<script>
import Film from "@/components/Film.vue";

export default {
  name: "FilmList",
  props: ["films"],
  components: { Film }
};
</script>

<style lang="scss" scoped></style>
