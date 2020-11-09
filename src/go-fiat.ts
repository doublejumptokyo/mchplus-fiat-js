import axios from 'axios'

export class GoFiat {
  private clientId: string
  private currencyType: string

  defaultAccount: string

  constructor(clientId,currencyType) {
    this.clientId = clientId
    this.currencyType = currencyType
  }

  async getGoFiatSession(logoImageURL, itemName, itemValue, currencyValue, taxIncluded, userAddress, successURL, cancelURL) {
    const EndPointURL = 'https://ethtx.mch.plus/go/session/' + this.clientId;

    const body = JSON.stringify({
      "logo_image_url": logoImageURL,
      "item_name": itemName,
      "item_value": itemValue,
      [this.currencyType]: currencyValue,
      "tax_included": taxIncluded,
      "user_address": userAddress,
      "success_url": successURL,
      "cancel_url": cancelURL,
    });
    const headers = {
          'Content-Type': 'application/json'
    }

    var url = EndPointURL;
    try {
        const response = await axios.post(url, body, { headers })
        return response
        } catch (e) {
            console.log(e)
    }
  }
}

export default GoFiat
