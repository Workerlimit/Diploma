import axios from 'axios';
const API_URL = 'http://localhost:8000/';
// const API_URL = 'https://enigmatic-temple-06724.herokuapp.com/';
class AuthService {
  async login(user) {
    return await axios
      .post(API_URL + 'login/', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access) {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('accessToken', response.data.access);
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  
}
export default new AuthService();