Visitors = new Meteor.Collection('visitors')

Visitors.manager = function(mac,ts,status){
  Visitors.upsert(mac,{'_id':mac,'mac': mac,'ts':ts,'status':status})
  var inmate = Inmates.findOne({mac: mac})
  if(inmate.length === 1) {
    if(status === 'undefined') status = 'Doing Time'
    Inmates.update(inmate._id,{ts:ts, status: status})
  }
}