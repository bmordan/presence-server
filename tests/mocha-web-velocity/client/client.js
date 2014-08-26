if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
      
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
