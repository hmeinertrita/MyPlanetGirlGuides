var Tweet = require('../models/mongodb/Tweet');

var io = require('socket.io')

module.exports = function(stream){

  // When tweets get sent our way ...
  stream.on('data', function(data) {
    // console.log('Tweet data', data);

    if (data['user'] !== undefined) {

      // Construct a new tweet object
      var tweet = {
        twid: data['id_str'],
        active: false,
        author: data['user']['name'],
        avatar: data['user']['profile_image_url'],
        body: data['text'],
        date: data['created_at'],
        screenname: data['user']['screen_name']
      };

      // Create a new model instance with our object
      var tweetEntry = new Tweet(tweet);
      // console.log('TWEET', tweetEntry)

      // Save 'er to the database
      tweetEntry.save(function(err) {
        if (!err) {
          // If everything is cool, socket.io emits the tweet.
          // io.emit('tweet', tweet);
        }
      });

    }

  });

};
