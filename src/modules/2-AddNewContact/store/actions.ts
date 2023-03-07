import type { ActionContext } from 'vuex'

import { Contacts, type IContact } from '../services/Contacts'
import { SET_CONTACT } from './mutationsType'
import type { IState } from './state'

const contacts = new Contacts()

export const actions = {
  ActionPostContacts: async (
    { commit }: ActionContext<IState, any>,
    params: { payload: IContact; token: string }
  ) => await contacts.post(params).then((result) => commit(SET_CONTACT, result))
}
