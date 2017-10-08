// Component definition.
Vue.component('list', {
  props: [ 'items' ],
  template: `
    <ol class="list" v-if="items.length">
      <li is="list-item" v-for="item in items" v-bind:key="item.id" v-bind:item="item"></li>
    </ol>
    <p v-else>Loading...</p>
  `
});
