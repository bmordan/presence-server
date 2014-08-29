Visitors = new Meteor.Collection('visitors')

Visitors.manager = function(mac,ts,status){
  // update latest message for this mac
  Visitors.upsert(mac,{'_id':mac,'mac': mac,'ts':ts,'status':status})
  
  // Do we know this mac?
  var inmate = Inmates.findOne({mac: mac})  
  if (!inmate) return

  // Yes! we do, let's updat them...
  var query = {ts:ts}
  if(status) query.status = status
  Inmates.update(inmate._id, {$set: query})
}