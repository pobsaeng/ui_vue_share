const person_model = {
  data() {
    return {
      person: []
    };
  },
  mounted() {
    this.person = [
      {
        personId: "1020101",
        Name: "John",
        Age: "40",
        address: "USA"
      }
    ]
  }
};

export const personModal = person_model;
