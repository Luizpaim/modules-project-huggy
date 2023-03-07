import { createStore } from 'vuex'
import { actions } from './actions'

export default createStore({
  actions: {
    ...actions
  }
})
