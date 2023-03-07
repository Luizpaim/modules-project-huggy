import { Api } from './Api'

export interface IContact {
  name: string
  email: string
  phone: string
  mobile: string
  address: string
  district: string
  state: string
}

export class Contacts extends Api {
  constructor() {
    super()
  }

  public async post(params: { payload: IContact; token: string }): Promise<IContact> {
    const { data } = await this.api.post(
      `/contacts`,
      params.payload,
      await this.configUrl(params.token)
    )

    return data
  }
}
