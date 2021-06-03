<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <h1>{{title}}</h1>

    <button @click="setTitle">set new title</button>

    <button @click="updateTitle">Update title from API</button>
  </div>
</template>

<script lang="ts">
import { useStore, createNamespacedHelpers } from 'vuex';
import { computed, defineComponent, onMounted } from 'vue';

const { mapState, mapActions } = createNamespacedHelpers('Title')
// import store from "../store/index"

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(){
    const store = useStore();
    const title = computed(()=> store.state.Title.title);
    const setTitle = () => {
      store.dispatch('Title/setTitle',"New app title");
    }
    const updateTitle = () => {
      store.dispatch("Title/updateTitle")
    }

    onMounted(()=> updateTitle())
    
    return {
      title,
      setTitle,
      updateTitle
    }
  }, 
  methods: {
    // ...mapActions({ setTitle: 'setTitle',
    //  login: 'Auth/login'})
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
