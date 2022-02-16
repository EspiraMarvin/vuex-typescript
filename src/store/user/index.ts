import { Module } from "vuex";
import { RootState } from "@/store/types";
import { userState } from "@/store/user/types";
import { getters } from "@/store/user/getters";
import { mutations } from "@/store/user/mutations"
import { actions } from "@/store/user/actions";

const state: userState = {
  username: "Marvin",
  email: "marvin@hoo.com",
  cats: [],
  lastLogin: new Date(),
};

export const user: Module<userState, RootState> = {
  state,
  getters,
  mutations,
  actions
};
