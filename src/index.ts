import GoFiat from './go-fiat'

export class MchplusFiat {
  private goFiat: GoFiat

  constructor(clientId, currencyType) {
    this.goFiat = new GoFiat(clientId,currencyType)
  }

  async getGoFiatSession(logoImageURL, itemName, itemValue, currrencyValue, taxIncluded, userAddress, successURL, cancelURL) {
    return await this.goFiat.getGoFiatSession(logoImageURL, itemName, itemValue, currrencyValue, taxIncluded, userAddress, successURL, cancelURL)
  }
}

export default MchplusFiat
