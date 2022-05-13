import PlaylistService from "@/services/playlist.service";

export const playlist = {
    namespaced: true,
    state: {
        playlists: [{}],
        playlist: {}
    },
    getters: {
        getPlaylist: (state) => state.playlists,
        getOnePlaylist: (state) => state.playlist,
    },
    mutations: {
        ADD_PLAYLIST(state, playlist) {
            state.playlists.push(playlist);
        },
        SET_PLAYLIST(state, playlists) {
            state.playlists = playlists;
        },
        CURRENT_PLAYLIST(state, id) {
            let playlist = state.playlists[id];
            state.playlist = playlist;
        }
    },
    actions: {
        async fetchPlaylist({ commit }) {
            const data = await PlaylistService.getAllPlaylists();
            commit('SET_PLAYLIST', data.data);
        },
        async addPlaylist({ commit }, playlist) {
            const res = await PlaylistService.createPlaylist(playlist).then(
                response => {
                    commit('ADD_PLAYLIST', res.data);
                    return Promise.resolve(response);
                },
                error => {
                    console.log("Hrhrhr")
                    return Promise.reject(error);
                }
            );
        },
        getOnePlaylist({ commit }, id) {
            console.log(id);
            commit('CURRENT_PLAYLIST', id);
        }
        // async fetchPlaylist({ commit }, data) {
        //     try {
        //     //   const fields = "uri, name, type, images, description, owner, followers";
        //     //   const response = await api.spotify.playlists.getPlaylist(
        //     //     data.userID,
        //     //     data.playlistID,
        //     //     fields
        //     //   );
        //       const d = await PlaylistService.getAllPlaylists();
        //       commit("SET_PLAYLIST", d);
        //     } catch (e) {
        //       console.log(e);
        //     }
        // }
    }
}