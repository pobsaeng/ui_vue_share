import axios from "axios";

export default {
  name: 'products',
  components: {},
  props: [],
  data () {
    return {
      listCategory: [],
      listBook: [],
      bookRequest: {
        id: null,
        title: "",
        description: "",
        price: "",
        year: "",
        author: "",
        isbn: "",
        category_id: ""
      },
      vSelected: "SelectedOK"
    }
  },
  computed: {

  },
  mounted () {
    this.loadCategory();
    this.loadBooks();
  },
  methods: {
    onSave(){
      const me = this;

      axios({
        method: "post",
        baseURL: me.PRODUCT_API.server + this.PRODUCT_API.create,
        data: me.bookRequest
      })
        .then(function(response) {
          console.log(response.data);
          me.listBook.push(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    onEdit(book){
      console.log(book);
    },
    onDelete(book){
      console.log(book);
    },
    onCancel(){
      this.bookRequest = {
        id: null,
        title: "",
        description: "",
        price: "",
        year: "",
        author: "",
        isbn: "",
        category_id: ""
      }
    },
    onSelected(){
      this.bookRequest.category_id = this.vSelected
    },
    loadCategory() {
      axios
        .get(this.CATEGORY_API.server + this.CATEGORY_API.findallcategory)
        .then(response => {
          this.listCategory = response.data
        })
        .catch(error => {
          console.log(error.response.data);
        });
    },
    loadBooks() {
      axios
        .get(this.PRODUCT_API.server + this.PRODUCT_API.findallbook)
        .then(response => {
          this.listBook = response.data
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
}
