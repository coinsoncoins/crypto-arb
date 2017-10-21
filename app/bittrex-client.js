 
var Promise = require("bluebird");
var request = Promise.promisify(require("request"));

processApiData = function(apiData) {
  //console.log(apiData);
  apiData = JSON.parse(apiData)
  console.log(apiData.result[0]["MarketName"])
  return apiData.result[0]["MarketName"];

  // for (let market of data.result) {
  //   if(obj["MarketName"].includes('BTC-')) {
  //     let coinName = obj["MarketName"].replace("BTC-", '');
  //     if (!coin_prices[coinName]) coin_prices[coinName] = {};
  //         coin_prices[coinName].bittrex = obj.Last;
  //     } 
  //   }
  // }
}

class BittrexClient {
  static getSnapshot() {
    let url = "https://bittrex.com/api/v1.1/public/getmarketsummaries";
    request(url).then(function(result) { return processApiData(result.body); })
  }
};

module.exports = BittrexClient;

console.log(BittrexClient.getSnapshot());