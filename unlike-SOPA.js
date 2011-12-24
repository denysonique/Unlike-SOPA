(function() {
  var get_fb_page_url_from_id;

  console.log('hi');

  window.fbAsyncInit = function() {
    return FB.init({
      appId: '164440513657532',
      status: true,
      cookie: true,
      xfbml: true
    });
  };

  /*
      FB.getLoginStatus (response)->
          if response.status == 'connected'
              console.log 'connected'
              FB.api '/me/likes', (response)->
                console.log response 
          else
            console.log 'no'
  */

  get_fb_page_url_from_id = function(id) {
    return FB.api("/" + id, function(response) {
      return $("#" + id + " td:eq(1)").html("<a href=" + response.link + ">" + response.link + "</a>");
    });
  };

  window.importLikes = function() {
    console.log('likes');
    return FB.api('/me/likes', function(likes) {
      var like, _i, _len, _ref, _results;
      _ref = likes.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        like = _ref[_i];
        $('#likes table').append("<tr id='" + like.id + "'><td>" + like.name + "</td><td></td></tr>");
        _results.push(get_fb_page_url_from_id(like.id));
      }
      return _results;
    });
  };

}).call(this);
