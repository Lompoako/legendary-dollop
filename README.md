# legendary-dollop
This is my react page for a blockchain explorer from my local bitcoin wallet to coinbase account and vice versa!

# Coinbase

The official Node.js library for the [Coinbase API](https://developers.coinbase.com/api/v2).

## Features

* Full Test coverage.
* Support for both [API Key + Secret](https://developers.coinbase.com/api/v2#api-key) and [OAuth 2](https://developers.coinbase.com/api/v2#oauth2-coinbase-connect) authentication.
* Convenient methods for making calls to the API.
* Automatic parsing of API responses into relevant Javascript objects.
* Adheres to the nodejs error-first callback protocol.
* Continuous Integration testing against node 0.10, 0.11, and 0.12.

## Installation

`npm install coinbase`

## Version Compatibility

Version | GitHub repository
--------|------------------
`2.0.x` | This repository
`0.1.x` | [mateodelnorte/coinbase](https://github.com/mateodelnorte/coinbase)

Npm `coinbase` package name used to refer to the unofficial [coinbase](https://github.com/mateodelnorte/coinbase) library maintained by [Matt Walters](https://github.com/mateodelnorte). Matt graciously allowed us to use the name for this package instead. You can still find that package on [Github](https://github.com/mateodelnorte/coinbase). Thanks, Matt.

## Quick Start

The first thing you'll need to do is [sign up for coinbase](https://coinbase.com).

## API Key

If you're writing code for your own Coinbase account, [enable an API key](https://coinbase.com/settings/api). Next, create a ``Client`` object for interacting with the API:


```javascript
var Client = require('coinbase').Client;
var client = new Client({'apiKey': mykey, 'apiSecret': mysecret});
```

## OAuth2

If you're writing code that will act on behalf of another user, start by
[creating a new OAuth 2 application](https://coinbase.com/oauth/applications). You will need to do some work to obtain OAuth credentials for your users; while outside the scope of this document, please refer to our [OAuth 2 tutorial](https://developers.coinbase.com/docs/wallet/coinbase-connect/integrating) and [documentation](https://developers.coinbase.com/docs/wallet/coinbase-connect/reference). Once you have these credentials, create a client:

```javascript
var Client = require('coinbase').Client;
var client = new Client({'accessToken': accessToken, 'refreshToken': refreshToken});
```

## Making API Calls

With a `client instance`, you can now make API calls. We've included some examples below, but in general the library has Javascript prototypes for each of the objects described in our [REST API documentation](https://developers.coinbase.com/api/v2).  These classes each have methods for making the relevant API calls; for instance, ``coinbase.model.Transaction.complete`` maps to the [complete bitcoin request](https://developers.coinbase.com/api/v2#complete-request-money) API endpoint. The comments of each method in the code references the endpoint it implements. Each API method returns an ``object`` representing the JSON response from the API.

**Listing available accounts**

```javascript
var coinbase = require('coinbase');
var client   = new coinbase.Client({'apiKey': mykey, 'apiSecret': mysecret});

client.getAccounts({}, function(err, accounts) {
  accounts.forEach(function(acct) {
    console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name);
  });
});
```

**Get Balance from an Account Id**

```javascript
var coinbase = require('coinbase');
var client   = new coinbase.Client({'apiKey': mykey, 'apiSecret': mysecret});

client.getAccount('<ACCOUNT ID>', function(err, account) {
  console.log('bal: ' + account.balance.amount + ' currency: ' + account.balance.currency);
});
```

**Selling bitcoin**

```javascript
var args = {
  "amount": "12",
  "currency": "BTC"
};
account.sell(args, function(err, xfer) {
  console.log('my xfer id is: ' + xfer.id);
});
```

**Sending bitcoin**

```javascript
var args = {
  "to": "user1@example.com",
  "amount": "1.234",
  "currency": "BTC",
  "description": "Sample transaction for you"
};
account.sendMoney(args, function(err, txn) {
  console.log('my txn id is: ' + txn.id);
});
```

**Requesting bitcoin**

```javascript
var args = {
  "to": "user1@example.com",
  "amount": "1.234",
  "currency": "BTC",
  "description": "Sample transaction for you"
};
account.requestMoney(args, function(err, txn) {
  console.log('my txn id is: ' + txn.id);
});
```

**Listing current transactions**

```javascript
account.getTransactions(null, function(err, txns) {
  txns.forEach(function(txn) {
    console.log('my txn status: ' + txn.status);
  });
});
```

**Using pagination**

```javascript
account.getTransactions(null, function(err, txns, pagination) {
  txns.forEach(function(txn) {
    console.log('my txn: ' + txn.id);
  });
  console.log(pagination.next_uri);
  account.getTransactions(pagination, function(err, txns) {
    txns.forEach(function(txn) {
      console.log('my txn: ' + txn.id);
    });
  });
});
```

**Checking bitcoin prices**

```javascript
client.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err, obj) {
  console.log('total amount: ' + obj.data.amount);
});
```

**Verifying merchant callback authenticity**
```javascript
if (client.verifyCallback(req.raw_body, req.headers['CB-SIGNATURE'])) {
  // Process callback
}
```

## Error Handling

Errors are thrown for invalid arguments but are otherwise returned as the
first argument to callback functions using [http-errors](https://github.com/jshttp/http-errors) module.

Errors contain `name`, `status`, and `message` fields for error handling. You can find
more information about error types [here](https://developers.coinbase.com/api/v2#errors)

## Testing / Contributing

Any and all contributions are welcome! The process is simple:

1. Fork this repo
2. Make your changes and add tests
3. Run the test suite
4. Submit a pull request.

Tests are run via [mocha](http://mochajs.org) and [nock](https://github.com/pgte/nock). To run the tests, clone the repository and then:

`npm install`

`npm test`

Please also scan the packages for known vulnerabilities.

```bash
npm install -g nsp
nsp check --output summary
```

You can also run the tests against various node environments using the Dockerfile.example file.

1. `cp Dockerfile.example Dockerfile`
2. edit Dockerfile and uncomment the node version that interests you
3. `[sudo] docker build -t coinbase-node .`
4. `[sudo] docker run -it coinbase-node`






# Bitcoin API using Bitcoin Core, Node.js, and Express

Express API for querying data from your Bitcoin node to build web applications.  
  
Sends HTTP requests to Bitcoin Core node using various RPC commands.

A full tutorial for this API can be found [here](https://medium.com/@peterjd42/build-your-own-bitcoin-api-using-node-js-and-bitcoin-core-251e613623db).

## Setup
To use the API first make sure to install Node.js ([here](https://nodejs.org/en/download/)) and Bitcoin Core here ([here](https://bitcoin.org/en/download)).

Clone this repo and add a .env file at the root level of your project. Replace the bitcoinuser and bitcoinpassword values with those in your Bitcoin configuration file (in Bitcoin Core under `Settings > Options > Open Configuration File` ).  
  
### .env:
```

RPC_USER=bitcoinuser
RPC_PASSWORD=bitcoinpassword
```
If they haven't yet been set, add the following entries to your bitcoin.conf and change both files (restarting bitcoin core) :  
  
### bitcoin.conf:
```
rpcuser=bitcoinuser
rpcpassword=bitcoinpassword
```

Next run

```
npm install
```
then
```
npm run server
```
to start the server.

View a test endpoint in the browser at 'localhost:4444/api/getblockchaininfo'

## Methods used
- getblockcount
- getbestblockhash
- getconnectioncount
- getdifficulty
- getblockchaininfo
- getmininginfo
- getpeerinfo
- getrawmempool
- getblockhash
- getblock
- getrawtransaction
- decoderawtransaction
- sendrawtransaction #Broadcast the raw transaction to the network




<img src="http://bitcore.io/css/images/module-explorer.png" alt="bitcore explorers" height="35">
# Blockchain APIs for bitcore

[![NPM Package](https://img.shields.io/npm/v/bitcore-explorers.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-explorers)
[![Build Status](https://img.shields.io/travis/bitpay/bitcore-explorers.svg?branch=master&style=flat-square)](https://travis-ci.org/bitpay/bitcore-explorers)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-explorers.svg?style=flat-square)](https://coveralls.io/r/bitpay/bitcore-explorers)

A module for [bitcore](https://github.com/bitpay/bitcore) that implements HTTP requests to different Web APIs to query the state of the blockchain.

## Getting started

Be careful! When using this module, the information retrieved from remote servers may be compromised and not reflect the actual state of the blockchain.

```sh
npm install bitcore-explorers
bower install bitcore-explorers
```

At the moment, only Insight is supported, and only getting the UTXOs for an address and broadcasting a transaction.

```javascript
var explorers = require('bitcore-explorers');
var insight = new explorers.Insight();

insight.getUtxos('1Bitcoin...', function(err, utxos) {
  if (err) {
    // Handle errors...
  } else {
    // Maybe use the UTXOs to create a transaction
  }
});
```

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore/blob/master/CONTRIBUTING.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

[bitcore]: http://github.com/bitpay/bitcore-explorers


