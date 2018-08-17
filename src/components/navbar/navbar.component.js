import Vue from "vue";
import { EventBus } from "@/util/event-bus.js";
import nav from "@/assets/store/client/nav-b.json";

import { searchmix } from "../../models/search";

export default {
  name: "navbar",
  components: {},
  mixins: [ searchmix ],
  props: [],
  data() {
    return {
      items: nav,
      selected: "",
      loggedIn: null
    };
  },
  computed: {},
  mounted() {
    this.selected = 0;
    // Vue.prototype.$loggedIn = false;
    console.log("This mounted is active!");
    const isLogin = localStorage.jwtToken ? true : false;
    EventBus.$emit("loggedIn-checked", isLogin);
  },
  created() {
    EventBus.$on("loggedIn-checked", status => {
      this.loggedIn = status;
      console.log("EventBus loggedIn-checked is invoked!");
    });
  },
  methods: {
    onSelected(value) {
      // this.$toast.success({
      //   title: 'Message',
      //   message: value
      // })
      this.$router.push(value);
    },
    logout() {
      window.localStorage.removeItem("jwtToken");
      this.$router.push("/login");
      this.loggedIn = false;
    },
    onSearch() {
      if (this.search.length >= 2) {
        this.onSave();
      }
    }
  }
};
