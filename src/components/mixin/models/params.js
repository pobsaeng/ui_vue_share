const params_mix = {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    onSave(e) {
      console.log("'" + this.search + "' were saved!");
    }
  },
  watch: {
    search: function(val) {
      console.log("wait.." + val);
    }
  }
};

export const params = params_mix;
