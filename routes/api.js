const express = require('express');
const router = express.Router({ mergeParams: true });
var request = require('request');
var bodyparser = require('body-parser');
const networkLogic = require('logic/network.js');
const bitcoind = require('logic/bitcoind.js');
const auth = require('middlewares/auth.js');
const safeHandler = require('utils/safeHandler');
const axios = require("axios");
const bitcore = require("bitcore-lib");
var insight = require('bitcore-explorers').Insight;
var explo = require("bitcore-explorers");
var shell = {};
var insight = new explo.Insight();
const dotenv = require('dotenv');
dotenv.config();
const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const app = express();

const RpcClient = require('bitcoind-rpc');
const camelizeKeys = require('camelize-keys');
const BitcoindError = require('models/errors.js').BitcoindError;
const BITCOIND_RPC_PORT = process.env.RPC_PORT || 8332; // eslint-disable-line no-magic-numbers, max-len
const BITCOIND_HOST = process.env.BITCOIN_HOST || '127.0.0.1';
const BITCOIND_RPC_USER = process.env.RPC_USER;
const BITCOIND_RPC_PASSWORD = process.env.RPC_PASSWORD;
var base_url = 'https://coinbase.com/api/v2/';
var baseUrl = 'https://coinbase.com/api/v2/';
var base_url = 'https://coinbase.com/api/v1/';
const mykey = process.env.apiKey;
const mysecret = process.env.apiSecret;
const account_link_url = "https://www.coinbase.com/accounts/75c4e51a-5c8f-5b1d-89d6-ca2874613c9b";

const rpcClient = new RpcClient({
  protocol: 'http',
  user: BITCOIND_RPC_USER, // eslint-disable-line object-shorthand
  pass: BITCOIND_RPC_PASSWORD, // eslint-disable-line object-shorthand
  host: BITCOIND_HOST,
  port: BITCOIND_RPC_PORT,
});

module.exports = {
  networks: {
    development: {
      host: `http://${USER}:${PASS}@127.0.0.1:8332/`,
      port: 8332,
      network_id: "main" // Match any network id
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          process.env,         
          `http://${USER}:${PASS}@127.0.0.1:8333/`
                     
        )
      },
      blockmintxfee:0.00001,
      paytxfee: 0.00001000,
      confirmations: 2,
      network_id: 1
     }
    }
  }

const headers = {
  "content-type": "text/plain;"
};

router.get("/getchaintxstats", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getchaintxstats","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
}); 

