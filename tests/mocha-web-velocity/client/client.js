if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe('DDP interactions with Visitors.manager', function(){
      it('Visitors.manager should gracfully return if called with no params', function(){
        var count = Visitors.find().count()
        Visitors.manager()
        chai.expect( count ).to.equal( count )
      })
      it('macmessage should call Visitors.manager function', function(){
        var count = Visitors.find().count()
        var mac = 'te:st:ma:cc:ad'
        var ts = 'Tue Aug 26 2014 12:43:58 GMT+0100 (BST)'
        var status = 'online'
        Visitors.manager(mac,ts,status)
        chai.expect( Visitors.find().count() ).to.equal( count+1 )
      })
      it('Visitors.manager should return the upserted mac address', function(){
        var count = Visitors.find().count()
        var mac = 'te:st:ma:cc:ad'
        var ts = 'Tue Aug 26 2014 12:43:58 GMT+0100 (BST)'
        var status = 'online'
        var result = Visitors.manager(mac,ts,status)
        chai.expect( result ).to.equal( mac )
      })      
    })
      
    describe('Inmates.sentenced | a function to add and manage inmates', function(){
      it('should throw an error if called with no name', function(){
        chai.expect( Inmates.sentenced.bind(this, {'name': null}) ).to.throw(Error)
      })
      it('should throw an error if called with no mac address', function(){
        chai.expect( Inmates.sentenced.bind(this, {'mac': null}) ).to.throw(Error)
      })
    })
    
  })
}
