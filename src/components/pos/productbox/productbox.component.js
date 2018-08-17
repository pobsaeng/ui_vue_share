export default {
  name: 'productbox',
  components: {},
  props: ['propsbox', 'show'],
  created() {
    var me = this;
    this.$watch('propsbox', (values) => {
      this.listOfBox = values;
    })
  },
  // watch: {
  //   propsbox(val, oldVal) {
  //     console.log(val);
  //     console.log(oldVal);
  //   }
  // },
  data() {
    return {
      product_tp: {},
      listOfProduct: require('@/assets/json/product.json'),
      selectedMode: false
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    onToggleChange(event) {
      if (this.selectedMode) {

      } else {

      }
    },
    searchProducts() {

    },
    save(product) {
      // this.listOfBox = { productid: '10020113', productname: 'CD', price: 500, amount: 2, total: 550 }
      this.product_tp = Object.assign({}, product);

      this.product_tp.amount = '1';
      this.product_tp.total = parseInt(this.product_tp.amount) * parseInt(this.product_tp.price);

      this.$emit('increment', this.product_tp);

      if (!this.selectedMode) {
        this.close();
      } else {
        this.$emit('autoincrement', this.product_tp);
      }

    },

    close() {
      this.$emit('close');
    }
  }
}
