import type { MutationTree } from 'vuex'

import { SET_CONTACT } from './mutationsType'
import type { IState } from './state'

export const mutations: MutationTree<IState> = {
  [SET_CONTACT](state, response) {
    if (response) {
      state.contact = response
    }
  }
}
