import { createStore } from "vuex";
import { auth } from "./auth.module";
import { user } from "./user.module";
import { playlist } from "./playlist.module";
import { album } from "./album.module";
import { artist } from "./artist.module";
import { track } from "./track.module";

const store = createStore({
  modules: {
    auth,
    user,
    playlist,
    album,
    artist,
    track
  },
});
export default store;