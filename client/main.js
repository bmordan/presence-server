Meteor.subscribe('inmates')

Meteor.startup(function(){
  Router.map(function(){
    this.route('injail', {
      path: '/',
      data: function(){
        return {
          inmates: Inmates.find({status:'online'}, {sort:{ts: -1}} ).fetch()
        }
      }
    })
  })//end of Router.map
  
  // Add route to body
  var routes = Router.routes.map(function(r){return r.name}).join(' ')
  Deps.autorun(function(){
    var $body = $('body')
    $body.removeClass(routes)
    var currentRoute = Router.current()
    if (currentRoute && currentRoute.route && currentRoute.route.name){
      $body.addClass(currentRoute.route.name)
    }
  })
})