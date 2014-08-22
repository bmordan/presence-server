Meteor.methods({
  macmessage: macmessage
})

function macmessage(mac,ts,status){
  console.log('Inmates.insert')
  console.log('mac:'+mac,'ts:'+ts,'status:'+status)
  Inmates.insert({'mac': mac,'ts':ts,'status':status})
  return 'finished'
}