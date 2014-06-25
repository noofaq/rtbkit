/** nodebidagent-config.js
    Jay Pozo, 19 Sep 2013
    Copyright (c) 2013 Datacratic.  All rights reserved.

    Configuration of our node bidding agent.
*/

exports.config = {
  "account": ["hello","world"],
  "bidProbability": 1.0,
  "creatives": [ 
//   {
//      "format":{"width":720, "height":90},
//      "id":0,
//      "name":"LeaderBoard",
//      "tagId":0
//    },
//    {
//      "format":{"width":160,"height":600},
//      "id":1,
//      "name":"LeaderBoard",
//      "tagId":1
//    },
//    {
//      "format":{"width":300,"height":250},
//      "id":2,
//      "name":"BigBox",
//      "tagId":2
//    },
    {
        "format":{"width":0,"height":0},
        "id":3,
        "name":"JOKER",
        "tagId":3,
        "providerConfig": {
            "mopub": {
            	 "adid":12345,
                 "crid":"banner",
                 "adomain": ["www.adomain.com"],
                 "nurl": "http://example.com/mopub/win/0.999",
                 "iurl": "http://example.com/w.jpg",
                 "attr":"12",
                 "type":"4",
                 "cat":"IAB14",
                 "adm": "<img src='http://localhost/creative.png?width=320&height=50&price=${AUCTION_PRICE}'>"            
        	 }
          }
      }
  ],
  "providerConfig": {
    "mopub": {
    	"seat" : "testSeat",
    	"iurl" : "http://localhost/test.jpg"
    }
  },
//  "augmentations":{
//    "frequency-cap-ex":{
//      "required":true,
//      "config":42,
//      "filters":{"include":["pass-frequency-cap-ex"]}    
//    }  
//  },
  "maxInFlight": 50
} 
