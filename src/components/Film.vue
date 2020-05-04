<template>
  <li class="cards__item">
    <div class="card">
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
          <button class="btn btn--block card__btn">+info</button>
          <button class="btn btn--block card__btn">Comprar</button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Film",
  props: ["film"]
};
</script>

<style lang="scss" scoped></style>
