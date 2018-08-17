const searchMix = {
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
  
  export const searchmix = searchMix;
  