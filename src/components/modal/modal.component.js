import { EventBus } from '@/util/event-bus.js';

export default {
  template: 'modal',
  props: ['show'],
  created() {
    EventBus.$on("modal-data-bind", (values) => {
      this.title = values.title;
      this.body = values.body;
    });
  },
  methods: {
    close: function () {
      console.log('close!');
      this.$emit('close');
      this.title = '';
      this.body = '';
    },
    savePost: function () {
      console.log('savePost!');
      // this.$toast.success({
      //   title: 'Message',
      //   message: this.title + ',' + this.body
      // })
      const values = {title: this.title, body: this.body};
      EventBus.$emit('modal-values', values);

      this.close();
    }
  },
  data() {
    return {
      title: '',
      body: ''
    }
  },
  computed: {

  },
  mounted() {

  }
}
