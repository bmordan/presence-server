Meteor.publish('inmates', function(){
  return Inmates.find({})
})

Meteor.startup(function () {
  Inmates.allow({
    insert: function (userId, doc){
      if(!userId) return false
      if(!doc) return false
      return true
    },
    update: function (userId, doc){
      if(!userId) return false
      return true
    }
    // remove: function (userId, _id){
    //   if(!userId) return false
    // }
  })
})
  
Meteor.methods({
  macmessage: macmessage
})

function macmessage(mac,ts,status){
  //if(!mac || !ts || !status) return
  Inmates.insert({'mac': mac,'ts':ts,'status':status})
  return 'finished'
}