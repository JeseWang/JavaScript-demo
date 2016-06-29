requirejs.config({
    baseUrl:'lib',
    paths:{
       'tc1':'jquery-3.0.0',
        'un': 'underscore',
        'backbone':'backbone'
    },
   shim:{
        'tc':{
            export:'abcd'
        }
    }
});

require(
    ['backbone','tc1', 'app/productsService.js','./router.js','tc'],
    function (Backbone,$,ps) {
        //abcd();
       Backbone.history.start();
        //ps.getData();
        //ps.addData("name=ibm&price=12345&description=ibm服务器");
        //ps.delData("5ac09cc5d7b51878");
        ps.updateData("b51c473789c46870","name=ibm&price=12345&description=ibm服务器");
})