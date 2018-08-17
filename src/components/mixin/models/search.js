const search_mix = {
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
  
  export const search = search_mix;
  