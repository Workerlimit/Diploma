import AlbumService from "@/services/album.service";

export const album = {
    namespaced: true,
    state: {
        albums: [{}]
    },
    getters: {
        getAlbums: (state) => state.albums
    },
    mutations: {
        setAlbum(state, payload) {
            state.albums = payload;
        }
    },
    actions: {
        async fetchAlbum(context) {
            const res = await AlbumService.getPublicAlbums();
            context.commit("setAlbum", res.data);
        },
    }
}