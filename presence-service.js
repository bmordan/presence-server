Inmates = new Meteor.Collection('inmates')

if (Meteor.isClient) {
  
  Meteor.subscribe('inmates')
  
  Template.mac.messages = function(){
    return Inmates.find({}, {sort: {ts: -1}} ) 
  }
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.publish('inmates', function(){
      return Inmates.find({})
    })
  });
}
