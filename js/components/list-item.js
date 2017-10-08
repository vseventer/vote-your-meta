// Delta values for voting.
const VOTE_UP_DELTA   =  1;
const VOTE_DOWN_DELTA = -1;

// Human date helper.
const MONTH = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

// Component definition.
Vue.component('list-item', {
  computed: {
    humanDate() {
      const d = new Date(this.item.date);
      return `${d.getDate()}-${MONTH[d.getMonth()]}-${d.getFullYear()}`;
    }
  },
  methods: {
    downvote() {
      this.$bus.emit('vote', this.item, VOTE_DOWN_DELTA);
    },
    upvote() {
      this.$bus.emit('vote', this.item, VOTE_UP_DELTA);
    }
  },
  props: [ 'item' ],
  template: `
    <div class="list__item item">
      <div class="item__score">
        <button class="vote vote-up" v-on:click="upvote()">↑</button>
        <strong class="vote vote-score">{{ item.score }}</strong>
        <button class="vote vote-down" v-on:click="downvote()">↓</button>
      </div>
      <div class="item__content">
        <a v-bind:href="item.message" v-if="item.type === 'link'">{{ item.message }}</a>
        <img v-bind:src="item.message" v-if="item.type === 'image'" />
        <iframe v-bind:src="item.message" width="100%"" v-if="item.type === 'video'" />
        <h3 v-if="item.type === 'text'">{{ item.message }}</h3>
        <p class="item__meta">{{ humanDate }} by {{ item.author }}</p>
      </div>
    </div>
  `
});
