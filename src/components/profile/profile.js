import axios from "axios";

export default {
  name: "profile",
  components: {},
  props: [],
  data() {
    return {
      listBook: [],
      book: {
        id: null,
        title: "",
        authors: "",
        price: 0,
        stock: 0
      }
    };
  },
  computed: {},
  mounted() {
    this.loadBooks();
  },
  methods: {
    onSave() {
      const params = this.book;
      axios({
        method: "post",
        url: "http://localhost:8181/save",
        data: params
      })
        .then(function(response) {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    loadBooks() {
      axios
        .get("http://localhost:8181/findAllBook")
        .then(response => {
          console.log(response.data);
          this.listBook = response.data
        })
        .catch(error => {
          console.log(error.response.data);
        });
    },
    onBind(book){
      // this.book = book;
      this.book = Object.assign({}, book);
    }
  }
};
