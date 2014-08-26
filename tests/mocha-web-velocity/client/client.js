if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe('DDP connection', function(){
      it('macmessage should gracfully return if called with no params', function(){
        var mac
        var ts
        var status
        var fn = Meteor.call('macmessage',mac,ts,status)
        chai.expect(fn).to.equal(undefined)
      })
      
      // it('only ', function(){
      //
      // })
    })
  })
}
