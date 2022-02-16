import {GetterTree} from "vuex";
import {userState} from "@/store/user/types";
import {RootState} from "@/store/types";

export const getters: GetterTree<userState, RootState> = {
    getUserInfo(state): string {
        return `Username: ${state.username} - Email: ${state.email}`
    },
    getUserName (state): string {
        return state.username
    },
    getCats (state): Array<any> {
        return  state.cats
    }
}
