Visitors = new Meteor.Collection('visitors')

Visitors.manager = function(mac,ts,status){
  // Do we know this mac?
  var inmate = Inmates.findOne({mac: mac})  
  if (!inmate) {  // nope - update latest message for this mac
    var visitor = {'mac': mac, 'ts':ts}
    if (status === 'offline' || status === 'online') visitor.status = status
    Visitors.upsert(mac, {$set: visitor})
  } else {  // Yes! we do, let's update them...
    var query = {ts:ts}
    if (status === 'offline' || status === 'online') query.status = status
    Inmates.update(inmate._id, {$set: query})
  }
}