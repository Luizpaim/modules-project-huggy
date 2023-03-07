import type { Axios, AxiosRequestConfig } from 'axios'
import axios from 'axios'

export class Api {
  api: Axios
  config!: AxiosRequestConfig

  private url: string = 'https://api.huggy.app/v3/'

  constructor() {
    this.api = axios.create({
      baseURL: this.url
    })
  }

  public async configUrl(accessToken: string): Promise<AxiosRequestConfig> {
    this.config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Language': 'pt-br',
        Authorization: 'Bearer ' + accessToken
      }
    }
    return this.config
  }
}
