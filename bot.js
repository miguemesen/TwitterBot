console.log("the bot is running")

var Twit = require('twit')
 
var config = require('./config')

var T = new Twit(config)

// stream doesnt work :(

// var stream = T.stream('statuses/filter', { track: '@MyBot_mm' });

// stream.on('follow', followed)

// function followed(eventMsg){
//     console.log("Follow event!")
// }



function postTweet(text){
    T.post('statuses/update', { status: text })
}

function getTweets(q,count){
    T.get('search/tweets', { q: q, count: count}, function(err, data, response){
        console.log(data)
    }) // q: quote that you're looking for, count: number of tweets you want
}