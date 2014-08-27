Template.injail.events({
  'click' : function (evt, tpl) {
    evt.preventDefault()
    Router.go('add')
  }
})