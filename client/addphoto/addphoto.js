Template.upload.events({
  'change #face, change #profile' : function(evt,tpl){
    evt.preventDefault()
    var type = evt.target.id
    photoReader(type, evt)
  },
  'click .preview' : function(evt, tpl){
    evt.preventDefault()
    var type = evt.target.dataset.for
    console.log(evt)
    $('#'+type).trigger('click')
  },
  'submit' : function(evt, tpl){
    evt.preventDefault()
    Inmates.update(this.id,
      {$set: {mugshots: {
        face: Session.get('previewface'),
        profile: Session.get('previewprofile')
      }
    }})
    Router.go('jail')
  }
  
})

Template.upload.helpers({
  'previewface' : function(){
    return Session.get('previewface')
  },
  'previewprofile' : function(){
    return Session.get('previewprofile')
  }
})

function photoReader(type, evt){
  var files = evt.target.files
  var file = files[0]
  if(!file.type.match('image.*')) return console.error('wrong file format %s', file.name)
  var reader = new FileReader()
  reader.onload = function(evt){
    Session.set('preview'+type,evt.target.result)
  }
  reader.readAsDataURL(file)
}