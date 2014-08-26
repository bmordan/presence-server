Inmates = new Meteor.Collection('inmates')

Inmates.sentenced = function(mac,name){
  if(!mac || !name) throw new Error
}
