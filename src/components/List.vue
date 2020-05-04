<template>
  <div>
    <h5>{{ film.original_title }}</h5>
  </div>
</template>

<script>
export default {
  name: "Film",
  props: ["film"]
};
</script>

<style lang="scss" scoped></style>
