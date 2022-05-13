import api from './api';
const auth = "JWT " + localStorage.getItem('accessToken')
const headers = {
  "Authorization": auth,
};
class UserService {
  async getUserBoard() {  

    return api.get("profile/", { headers }).then((response) => { return response.data })
    .catch(err => {
      console.log(err)
    });
  }
  async changeUserName(newName) {
    const body = {
      "name": newName
    }
    return api.patch("profile/", body, { headers })
      .then((response) => response.data)
      .catch((err) => err)
  }
  async changeUserAvatar(newAvatar) {
    return api.patch("profile/", newAvatar, { headers })
      .then(function() {
        console.log("success")
      }).catch(function() {
        console.log("error")
      })
  }
}
export default new UserService();
