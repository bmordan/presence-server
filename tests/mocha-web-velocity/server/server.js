if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    
    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(){
        chai.assert(Meteor.release);
      })
    })
    
    describe('DDP interactions with Visitors.manager', function(){
      it('Visitors.manager should gracfully return if called with no params', function(){
        var count = Visitors.find().count()
        Visitors.manager()
        chai.expect( count ).to.equal( count )
      })
      it('syslog should call Visitors.manager function', function(){
        var count = Visitors.find().count()
        var mac = 'te:st:ma:cc:ad'
        var ts = 'Tue Aug 26 2014 12:43:58 GMT+0100 (BST)'
        var status = 'online'
        Meteor.call('syslog',mac,ts,status)
        chai.expect( Visitors.find().count() ).to.equal( count+1 )
        Visitors.remove(mac)
      })
      it('Visitors.manager should return the upserted mac address', function(){
        var count = Visitors.find().count()
        var mac = 'te:st:ma:cc:ad'
        var ts = 'Tue Aug 26 2014 12:43:58 GMT+0100 (BST)'
        var status = 'online'
        var result = Visitors.manager(mac,ts,status)
        chai.expect( result ).to.equal( mac )
        Visitors.remove(mac)
      })      
    })
    
  })
}
