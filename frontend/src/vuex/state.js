import { $cookies } from "vue/types/umd";

import cookies from 'vue-cookies'

export default () => ({
  count: 0,
  authToken: cookies.get('auth-token')
});
