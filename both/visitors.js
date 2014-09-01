Visitors = new Meteor.Collection('visitors')

Visitors.manager = function(mac,ts,status){
  // update latest message for this mac
  console.log(status)
  var visitor = {'mac': mac, 'ts':ts}
  if (status === 'offline' || status === 'online') visitor.status = status

  //console.log(visitor)
  Visitors.upsert(mac, {$set: visitor})
  
  // Do we know this mac?
  var inmate = Inmates.findOne({mac: mac})  
  if (!inmate) return

  // Yes! we do, let's update them...
  var query = {ts:ts}
  if (status) query.status = status
  Inmates.update(inmate._id, {$set: query})
}