import { createStore } from 'vuex'
import superagent from "superagent";
import titleModule from './modules/Title';
import authModule from './modules/Auth';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default createStore({
  modules:{
    Title: titleModule,
    Auth: authModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
});


// state: {
  //   todos: [],
  //   posts: []
  // },
  // mutations: {
  //   SET_TODO: (state, todos) => {
  //     state.todos = todos;
  //   },
  //   SET_POST: (state, todos) => {
  //     state.todos = todos;
  //   }
  // },
  // actions: {
  //   getAllTodos(){
  //     superagent.get(BASE_URL + `/todos/3`).then(response => {this.commit('SET_TODO', response.body)}).catch(console.log);
  //   },
  //   getAllPosts(){
  //     superagent.get(BASE_URL + `/posts`).then(response => {this.commit('SET_POST', response.body)}).catch(console.log);
  //   }
  // }