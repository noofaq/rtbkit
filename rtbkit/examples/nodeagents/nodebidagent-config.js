/** nodebidagent-config.js
    Jay Pozo, 19 Sep 2013
    Copyright (c) 2013 Datacratic.  All rights reserved.

    Configuration of our node bidding agent.
*/

exports.config = {
  "account": ["hello","world"],
  "bidProbability": 1.0,
  "creatives": [ 
    {
      "format":{"width":0,"height":0},
      "id":3,
      "name":"AnyBox",
      "providerConfig": {
    	  "mopub" : {
              "adid":"123456",
              "crid":"banner",
              "adomain": ["rtbkit.org"],
              "nurl": "http://example.com/mopub/win/${AUCTION_PRICE}",
              "iurl": "http://example.com/w.jpg",
              "attr":"attr",
              "type":"type",
              "cat":"cat",
              "adm": "<span>${AUCTION_PRICE}</span>"
    	  }
      }
    }
  ],
  "providerConfig":{
	"mopub": {
		"seat" : "123456",
		"iurl" : "http://www.gnu.org"
	}
  },
  "augmentations" : {},
//  "augmentations":{
//    "frequency-cap-ex":{
//      "required":true,
//      "config":42,
//      "filters":{"include":["pass-frequency-cap-ex"]}    
//    }  
//  },
  "maxInFlight": 50
} 
