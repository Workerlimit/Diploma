import api from "./api";
class AuthService {
  async login(user) {
    return api.post('login/', {
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
  async register(email, password, name, date, gender) {
    const body = {
      "email": email,
      "name": name,  
      "date_of_birth": date,
      "gender": gender,
      "password": password,
      "re_password": password,
    }
    await api.post('sign-up/', body)
  }
}
export default new AuthService();