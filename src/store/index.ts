
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Vue from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { user } from "@/store/user";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: "Hello from OS media",
  },
  modules: {
    user,
  },
};

export default new Vuex.Store<RootState>(store);
