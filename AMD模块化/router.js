define(['backbone'],function(){

    var Router = Backbone.Router.extend({
        routes: {
            "help":"help",
            "search/:query/:name":"search",
            "addData":"addData"
        },
        help: function() {
           alert('help');
        },
        search: function(query,name) {
           alert("search id = " + query + ",name = " + name);
        },
        addData:function () {
            alert("addData");
        }
    });

    var router = new Router();

    return router;
})
