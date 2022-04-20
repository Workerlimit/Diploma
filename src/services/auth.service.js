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
  async register(email, name, date, gender, password) {
    await axios.post(API_URL + 'sign-up/', {
      email: email,
      name: name,  
      date_of_birth: date,
      gender: gender,
      password: password,
      "re_password": password,
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