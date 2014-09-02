Template.upload.events({
  'change #face, change #profile' : function(evt,tpl){
    evt.preventDefault()
    var type = evt.target.id
    photoReader(type, evt)
  },
  'submit' : function(evt, tpl){
    evt.preventDefault()
    var query = {}
    if (Session.get('previewface')) query['mugshots.face'] = Session.get('previewface')
    if (Session.get('previewprofile')) query['mugshots.profile'] = Session.get('previewprofile')
    Inmates.update(this.id, { $set: query })
    Router.go('jail')
  }
})

Template.upload.helpers({
  'previewface' : function () {
    return Session.get('previewface')
  },
  'previewprofile' : function () {
    return Session.get('previewprofile')
  },
  'inmate': function () {
    return Inmates.findOne(this.id)
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