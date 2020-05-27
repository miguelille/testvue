import Vue from "vue";
import Vuex from "vuex";
import FilmService from "@/services/FilmService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    films: []
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
    }
  },
  modules: {},
  getters: {
    showModal: state => {
      return state.showModal;
    },
    films: state => {
      return state.films;
    }
  }
});
