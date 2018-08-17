import axios from "axios";

export default {
  name: 'bookstore',
  components: {},
  props: [],
  data () {
    return {
      listBookStore: []
    }
  },
  computed: {

  },
  mounted () {
    this.loadAllBook();
  },
  methods: {
    loadAllBook(){
      axios.get(this.PRODUCT_API.server + this.PRODUCT_API.findallbook)
        .then(response => {
          this.listBookStore = response.data
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
}
