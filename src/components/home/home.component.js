import Vue from 'vue'

export default {
  name: 'home',
  components: {  },
  props: [],
  data() {
    return {
      msg: '',
      users: [
        { id: 1, name: 'Pob' }
      ]
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    show() {
      this.$modal.show('hello-world');
    },
    hide() {
      this.$modal.hide('hello-world');
    },
    beforeOpen() {
      console.log('beforeOpen!');
      this.msg = "Hi!";
    },
    onClose(){
      this.$modal.hide('hello-world');
    },
    makeAdmin: function () {
      console.log('Ok');
    },
    doNothing: function () {
      console.log('No');
    },
    onDialog1() {
      let message = {
        title: 'Vuejs Dialog Plugin',
        body: 'A lightweight, promise based alert, prompt and confirm dialog'
      }

      this.$dialog.confirm(message)
    },
    onDialog2() {
      let message = "Are you sure?";

      let options = {
        html: false, // set to true if your message contains HTML tags. eg: "Delete <b>Foo</b> ?"
        loader: false, // set to true if you want the dailog to show a loader after click on "proceed"
        reverse: false, // switch the button positions (left to right, and vise versa)
        okText: 'Continue',
        cancelText: 'Close',
        animation: 'zoom', // Available: "zoom", "bounce", "fade"
        type: 'basic', // coming soon: 'soft', 'hard'
        verification: 'continue', // for hard confirm, user will be prompted to type this to enable the proceed button
        verificationHelp: 'Type "[+:verification]" below to confirm', // Verification help text. [+:verification] will be matched with 'options.verification' (i.e 'Type "continue" below to confirm')
        clicksCount: 3, // for soft confirm, user will be asked to click on "proceed" btn 3 times before actually proceeding
        backdropClose: false // set to true to close the dialog when clicking outside of the dialog window, i.e. click landing on the mask 
      };

      this.$dialog.confirm(message, options)
        .then(function () {
          // This will be triggered when user clicks on proceed
        })
        .catch(function () {
          // This will be triggered when user clicks on cancel
        });
    },
    onModal1() {
      this.$modal.show('hello-world', { foo: 'bar' });
    },
    onModal2() {
      this.$modal.show('dialog', {
        title: 'Alert!',
        text: 'You are too awesome',
        buttons: [
          {
            title: 'Deal with it',
            handler: () => { alert('Woot!') }
          },
          {
            title: '',       // Button title
            default: true,    // Will be triggered by default if 'Enter' pressed.
            handler: () => { } // Button click handler
          },
          {
            title: 'Close'
          }
        ]
      })
    }
  }
}
