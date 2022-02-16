import {ActionTree} from "vuex";
import {userState} from "@/store/user/types";
import {RootState} from "@/store/types";

export const actions: ActionTree<userState, RootState> = {
    loadAPIResult({ commit}): Promise<Array<any>> {
        return fetch('https://cat-fact.herokuapp.com/facts').then(data => data.json()).then(data => {
            console.log(data)
            commit("SET_CAT_FACTS", data)
            return data
        })
    }
}
