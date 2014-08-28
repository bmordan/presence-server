Template.inmates.events({
  'click .add' : function (evt, tpl) {
    evt.preventDefault()
    Router.go('add')
  },
  'click .inmate' : function (evt, tpl) {
    evt.preventDefault()
    Router.go('addphoto')
  }
})