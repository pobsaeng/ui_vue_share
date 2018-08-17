import productbox from './productbox/index'
import POS_JSON from '../../assets/json/pos.json'

export default {
  name: 'pos',
  components: { productbox },
  props: ['increment', 'autoincrement'],
  created() {
  },
  data() {
    return {
      POSProps: POS_JSON.posprops,
      defaultProps: POS_JSON.posprops,
      productList: [],
      chkProductList: [],
      balanceItem: [],
      showModalBox: false,
      isDeleteDisabled: true,
      productForSearch: '',
      listOfProduct: require('@/assets/json/product.json')
    }
  },
  computed: {},
  mounted() { },
  watch: {},
  methods: {
    onProductBox() {
      this.showModalBox = true;
    },
    onReset() {
      this.$refs._price.value = "0";
      this.$refs._total.value = "0";
      this.$refs._amount.value = "1";
      this.POSProps.product_id = "";
    },
    onClear() {
      this.POSProps = Object.assign({}, this.defaultProps);

      this.forceChecked(5, false);
      this.isDeleteDisabled = true;
      this.clearArrayList(this.chkProductList);
    },
    checkUniqueID(value) {
      var item = this.chkProductList;
      for (var _obj of item) {
        if (_obj.product_id === value) {
          return true;
        }
      }
      return false;
    },
    onBeginPOS() {
      if (this.productList.length > 0) {
        var message = "เริ่มการขายใหม่ รายการจะถูกล้างทั้งหมดใช่หรือไม่?";
        var options = {
          html: false,
          loader: false,
          reverse: false,
          okText: 'ใช่',
          cancelText: 'ไม่ใช่',
          animation: 'zoom',
          type: 'basic',
          verification: 'continue',
          verificationHelp: 'Type "[+:verification]" below to confirm',
          clicksCount: 3,
          backdropClose: false
        };
        var me = this;
        this.$dialog.confirm(message, options)
          .then(function () {
            me.clearArrayList(me.productList);
          })
          .catch(function () { });
      }
    },
    onPOSSucceed() {
      console.log(this.chkProductList.length);

    },
    onDelete() {
      var checkedList = this.chkProductList;
      var prodList = this.productList;

      var message = "ลบรายการที่เลือกใช่หรือไม่?";
      var options = {
        html: false,
        loader: false,
        reverse: false,
        okText: 'ใช่',
        cancelText: 'ไม่ใช่',
        animation: 'zoom',
        type: 'basic',
        verification: 'continue',
        verificationHelp: 'Type "[+:verification]" below to confirm',
        clicksCount: 3,
        backdropClose: false
      };
      var me = this;
      me.$dialog.confirm(message, options)
        .then(function () {
          //delete action
          for (var i = 0; i < checkedList.length; i++) {

            for (var j = 0; j < prodList.length; j++) {

              if (prodList[j].product_id == checkedList[i].product_id) {
                me.removeItems(prodList, j);
              }
            }
          }
          me.clearArrayList(checkedList);
          me.forceChecked(5, false);

        })
        .catch(function () { });

    },
    clearArrayList(list) {
      while (list.length > 0) {
        list.pop();
      }
    },
    removeItems(list, i) {
      list.splice(i, 1);
    },
    forceChecked(index, bool) {
      var rows = this.$refs.tableRef.rows;
      for (var j = 1; j < rows.length; j++) {
        var tgCheckbox = rows[j].cells.item(index).getElementsByTagName("*");
        for (var i = 0; i < tgCheckbox.length; i++) {
          tgCheckbox[i].checked = bool;
        }
      }
    },
    onTdChecked(checktg, product_id) {
      if (checktg.checked) {
        if (!this.checkUniqueID(product_id)) {
          this.chkProductList.push({ product_id: product_id });
        }
        this.isDeleteDisabled = false;
      } else {
        this.removeOnCheckList(product_id);
        this.deleteDisabled();
      }
    },
    deleteDisabled() {
      if (this.chkProductList.length > 0) {
        this.isDeleteDisabled = false;
      } else {
        this.isDeleteDisabled = true;
      }
    },
    removeOnCheckList(product_id) {
      var prodList = this.chkProductList;

      for (var i = 0; i < prodList.length; i++) {
        if (prodList[i].product_id == product_id) {
          prodList.splice(i, 1);
        }
      }
    },
    checkLikeItem(value) {
      var items = this.productList;
      for (var i = 0; i < items.length; i++) {
        if (items[i].product_id === value) {
          return i;
        }
      }
      return -1;
    },
    calLikeItem(index, product) {
      var newAmount = parseInt(this.productList[index].amount) + parseInt(product.amount);
      var newTotal = parseInt(this.productList[index].price) * newAmount;
      this.productList[index].amount = newAmount;
      this.productList[index].total = newTotal;
    },
    onAddProduct() {
      if (this.POSProps.product_id != "" &&
        this.POSProps.product_name != "" &&
        this.POSProps.price != "0") {

        var index = this.checkLikeItem(this.POSProps.product_id);
        if (index != -1) {
          this.calLikeItem(index, this.POSProps);

        } else {
          this.productList.push(Object.assign({}, this.POSProps));
        }

        this.onClear();
        this.onReset();

        this.$refs._product_id.focus();
      }
    },
    onDecrease() {
      var amount = this.POSProps.amount;
      this.POSProps.amount = parseInt(amount) - 1 > 0 ? parseInt(amount) - 1 : "1";
      this.calTotal();
    },
    onIncrease() {
      this.POSProps.amount = parseInt(this.POSProps.amount) + 1;
      this.calTotal();
    },
    onSearchProdID(tag) {
      var me = this;
      this.productForSearch = this.listOfProduct.slice();

      var searchedList = [];
      for (var i = 0; i < this.productForSearch.length; i++) {
        var title = this.productForSearch[i]['product_id'].toLowerCase();
        if (title.indexOf(tag.target.value.toLowerCase()) >= 0) {
          searchedList.push(this.productForSearch[i]);
        }
      }
      if (searchedList.length >= 1) {
        var newProd = Object.assign({}, searchedList[0]);
        newProd.amount = "1";
        newProd.total = parseInt(newProd.price) * newProd.amount;
        this.POSProps = newProd;

        this.setTimeoutFocus(this.$refs._amount);
      }

    },
    isNumber(x) {
      return typeof data === 'number' && !isNaN(data);
    },
    setTimeoutFocus(el) {
      var me = this;
      setTimeout(function () {
        el.select();
        el.focus();
      }, 100);
    },
    onAmountEnter() {
      this.onAddProduct();
    },
    onAmount(tag) {
      var me = this;
      if (tag.target.value === "0" || tag.target.value === "") {
        me.POSProps.amount = "1";
        me.POSProps.total = "0";

        this.calTotal();

        this.setTimeoutFocus(this.$refs._amount);
        return false;
      }
      console.log(this.isNumber(parseInt(tag.target.value)));

      // if (!parseInt("0" + tag.target.value, 10) > 0) {
      //   me.POSProps.amount = "1";
      //   me.POSProps.total = "0";

      //   this.setTimeoutFocus(this.$refs._amount);

      // }

      this.calTotal();
    },
    calTotal() {
      // if (this.POSProps.amount != "" && this.POSProps.price != "") {
      this.POSProps.total = parseInt(this.POSProps.amount) * parseInt(this.POSProps.price);
      // }
    },
    incrementRetrieve(values) {
      this.POSProps = values;
      this.setTimeoutFocus(this.$refs._amount);
    },
    onAutoAdd(values) {
      this.POSProps = values;
      this.onAddProduct();
    }
  }
}
