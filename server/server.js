Meteor.methods({
  macmessage: macmessage
})

function macmessage(mac,ts,status){
  console.log(mac,ts,status)
  Inmates.insert({'mac': mac,'ts':ts,'status':status})
}