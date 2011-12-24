
  window.fbAsyncInit = function() {
    return FB.init({
      appId: '164440513657532',
      status: true,
      cookie: true,
      xfbml: true
    });
  };

  FB.api('search?q=loreal&type=page', {
    limit: 4
  }, function(response) {
    return console.log(response);
  });

  $(function() {
    return $('#search').click(function() {
      var company, _i, _len, _ref, _results;
      _ref = $('#data').val().split('\n');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        company = _ref[_i];
        _results.push(FB.api("search?q=" + company + "&type=page", {
          limit: 4
        }, function(response) {
          var result, _j, _len2, _ref2, _results2;
          _ref2 = response.data;
          _results2 = [];
          for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
            result = _ref2[_j];
            _results2.push(FB.api(result.id, function(response) {
              return $('#result-template').tmpl(response).hide().appendTo('#results').slideDown();
            }));
          }
          return _results2;
        }));
      }
      return _results;
    });
  });
