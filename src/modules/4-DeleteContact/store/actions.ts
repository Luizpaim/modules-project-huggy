import type { ActionContext } from 'vuex'
import { Contacts } from '../services/Contacts'
import { SET_CONTACT } from './mutationsType'
import type { IState } from './state'

const contacts = new Contacts()

export const actions = {
  ActionGetByIdContact: async (
    { commit }: ActionContext<IState, any>,
    params: { id: number; token: string }
  ) => await contacts.getById(params).then((result) => commit(SET_CONTACT, result)),

  ActionDeleteContact: async (
    { commit }: ActionContext<IState, any>,
    params: { id: number; token: string }
  ) => await contacts.delete(params)
}
