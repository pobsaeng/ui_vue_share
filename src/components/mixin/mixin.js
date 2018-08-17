import { userModal } from "./models/userModel";
import { params } from "./models/params";

export default {
  name: "mixin",
  components: {},
  mixins: [ userModal, params ],
  props: [],
  data() {
    return { 
      
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onChange() {},

    onSearchKeyDown() {
      if (this.search.length >= 2) {
        this.onSave();
        
        this.chkSave = true;
      }else{
        this.chkSave = false;
      }
    }
  }
};
