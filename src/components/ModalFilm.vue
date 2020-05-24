<template>
  <div v-show="showModal" class="ventanaModal">
    <div>
      <div
        class="card__image"
        :style="{
          'background-image':
            'url(https://image.tmdb.org/t/p/w500' +
            filmShownModal.poster_path +
            ')'
        }"
      ></div>
      <div class="card__content">
        <div class="card__title">{{ filmShownModal.original_title }}</div>
        <p class="card__text">
          {{ filmShownModal.overview }}
        </p>
        <div class="buttons">
          <button class="btn btn--block card__btn" @click="closeWindow">
            Cerrar
          </button>
          <button class="btn btn--block card__btn">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalFilm",
  props: ["filmShownModal"],
  data: function() {
    return {
      showModal: true
    };
  },
  methods: {
    closeWindow() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.ventanaModal {
  position: static;
  width: 300px;
  padding: 10px 20px;
  margin: 20% auto;
}
</style>
