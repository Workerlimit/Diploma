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
  async register(user) {
    await axios.post(API_URL + 'sign-up/', {
      email: user.email,
      name: user.name,  
      date_of_birth: user.date,
      gender: user.gender,
      password: user.password,
      re_password: user.password,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    })
  }
}
export default new AuthService();