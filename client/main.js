Meteor.subscribe('inmates')
Meteor.subscribe('visitors')

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
    this.route('add', {
      path: '/add/:mac',
      data: function(){
        var mac = this.params.mac
        return {
          mac: mac
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