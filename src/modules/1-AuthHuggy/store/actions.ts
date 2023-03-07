import type { ActionContext } from 'vuex'
import { RedirectAuthHuggy, type IRedirectUrlAuth } from '../services'

const authHuggy = new RedirectAuthHuggy()

export const actions = {
  ActionRedirectAuthHuggy: async (
    { commit }: ActionContext<any, any>,
    payload: IRedirectUrlAuth
  ) => {
    await authHuggy.redirectUrlAuth(payload)
  }
}
