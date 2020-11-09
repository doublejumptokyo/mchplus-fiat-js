

# Fiat SDK for MCH Plus

This API connects to the authentication of [MCH Plus](https://www.mch.plus/), the blockchain game publishing service of [doublejump.tokyo](https://www.doublejump.tokyo/).

Please read the documentation below for how to use the API and which endpoints are exposed. 

## Installation

### Npm

```bash
npm install mchplus-fiat-js
```

### Yarn

```bash
yarn add mchplus-fiat-js
```

## Usage

```js
import MchplusAuth from 'mchplus-fiat-js'

const currencyType = 'eth_value' // set currencyType ＊JPY→"jpy_value" , USD→"usd_value", ETH→"eth_value"

const mchplusFiat = new MchplusFiat(currencyType)

// call methods here
```

##  Get Go Fiat Session 
Generates a GoFiat redirect URL 

```js
await mchplusFiat.getGoFiatSession(logo_image_url, item_name, item_value, currency_value, tax_included, user_address, success_url, cancel_url)
//logo_image_url: string
//item_name: string
//item_value: integer
//currency_value: ETH(Specify by wei)→string, JPY→integer, USD→float  ＊Choose one
//tax_included: boolean
//user_address: string
//success_url: string
//cancel_url: string
```
