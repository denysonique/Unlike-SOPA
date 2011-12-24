window.fbAsyncInit = ->
    FB.init
      appId      : '164440513657532'
      status     : true
      cookie     : true
      xfbml      : true

   FB.api 'search?q=loreal&type=page',limit: 4, (response) ->
    console.log response


$ ->
  $('#search').click ->
    for company in $('#data').val().split('\n')
      FB.api "search?q=#{company}&type=page", limit: 4, (response) ->
        for result in response.data
          #console.log result
          FB.api result.id, (response) ->
            $('#result-template').tmpl(response).hide().appendTo('#results').slideDown()



