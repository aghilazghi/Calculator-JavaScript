var calculator = function() {
    var keyContents = ["&radic;", "x&sup2;", "&percnt;", "CLR", "7", "8", "9", "&divide;", "4", "5", "6", "&times;", "1" ,"2" , "3","&minus;", "&#8729;", "0", "&equals;", "&plus;"];
    var keys = document.querySelectorAll(".key");
    var zeroToNine = /\[0-9]/g;

    var setupKeys = function() {
        for(var i = 0; i < keys.length; i++){
            keys[i].innerHTML = keyContents[i];
        }
    }

    
    

    var setupKeyContents = function() {
        for(var i = 0; i < keys.length; i++){

        } 
    }

    var init = function() {
        setupKeys();
    }

    return {
        init: init
    }

}();

calculator.init();