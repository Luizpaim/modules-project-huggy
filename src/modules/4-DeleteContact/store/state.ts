import type { IContact } from '../services/Contacts'

export interface IState {
  contact: IContact | null
}
export const state: IState = {
  contact: null
}
