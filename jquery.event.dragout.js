/*
 * jquery.event.dragout - v1.0
 *
 * Author: Dan Cork
 * Email: [Firstname].[Lastname]@kickinteractive.net
 * Copyright (c) 2012 Kick Interactive
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * Project home: http://github.com/dancork/jquery.event.dragout
 * 
 */
;(function($){

var $event = $.event, 
$special = $event.special,

dragout = $special.dragout = {
	
	current_elem: false,
	
	setup: function( data, namespaces, eventHandle ) {
		$('body').on('dragover.dragout',dragout.update_elem)
	},
	
	teardown: function( namespaces ) {
		$('body').off('dragover.dragout')
	},
	
	update_elem: function(event){
		if( event.target == dragout.current_elem ) return
		if( dragout.current_elem ) {
			$(dragout.current_elem).parents().andSelf().each(function(){
				if($(this).children().index(event.target)==-1) $(this).triggerHandler('dragout')
			})
		}
		dragout.current_elem = event.target
		event.stopPropagation()
	}
	
}

})(window.jQuery);