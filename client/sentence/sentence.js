Template.sentence.events({
  'click input.add' : function(evt, tpl){
    var mac = tpl.find('.mac').value

    evt.preventDefault()
    var inmate = {
      mac: mac,
      name: tpl.find('.name').value,
      mugshots: {face: 'img/face.svg', profile: 'img/profile.svg'},
      ts: new Date(),
      status: 'online',
      twitter: null
    }
    var check = Inmates.find({mac: mac}).fetch()
    if(check.length === 0) Inmates.insert(inmate)
    Visitors.remove(mac)
    Router.go('jail')
  }
})