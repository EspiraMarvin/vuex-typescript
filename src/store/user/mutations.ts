import {MutationTree} from "vuex";
import {userState} from "@/store/user/types";

export enum UserMutations {
    SET_USERNAME = "SET_USERNAME",
    SET_CAT_FACTS = "SET_CAT_FACTS"
}

export const mutations: MutationTree<userState> = {
    [UserMutations.SET_USERNAME](state, payload: string){
        state.username = payload
    },
    [UserMutations.SET_CAT_FACTS](state, payload: Array<any>){
        state.cats = payload
        console.log('state.cats', state.cats)
    }
}
