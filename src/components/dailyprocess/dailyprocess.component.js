import axios from 'axios';
import service from '../../service'

export default {
  name: 'dailyprocess',
  components: {},
  props: [],
  data() {
    return {
      // loader: null
    }
  },
  computed: {

  },
  mounted() {
    // this.loader = this.IMAGELOADER;
  },
  methods: {
    getListOfData() {
      const me = this;
      this.imageLoading = true;

      const svpath = this.SERVER_PATH + this.USER_VERBS.todo;
      const USER_TOKEN = localStorage.getItem("jwtToken");
      const params = "?page=0&size=5";

      axios.get(svpath + params, { headers: { "Authorization": "Bearer " + USER_TOKEN } }).then(response => {
        console.log(response.data);

        this.imageLoading = false;

      }).catch((error) => {
        console.log(error.response.data);
        this.imageLoading = false;
      });
    },

    getGetting() {
      const me = this;
      this.imageLoading = true;

      const svpath = this.SERVER_PATH + this.USER_VERBS.todo;
      const USER_TOKEN = localStorage.getItem("jwtToken");

      me.load();

      axios.get(svpath, { headers: { "X-Auth-Token": USER_TOKEN } }).then(response => {
        console.log(response.data);

        this.imageLoading = false;

      }).catch((error) => {
        console.log(error.response.data);
        this.imageLoading = false;
      });
    },
    getCreateUser() {
      const fullPath = this.SERVER_PATH + this.USER_VERBS.register;
      const params = {
        id: null,
        username: 'pob@gmail.com',
        password: '123456',
        email: 'pob@gmail.com',
        lastPasswordReset: new Date(),
        authorities: 'ADMIN'
      }

      axios.post(fullPath, params)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e)
        })

    },
    getLogin() {
      const fullPath = this.SERVER_PATH + this.USER_VERBS.login;
      console.log(fullPath);

      const params = {
        usernameOrEmail: 'john@gmail.com',
        password: '123456'
      }

      axios({
        method: 'post',
        url: fullPath,
        headers: {
          'Content-Type': 'application/json'
        },
        data: params

      }).then(function (response) {
        console.log(response.data);

        localStorage.setItem('jwtToken', response.data.accessToken);
      });

    },
    load() {
      const svpath = this.SERVER_PATH + this.USER_VERBS.todo;
      const token = localStorage.getItem("jwtToken");
      const svrPath = this.SERVER_PATH + this.USER_VERBS.todo;

      service.getService(svrPath, token).then((data) => {
        console.log(data);

        // if(!data.error && (data.status == '200')){
        //   console.log(data);

        // }else{
        //   console.log(data);
        // }


      }).catch((error) => {
        console.log(error.response.data);
        // alert('Error Message: '+error.response.data.error+' ['+error.response.status+']');
      })
    }
  }
}
