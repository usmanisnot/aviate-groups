import superagent from "superagent";

import router from "@/router"; //shortcut to src
import { Module } from "vuex";

interface IState{
  title: string
}

const titleModule: Module<IState, any> = {
  namespaced: true,

  state: () => ({
    title: "default app title"
  }),

  getters: {
    getTitle(state: IState) {
      return state.title || "";
    }
  },

  mutations: {
    SET_TITLE: (state: IState, title: string) => {
      state.title = title;
    }
  },

  actions: {
    setTitle: ({ dispatch, commit, getters, rootGetters }, payload) => {
      console.log("set Title action", payload)
      commit("SET_TITLE", payload);
    },
    updateTitle: ({ dispatch, commit, getters, rootGetters }) => {
      console.log("updating Title from api")

      superagent.get("https://jsonplaceholder.typicode.com/posts/" + Math.floor(Math.random() * (100 - 0 + 1) + 0))
      .then((response: superagent.Response) => {commit("SET_TITLE", response.body.title)})
      .catch(console.log)
    }
  }
};

export default titleModule;