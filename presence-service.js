Inmates = new Meteor.Collection("inmates")

if (Meteor.isClient) {
  
  Template.mac.messages = function(){
    return Inmates.find({}, {sort: {ts: -1}} ) 
  }
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
      
  });
}
