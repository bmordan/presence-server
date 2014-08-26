Meteor.subscribe('inmates')

Meteor.startup(function(){
  Router.map(function(){
    this.route('injail', {
      path: '/',
      data: function(){
        return {
          inmates: Inmates.find({}).fetch()
        }
      }
    })
  })//end of Router.map
})