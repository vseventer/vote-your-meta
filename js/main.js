// Initialize our app.
new Vue({
  el: '#app',
  data: {
    error: { hasError: false, message: null },
    items: [ ]
  },
  computed: {
    sortedItems() {
      return this.items.sort((a, b) => {
        if(b.score !== a.score) return b.score - a.score; // Sort by score (desc).
        return new Date(a.date) - new Date(b.date); // Sort by date (asc).
      });
    }
  },
  created () {
    // Simulate retrieval of data through an API.
    fetch('./api/response.json')
      .then((response) => response.json())
      .then(({ data }) => {
        // NOTE: Vue requires to set each value by key explicitly.
        for(let i = 0; i < data.length; i += 1) {
          this.$set(this.items, i, data[i]);
        }
      })
      .catch((e) => { // Data retrieval failed, error out.
        this.$set(this.error, 'hasError', true);
        this.$set(this.error, 'message', e.message);
      });

    // Hook up the event bus.
    this.$bus.on('vote', this.vote);
  },
  methods: {
    vote(data, delta) {
      this.$set(data, 'score', data.score + delta);
    }
  }
});
