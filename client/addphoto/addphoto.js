Template.upload.events({
  'click .upload' : function(evt,tpl){
    evt.preventDefault()
    
    var _id = tpl.find('#id').value
    var photo = tpl.find('#file').files[0].name
    console.log(photo)

    // var reader = new FileReader()
    // reader.onload = function(evt) {
    //   Inmate.update(_id, {$set: {mugshots: {face: evt.target.result}} })
    // }
    // reader.readAsDataURL(photo)
  }
})