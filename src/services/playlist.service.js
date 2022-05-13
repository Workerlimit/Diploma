import api from './api';
const auth = "JWT " + localStorage.getItem('accessToken')
const headers = {
    "Authorization": auth,
};

class PlaylistService {
    async getAllPlaylists() {
        return api.get("audio/playlist/", { headers });
    }

    async createPlaylist(name) {
        var bodyFormData = new FormData();
        bodyFormData.append("title", name,);
        await api.post('audio/playlist/', bodyFormData, { headers });
    }
}

export default new PlaylistService();
