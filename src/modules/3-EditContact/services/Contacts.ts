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

  public async getById(params: { id: number; token: string }): Promise<IContact> {
    const { data } = await this.api.get(
      `/contacts/${params.id}`,
      await this.configUrl(params.token)
    )

    return data
  }

  public async put(params: { payload: IContact; id: number; token: string }): Promise<IContact> {
    const { data } = await this.api.put(
      `/contacts/${params.id}`,
      params.payload,
      await this.configUrl(params.token)
    )

    return data
  }
}
