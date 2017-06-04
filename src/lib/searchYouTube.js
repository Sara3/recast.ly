var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    timeout: 5000,
    data: {
      key: YOUTUBE_API_KEY,
      q: options,
      part: 'snippet',
      maxResults: 5},
      success: function(data) {
        callback(data.items);
        console.log( 'AOK:', this);
      },
      error: function(data) {
        console.error( 'NOT ok');
        console.error(data);
      }
    });
};

window.searchYouTube = searchYouTube;
