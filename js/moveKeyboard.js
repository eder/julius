'use strict';
define(['jQuery', 'hotkeys'], function($, hotkeys) {
    var vertical = 0, horizontal = 0,
        container = function () {
            return $('#container');
        };

    return {
        up : function () {
            $(document).bind('keydown', 'Shift+up', function () {
                vertical += -1;
                container().css({'top' : vertical });
            });
            
        },
        
        right : function (){
            $(document).bind('keydown', 'Shift+right', function () {
                horizontal += 1 * 10 ;
                container().css({'left': horizontal});
            });

        },
        
        down : function () {
            $(document).bind('keydown', 'Shift+down', function () {
                vertical += 1;
                container().css({'top': vertical});
            });
        },
        left : function () {
            $(document).bind('keydown', 'Shift+left', function () {
                horizontal -= 1;
                container().css({'left': horizontal});
            });
        
        },
            
        init : function () {
            this.up();
            this.right();
            this.down();
            this.left();
        }
    }
});
