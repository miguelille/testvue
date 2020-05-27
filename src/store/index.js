import Vue from "vue";
import Vuex from "vuex";
import FilmService from "@/services/FilmService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    films: [],
    modalFilm: {}
  },
  mutations: {
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
    addFilms(state, films) {
      state.films = films;
    },
    changeFilm(state, film) {
      state.modalFilm = film;
    }
  },
  actions: {
    open({ commit }) {
      commit("openModal");
    },
    close({ commit }) {
      commit("closeModal");
    },
    saveFilms({ commit }) {
      FilmService.getFilms().then(response => {
        console.log("Descarga");
        commit("addFilms", response.data.results);
      });
    },
    changeModalFilm({ commit }, film) {
      console.log(film);
      commit("changeFilm", film);
    }
  },
  getters: {
    showModal: state => {
      return state.showModal;
    },
    films: state => {
      return state.films;
    },
    modalFilm: state => {
      return state.modalFilm.film;
    }
  }
});
