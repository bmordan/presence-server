Template.sentence.events({
  'click' : function(evt, tpl){
    evt.preventDefault()

    var inmate = {
      mac: tpl.find('#mac').value,
      name: tpl.find('#name').value
    }
    
    Inmates.insert({
      _id: tpl.find('#mac').value,
      mac: tpl.find('#mac').value,
      name: tpl.find('#name').value,
      mugshots: {face: , profile: },
      twitter: null 
    })
    
    Route.go('/')
  }
})