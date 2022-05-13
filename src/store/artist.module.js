import ArtistService from "@/services/artist.service";

export const artist = {
    namespaced: true,
    state: {
        artist: [{}]
    },
    getters: {
        getArtist: (state) => state.artist
    },
    mutations: {
        setArtist(state, payload) {
            state.artist = payload;
        }
    },
    actions: {
        async fetchArtist(context) {
            const res = await ArtistService.getPublicArtists();
            console.log(res.data)
            context.commit("setArtist", res.data);
        }
    }
}