Meteor.publish('inmates', function(){
  if(this.userId) return Inmates.find({})
})
Meteor.publish('visitors', function(){
  if(this.userId) return Visitors.find({})
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
    },
    remove: function (userId, _id){
      if(!userId) return false
    }
  })
  Visitors.allow({
    insert: function (userId, doc){
      if(!userId) return false
      if(!doc) return false
      return true
    },
    update: function (userId, doc){
      if(!userId) return false
      return true
    },
    remove: function (userId, _id){
      if(!userId) return false
    }
  })
})
  
Meteor.methods({
  syslog: syslog
})

function syslog(mac,ts,status){
  Visitors.manager(mac,ts,status)
  return mac 
}
function service(userId){
  var inmates = Inmates.find({}, {fields:{name: 1,status: 1}}).fetch()
  return inmates
}