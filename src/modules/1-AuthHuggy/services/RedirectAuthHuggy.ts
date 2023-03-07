export interface IRedirectUrlAuth {
  clientId: string
  urlCallback: string
}

export class RedirectAuthHuggy {
  private readonly urlAuth: string =
    'https://auth.huggy.app/oauth/authorize?scope=install_app%20read_agent_profile&response_type=code&redirect_uri={url_de_callback}&client_id={client_id}'

  public async redirectUrlAuth({ clientId, urlCallback }: IRedirectUrlAuth): Promise<void> {
    const url = String(this.urlAuth)
      .replace('{url_de_callback}', urlCallback)
      .replace('{client_id}', clientId)

    return window.location.assign(url)
  }
}
