import TrackService from "@/services/track.service";

export const track = {
    namespaced: true,
    state: {
        tracks: [{}]
    },
    getters: {
        getTracks: (state) => state.tracks
    },
    mutations: {
        setTracks(state, payload) {
            state.tracks = payload;
        }
    },
    actions: {
        async fetchTracks(context) {
            const res = await TrackService.getTracks();
            context.commit("setTracks", res.data);
        },
    }
}