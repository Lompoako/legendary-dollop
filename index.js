var base_url = 'https://coinbase.com/api/v2/';
var baseUrl = 'https://coinbase.com/api/v2/';
const mykey = process.env.apiKey;
const mysecret = process.env.apiSecret;

var Account       = require('./lib/model/Account.js'),
    Address       = require('./lib/model/Address.js'),
    Buy           = require('./lib/model/Buy.js'),
    Checkout      = require('./lib/model/Checkout.js'),
    Client        = require('./lib/Client.js'),
    Deposit       = require('./lib/model/Deposit.js'),
    Merchant      = require('./lib/model/Merchant.js'),
    Notification  = require('./lib/model/Notification.js'),
    Order         = require('./lib/model/Order.js'),
    PaymentMethod = require('./lib/model/PaymentMethod.js'),
    Sell          = require('./lib/model/Sell.js'),
    Transaction   = require('./lib/model/Transaction.js'),
    User          = require('./lib/model/User.js'),
    Withdrawal    = require('./lib/model/Withdrawal.js');

var model = {
  'Account'       : Account,
  'Address'       : Address,
  'Buy'           : Buy,
  'Checkout'      : Checkout,
  'Deposit'       : Deposit,
  'Merchant'      : Merchant,
  'Notification'  : Notification,
  'Order'         : Order,
  'PaymentMethod' : PaymentMethod,
  'Sell'          : Sell,
  'Transaction'   : Transaction,
  'User'          : User,
  'Withdrawal'    : Withdrawal
};

module.exports = {
  'Client' : Client,
  'model'  : model
};
module.exports = require('./lib');
const express = require('express');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const rpcMethods = require('./routes/api');
var request = require('request');
var insight = express();
var bodyparser = require('body-parser');
var bitcore = require('bitcore-lib');
var insight = require('bitcore-explorers').Insight;
var insight = new insight('mainnet');
var address = '3CZRf5UwNi1cW7qR27NRpFaXdpnu5YNDQG';
var addres2 = '38jWWKzyib4s8cQVr4Rv65GyczVVvsP5hp'
var privateKeyWIF = 'L2mP4Sudo3F8VK5n5hy1JS5xktySiDC3cnAVGcUqMeN4h8kvMWaL';
var explo = require("bitcore-explorers");
var shell = {};
var insight = new explo.Insight();
require=('./bitcoin-qt.exe')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", rpcMethods);
const port = process.env.PORT || 22021;

app.use(bodyparser.urlencoded({
    extended: true
  }));
  
  app.use(bodyparser.json());  
  app.set("view engine", "ejs");  
  
  function brainwallet(uinput, callback){
    var input = new Buffer.from(uinput);
    var hash = bitcore.crypto.Hash.sha256(input);
    var bn = bitcore.crypto.BN.fromBuffer(hash);
    var pk = new bitcore.PrivateKey(bn).toWIF();
    var addres = new bitcore.PrivateKey(bn).toAddress(); 
    callback(pk, addres);
  };
  

//   function getPrice(x){
//     request({
//         url: "https://www.coinbase.com/price/bitcoin/stats?format=json",
//         json: true 
//     }, function(err, res, body){
//          var price = body.market_price_usd;
//          var blocks = body.n_blocks_total;
//         x(price, blocks);
//     });    
//   };
// function hello(){
//     console.log("This value is the Current BTC Exchange Rate price to USD(1) and current blocks(2) of bitcoins in the blockchain.com!")
// };
// getPrice(function(price, blocks){
//     console.log(price + "=(1) Current price value in USD");
//     console.log(blocks + "=(2) Current blocks available");
//     hello();
// });
  
// app.get("/hello()", function(req, res){
//   res.hello();
// });

  app.get("/", function(req, res){
    res.render("index");
  });
  
  app.post("/wallet", function(req, res){
    var brainsrc = req.body.brainsrc;
    console.log(brainsrc);
    brainwallet(brainsrc, function(priv, addr){
      res.send("The Brain wallet of: " + brainsrc + "<br>Addy; " 
    + addr + "<br>Private Key: " + priv);
    });
  });

  var req = {
    baseUrl: ({host:'https://coinbase.com/api/v2/', 'apiKey': mykey, 'apiSecret': mysecret}),
    method: 'GET',
    path: '/v2/exchange-rates?currency=USD',
    body: ''
};

// Get Info about an address
insight.address(address, (error, result) => { shell.address = result });
insight: express(address, (error, result) => { shell.utxos = result });

app.post("/insight", function(address, utxos){
  var result = result.body.utxos;
  console.log(adress);
  console.log(utxos);

  var tx = bitcore.Transaction();
  tx.from(utxos);
  tx.to(addres2, 10000); // .005BTC
  tx.change(addres);
  tx.fee(5000);
  tx.sign(privateKey);
  console.log('transaction:');
  console.log(tx.toObject());
  tx.serialize();
  console.log('serialized output:');
  console.log(tx.serialize());

  var scriptIn = bitcore.Script(tx.toObject().inputs[0].script);
  console.log('input script string: ');
  console.log(scriptIn.toString());
  var scriptOut = bitcore.Script(tx.toObject().outputs[0].script);
  console.log('output script string: ');
  console.log(scriptOut.toString());
  console.log(brainsrc);
  brainwallet(brainsrc, function(priv, addr){
    res.send("The Brain wallet of: " + brainsrc + "<br>Addy; " 
  + addr + "<br>Private Key: " + priv);

  console.log(utxos);

  //tx.addData()
  insight.broadcast(tx, function(err,returnedTxId) {
  //Mark the Transaction as broadcasted
  console.log('sucessful broadcast:' + returnedTxId);
   });
});
});

server = app.listen(port, () => console.log(`Server running on port ${port}`));