router.get("/getbestblockhash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

// **** THIS IS NOT ADVISABLE TO BE ENABLED WHEN IN PRODUCTION OF WEBSITE BECAUSE IT WILL EXPOSE EVERYTHING FOR HACKERS *****
router.get("/listunspent", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"listunspent","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/gettxoutsetinfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"gettxoutsetinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockcount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getbestblockhash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getconnectioncount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getdifficulty", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockchaininfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getmininginfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getpeerinfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getnewaddress", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getwalletinfo/:myaddress", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getwalletinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


router.get("/getrawmempool", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/sendtoaddress/:to_address", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendtoaddress","params":[${
    req.params.index, req.params.id 
  }]}`;  
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
    req.params.index
  }]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getrawtransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
  }"]}`;
   var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/decoderawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

//Example commands to return a get response
router.get("/getbalance", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbalance","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getbalances", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbalances","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/signrawtransactionwithwallet/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"signrawtransactionwithwallet","params":["${
    req.params.hex
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

//sendrawtransaction
router.get("/sendrawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":["${
    req.params.hex
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/gettransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"gettransaction","params":["${
    req.params.id
  }"]}`;
   var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/test", (req, res) => res.json({ msg: "backend works" }));

router.get('/mempool', (req, res) =>  {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);  
});

router.get('/addresses', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"addresses","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/blockcount', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"blockcount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/connections', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"connections","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

//requires no authentication as it is used to fetch loading status
//which could be fetched at login/signup page
router.get('/status', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"status","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/sync', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sync","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/version', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"version","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/statsDump', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"statsDump","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/stats', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"stats","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/block', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"block","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

// /v1/bitcoind/info/block/<hash>
router.get('/block/:id', (req, res) => {  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"block","params":["${
  req.params.id
}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/blocks', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"blocks","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/txid/:id', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"txid","params":["${
    req.params.id
  }"]}`;
   var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get('/mempool', auth.jwt, safeHandler((req, res) =>
  bitcoind.getMempoolInfo()
    .then(mempool => res.json(mempool.result))
));

router.get('/addresses', auth.jwt, safeHandler((req, res) =>
  networkLogic.getBitcoindAddresses()
    .then(addresses => res.json(addresses))
));

router.get('/blockcount', auth.jwt, safeHandler((req, res) =>
  bitcoind.getBlockCount()
    .then(blockCount => res.json(blockCount))
));

router.get('/connections', auth.jwt, safeHandler((req, res) =>
  bitcoind.getConnectionsCount()
    .then(connections => res.json(connections))
));

//requires no authentication as it is used to fetch loading status
//which could be fetched at login/signup page
router.get('/status', safeHandler((req, res) =>
  bitcoind.getStatus()
    .then(status => res.json(status))
));

router.get('/sync', auth.jwt, safeHandler((req, res) =>
  bitcoind.getSyncStatus()
    .then(status => res.json(status))
));

router.get('/version', auth.jwt, safeHandler((req, res) =>
  bitcoind.getVersion()
    .then(version => res.json(version))
));

router.get('/statsDump', auth.jwt, safeHandler((req, res) =>
  bitcoind.nodeStatusDump()
    .then(statusdump => res.json(statusdump))
));

router.get('/stats', auth.jwt, safeHandler((req, res) =>
  bitcoind.nodeStatusSummary()
    .then(statussumarry => res.json(statussumarry))
));

router.get('/block', auth.jwt, safeHandler((req, res) => {
  if (req.query.hash !== undefined && req.query.hash !== null) {
    bitcoind.getBlock(req.query.hash)
      .then(blockhash => res.json(blockhash))
  } else if (req.query.height !== undefined && req.query.height !== null) {
    bitcoind.getBlockHash(req.query.height)
      .then(blockhash => res.json(blockhash))
  }
}
));

// /v1/bitcoind/info/block/<hash>
router.get('/block/:id', auth.jwt, safeHandler((req, res) =>
  bitcoind.getBlock(req.params.id)
    .then(blockhash => res.json(blockhash))
));

router.get('/blocks', auth.jwt, safeHandler((req, res) => {
  const fromHeight = parseInt(req.query.from);
  const toHeight = parseInt(req.query.to);
  bitcoind.getBlocks(fromHeight, toHeight)
    .then(blocks => res.json(blocks))
}
));

router.get('/txid/:id', auth.jwt, safeHandler((req, res) =>
  bitcoind.getTransaction(req.params.id)
    .then(txhash => res.json(txhash))
));

function promiseify(rpcObj, rpcFn, what) {
  return new Promise((resolve, reject) => {
    try {
      rpcFn.call(rpcObj, (err, info) => {
        if (err) {
          reject(new BitcoindError(`Unable to obtain ${what}`, err));
        } else {
          resolve(camelizeKeys(info, '_'));
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

function promiseifyParam(rpcObj, rpcFn, param, what) {
  return new Promise((resolve, reject) => {
    try {
      rpcFn.call(rpcObj, param, (err, info) => {
        if (err) {
          reject(new BitcoindError(`Unable to obtain ${what}`, err));
        } else {
          resolve(camelizeKeys(info, '_'));
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

function promiseifyParamTwo(rpcObj, rpcFn, param1, param2, what) {
  return new Promise((resolve, reject) => {
    try {
      rpcFn.call(rpcObj, param1, param2, (err, info) => {
        if (err) {
          reject(new BitcoindError(`Unable to obtain ${what}`, err));
        } else {
          resolve(camelizeKeys(info, '_'));
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

function getBestBlockHash() {
  return promiseify(rpcClient, rpcClient.getBestBlockHash, 'best block hash');
}

function getBlockHash(height) {
  return promiseifyParam(rpcClient, rpcClient.getBlockHash, height, 'block height');
}

function getBlock(hash) {
  return promiseifyParam(rpcClient, rpcClient.getBlock, hash, 'block info');
}

function getTransaction(txid) {
  return promiseifyParamTwo(rpcClient, rpcClient.getRawTransaction, txid, 1, 'transaction info');
}

function getBlockChainInfo() {
  return promiseify(rpcClient, rpcClient.getBlockchainInfo, 'blockchain info');
}

function getPeerInfo() {
  return promiseify(rpcClient, rpcClient.getPeerInfo, 'peer info');
}

function getBlockCount() {
  return promiseify(rpcClient, rpcClient.getBlockCount, 'block count');
}

function getMempoolInfo() {
  return promiseify(rpcClient, rpcClient.getMemPoolInfo, 'get mempool info');
}

function getNetworkInfo() {
  return promiseify(rpcClient, rpcClient.getNetworkInfo, 'network info');
}

function getMiningInfo() {
  return promiseify(rpcClient, rpcClient.getMiningInfo, 'mining info');
}
function help() {
  // TODO: missing from the library, but can add it not sure how to package.
  rpc.uptime(function (err, res) {
      if (err) {
          deferred.reject({status: 'offline'});
      } else {
          deferred.resolve({status: 'online'});
      }
  });
  return promiseify(rpcClient, rpcClient.help, 'help data');
}

var req = {
  baseUrl: ({host:'https://coinbase.com/api/v2/', 'apiKey': mykey, 'apiSecret': mysecret}),
  method: 'GET',
  path: '/v2/exchange-rates?currency=USD',
  body: ''
  
};

function buy_price(amount, next) {
  var url = base_url + 'prices/buy?qty=' + amount;
  return (url).request('GET', function(err, response) {
                                 if ( err ) { return next(err); };
                                 if ( response.status != 200 ) {
                                     return next('invalid status ' + response.status + ' received');
                                 } else {
                                     var json = JSON.parse(response.body);
                                     if ( _.isUndefined(json.amount) || _.isUndefined(json.currency) ) {
                                         return next('invalid response received');
                                     } else {
                                         if ( json.currency != 'USD' ) {
                                             return next('invalid currency received');
                                         } else {
                                             return next(null, json.amount);                                  
                                         }
                                     }
                                 }
                             });
}

function sell_price(amount, next) {
  var url = base_url + 'prices/sell?qty=' + amount;
  return (url).request('GET', function(err, response) {
                                 if ( err ) { return next(err); };
                                 if ( response.status != 200 ) {
                                     return next('invalid status ' + response.status + ' received');
                                 } else {
                                     var json = JSON.parse(response.body);
                                     if ( _.isUndefined(json.amount) || _.isUndefined(json.currency) ) {
                                         return next('invalid response received');
                                     } else {
                                         if ( json.currency != 'USD' ) {
                                             return next('invalid currency received');
                                         } else {
                                             return next(null, json.amount);                                  
                                         }
                                     }
                                 }
                             });
}

function balance(api_key, next) {
  var url = base_url + 'account/balance?api_key=' + api_key;
  return (url).request("GET", function(err, response) {
                    if ( err ) { return next(err); };
                    if ( response.status != 200 ) {
                        return next('invalid status ' + response.status + ' received');
                    } else {
                        var json = JSON.parse(response.body);
                        if ( _.isUndefined(json.amount) || _.isUndefined(json.currency) ) {
                            return next('invalid response received');
                        } else {
                            if ( json.currency != 'BTC' ) {
                                return next('invalid currency received');
                            } else {
                                return next(null, json.amount);                                  
                            }
                        }
                    }
                });
}

function send_btc(api_key, email, amount, note, next) {
var email = 'sadoli25@gmail.com';
var amount = '150.00';
var note = "Pay to my Personal Bitcoin Wallet";
var account_link_url = "https://www.coinbase.com/accounts/75c4e51a-5c8f-5b1d-89d6-ca2874613c9b";
  var url = base_url + 'transactions/send_money?api_key=' + mykey;
  var o_body = {
      transaction : {
        account_link_url,
          to : email,
          amount : amount,
          note : note
      }
  };
  return (url).request("POST", 
                             {"Content-Type" : "application/json"},
                             JSON.stringify(o_body),
                             function(err, response) {
                                 if ( err ) { return next(err); };
                                 if ( response.status != 200 ) {
                                     return next('invalid status ' + response.status + ' received');
                                 } else {
                                     var json = JSON.parse(response.body);
                                     if ( _.isUndefined(json.success) ) {
                                         return next('invalid response received (no success)');
                                     } else {
                                         if ( ! json.success ) {
                                             return next(JSON.stringify(json.errors));
                                         } else {
                                             if ( _.isUndefined(json.transaction.id) ) {
                                                 return next('invalid response received (no transaction id)');
                                             }
                                             return next(null, json.transaction.id);
                                         }
                                     }
                                 }
                             });
}

const sendBitcoin = async (recieverAddress, amountToSend) => {
  const sochain_network = "BTC";
  const privateKey = "L2mP4Sudo3F8VK5n5hy1JS5xktySiDC3cnAVGcUqMeN4h8kvMWaL";
  const sourceAddress = "38jWWKzyib4s8cQVr4Rv65GyczVVvsP5hp";
  const satoshiToSend = amountToSend * 100000000;
  let fee = 0;
  let inputCount = 0;
  let outputCount = 2;
  const utxos = axios.get(
      `https://coinbase.com/api/v2/get_tx_unspent/BTC/3CZRf5UwNi1cW7qR27NRpFaXdpnu5YNDQG`,
    );
  const transaction = new bitcore.Transaction();
  let totalAmountAvailable = 0;

  insight.address(address, (error, result) => { shell.address = result });
  insight: express(address, (error, result) => { shell.utxos = result });

  app.post("/insight", function(address, utxos){
  result = result.body.utxos;
   console.log(adress);
   console.log(utxos);

  let inputs = [];
  utxos.data.data.txs.forEach(async (element) => {
    let utxo = {};
    utxo.satoshis = Math.floor(Number(element.value) * 100000000);
    utxo.script = element.script_hex;
    utxo.address = utxos.data.data.address;
    utxo.txId = element.txid;
    utxo.outputIndex = element.output_no;
    totalAmountAvailable += utxo.satoshis;
    inputCount += 1;
    inputs.push(utxo);
  });
});
  transactionSize = inputCount * 146 + outputCount * 34 + 10 - inputCount;
  // Check if we have enough funds to cover the transaction and the fees assuming we want to pay 20 satoshis per byte

  fee = transactionSize * 20
  if (totalAmountAvailable - satoshiToSend - fee  < 0) {
    throw new Error("Balance is too low for this transaction");
  }

  //Set transaction input
  transaction.from(inputs);
  // set the recieving address and the amount to send
  transaction.to(recieverAddress, satoshiToSend);
  // Set change address - Address to receive the left over funds after transfer
  transaction.change(sourceAddress);
  //manually set transaction fees: 20 satoshis per byte
  transaction.fee(fee * 20);
  // Sign transaction with your private key
  transaction.sign(privateKey);
  // serialize Transactions
  const serializedTransaction = transaction.serialize();
  // Send transaction
   const result = axios({
    method: "POST",
    baseUrl: ({host:'https://coinbase.com/api/v2/', 'apiKey': mykey, 'apiSecret': mysecret}),
    data: {
      tx_hex: serializedTX,
     },
  });
  return result.data.data;
}

router.get('/sendBitcoin/BTC/:reciversAddress +satoshiToSend', (req, recieverAddress, satoshiToSend) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"address", "satoshiToSend", params":["${
    req.params.id
  }"]}`;
   var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`, 
    baseurl: `https://coinbase.com/api/v2/transactions/sendBitcoin/?'mykey/BTC/3CZRf5UwNi1cW7qR27NRpFaXdpnu5YNDQG`,    
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
}); 

module.exports = {
  getMiningInfo,
  getBestBlockHash,
  getBlockHash,
  getBlock,
  getTransaction,
  getBlockChainInfo,
  getBlockCount,
  getPeerInfo,
  getMempoolInfo,
  getNetworkInfo,
  help,
  balance:balance,
  send_btc:send_btc,
  buy_price:buy_price,
  sell_price:sell_price,
  sendBitcoin
}

module.exports = router;