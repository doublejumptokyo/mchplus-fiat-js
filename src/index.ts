import GoFiat from './go-fiat'

export class MchplusFiat {
  private goFiat: GoFiat

  constructor(currencyType) {
    this.goFiat = new GoFiat(currencyType)
  }

  async getGoFiatSession(logoImageURL, itemName, itemValue, currrencyValue, taxIncluded, userAddress, successURL, cancelURL) {
    return await this.goFiat.getGoFiatSession(logoImageURL, itemName, itemValue, currrencyValue, taxIncluded, userAddress, successURL, cancelURL)
  }
}

export default MchplusFiat
