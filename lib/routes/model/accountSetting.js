
module.exports = function(app){
    
        var route = require('./_gen/accountSetting.gen')(app);
    

    /**
     * Custom Code Goes here
     */
    route.init();

}