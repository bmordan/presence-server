var Meteor = {
  Collection: function ('visitors') {
    Meteor.instantiationCounts['visitors'] = Meteor.instantiationCounts['visitors'] ? Meteor.instantiationCounts['visitors'] + 1 : 1
  },
  instantiationCounts: {}
}