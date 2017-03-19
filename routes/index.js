var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index',{
        title:"WorldCities",
        headline:"Singapore: A moving experience at every turn",
    	city:"singapore",
    	imageArray:[1,2]
    });
});

/* GET home page. */
router.get('/:city', function(req, res, next) {
	var cityName=req.params.city;
    var title,heading;
    var imageArray=[1,2,3,4];

    if(cityName==='berlin'){
       title="Berlin";
       heading="Berlin: Where love is in the air";
    }
    else if(cityName==='paris'){
       title="Paris";
       heading="Paris: Good talkers are only found in Paris";
    }
    else if(cityName==='madrid'){
       title="Madrid";
       heading="Madrid: Buzz, Beautiful architecture and Football";
    }
    else if(cityName==='london'){
       title="London";
       heading="London: Sparkling, Still, Food, Gorgeous";
    }
    else if(cityName==='newyork'){
       title="New York";
       heading="New York: Come to New York to become someone new";
       imageArray.push(5);
       imageArray.push(6);
    }
    else if(cityName==='singapore'){
       title="Singapore";
       heading="Singapore: A moving experience at every turn";
       imageArray=[1,2];
    }

    res.render('index',{
        title:title,
        headline:heading,
        city:cityName,
        imageArray:imageArray});
});

module.exports = router;
