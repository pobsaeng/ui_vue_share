import Vue from 'vue';
export const EventBus = new Vue({
  created () {
    this.$on('my-event', this.handleMyEvent)
  },
  methods: {
    handleMyEvent ($event) {
      console.log('My event caught in global event bus', $event)
    }
  }
})