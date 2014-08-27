Template.upload.events({
  'click .upload' : function(evt,tpl){
    evt.preventDefault()
    var id = tpl.find('#id').value
    console.log(id)
  }
})