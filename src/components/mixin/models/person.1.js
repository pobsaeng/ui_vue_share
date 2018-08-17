const person_model = {
  data() {
    return {
      person: []
    };
  },
  methods: {
    onClick(e) {
      console.log(JSON.stringify(this.user));
    }
  },
  watch: {
    fullName: function(val) {
      console.log("watch fullName: " + val);
    },
    email: function(val) {
      console.log("watch email: " + val);
    },
    address: function(val) {
      console.log("watch address: " + val);
    }
  }
};

export const personModal = person_model
