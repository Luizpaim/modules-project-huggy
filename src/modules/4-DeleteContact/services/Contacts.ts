import { Api } from './Api'

export interface IContact {
  id: string
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

  public async delete(params: { id: number; token: string }): Promise<void> {
    const { data } = await this.api.delete(
      `/contacts/${params.id}`,
      await this.configUrl(params.token)
    )

    return data
  }
}
