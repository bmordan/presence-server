Template.sentence.events({
  'click input.add' : function(evt, tpl){
    evt.preventDefault()
    var inmate = {
      mac: tpl.find('.mac').value,
      name: tpl.find('.name').value,
      mugshots: {face: 'img/face.svg', profile: 'img/profile.svg'},
      twitter: null
    }
    var check = Inmates.find({mac: tpl.find('.mac').value}).fetch()
    if(check.length === 0) Inmates.insert(inmate)
    Router.go('injail')
  }
})
Template.sentence.events({
  'blur' : function(evt, tpl){
    evt.preventDefault()
    var name = tpl.find('.name').value
    if(name === '') tpl.find('.name').placeholder = 'ADD YOUR NAME!'
  }
})