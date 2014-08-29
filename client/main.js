Meteor.subscribe('inmates')
Meteor.subscribe('visitors')

Meteor.startup(function(){
  Router.map(function(){
    this.route('jail', {
      path: '/',
      data: function(){
        return {
         inmates: Inmates.find({status: 'online'}).fetch()
        }
      }
    })
    this.route('add', {
      path: '/add',
      data: function(){
        var time = moment().subtract('60', 'seconds')
        return {
          visitors: Visitors.find({ts: {$gt: time._d}},{sort: {ts: -1}}).fetch()
        }
      }
    })
    this.route('sentence', {
      path: '/sentence/:mac',
      data: function(){
        return {
          mac: this.params.mac
        }
      }
    })
    this.route('addphoto', {
      path: '/addphoto/:_id',
      data: function(){
        return {
          id: this.params._id
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


UI.registerHelper('timeformat', function(date){
  return moment(date).format("h:mm a")
})
UI.registerHelper('twist', function(date){
  return Math.floor((Math.random() * 6) - 6)
})