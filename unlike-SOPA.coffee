window.fbAsyncInit = ->
    FB.init
      appId      : '164440513657532'
      status     : true
      cookie     : true
      xfbml      : true

###
    FB.getLoginStatus (response)->
        if response.status == 'connected'
            console.log 'connected'
            FB.api '/me/likes', (response)->
              console.log response 
        else
          console.log 'no'
###

get_fb_page_url_from_id = (id) ->
  FB.api "/#{id}", (response)->
    $("##{id} td:eq(1)").html("<a href=#{response.link}>#{response.link}</a>")

window.importLikes = ()->
  FB.api '/me/likes', (likes)->

    
    $('#likes table').fadeIn()
    for like in likes.data
      $('#likes table').append("<tr id='#{like.id}'><td>#{like.name}</td><td></td></tr>")
      get_fb_page_url_from_id(like.id)
  
