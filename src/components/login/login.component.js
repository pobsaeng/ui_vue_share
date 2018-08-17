import navbar from '@/components/navbar/index'
import axios from 'axios';

import {
  EventBus
} from '@/util/event-bus.js';

export default {
  name: 'login',
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {

  },
  mounted() {

  },
  created() {},
  methods: {
    getAPI() {
      axios.post(`http://10.100.60.84:8529/MultibankService/api/auth`)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e)
        })

    },
    login() {
      const email = this.$refs.email.value.trim();
      const password = this.$refs.password.value.trim();

      if (email === "test@krungsri.com" && password === "test1234") {
        localStorage.jwtToken = email + password; //This save to local storage
        EventBus.$emit('loggedIn-checked', true);

        this.$router.push('/pos');
      } else {
        this.$router.push('/login');
      }

    }
  }
}
