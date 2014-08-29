Visitors = new Meteor.Collection('visitors')

Visitors.manager = function(mac,ts,status){
  Visitors.upsert(mac,{'_id':mac,'mac': mac,'ts':ts,'status':status})

  var inmate = Inmates.findOne({mac: mac})
  if(inmate.length === 1) {
    var query = {ts:ts}
    if(status) query.status = status
    Inmates.update(inmate._id, query)
  }
}