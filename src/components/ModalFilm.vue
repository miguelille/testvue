<template>
  <div v-show="showModal" id="myModal" class="modal">
    <div class="modal-content">
      <div
        class="card__image"
        :style="{
          'background-image':
            'url(https://image.tmdb.org/t/p/w500' + film.poster_path + ')'
        }"
      ></div>
      <div class="card__content">
        <div class="card__title">{{ film.original_title }}</div>
        <p class="card__text">
          {{ film.overview }}
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
  computed: {
    showModal() {
      return this.$store.getters.showModal;
    },
    film() {
      console.log(this.$store.getters.modalFilm);
      return this.$store.getters.modalFilm;
    }
  },
  methods: {
    closeWindow() {
      this.$store.dispatch("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 40%; /* Full width */
  height: 40%; /* Full height */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.card__image {
  width: 100;
}
</style>
