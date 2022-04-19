import axios from 'axios';
// import authHeader from './auth-header';
const API_URL = 'http://localhost:8000/';
// const API_URL = 'https://enigmatic-temple-06724.herokuapp.com/';

class UserService {
  async getUserBoard() {  
    const auth = "JWT " + localStorage.getItem('accessToken')
    const headers = {
      "Authorization": auth,
    };
    const data = await axios.get(API_URL + 'profile/', { headers })
      .then((response) => { return response.data })
      .catch(err => {
        console.log(err)
      });
    return data;
  }
  async changeUserName(newName) {
    const auth = "JWT " + localStorage.getItem('accessToken')
    const headers = {
      "Authorization": auth,
    };
    const body = {
      "name": newName
    }
    return await axios.patch(API_URL + 'profile/', body, { headers })
      .then((result) => result.data)
      .catch((err) => err)
  }
  async changeUserAvatar(newAvatar) {
    const auth = "JWT " + localStorage.getItem('accessToken')
    const headers = {
      "Authorization": auth,
    };
    const body = {
      "avatar": newAvatar
    }
    return await axios.patch(API_URL + 'profile/', body, { headers })
      .then((result) => result.data)
      .catch((err) => err)
  }
}
export default new UserService();