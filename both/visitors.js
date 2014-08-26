Visitors = new Meteor.Collection('visitors')

Visitors.manager = function(mac,ts,status){
  Visitors.upsert(mac,{'_id':mac,'mac': mac,'ts':ts,'status':status})
}