import api from './services/index';

class LoginServices {
   static list() {
    return api.get("/users");
  }
}
export default LoginServices;
