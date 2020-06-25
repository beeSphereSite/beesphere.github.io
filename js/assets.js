	$(document).ready(function() {  
			$('.kwicks.kwicks-horizontal').kwicks({
			maxSize : '86%',
			spacing: '1%',
			behavior: 'menu',
			selectOnClick: true
		}); 
  if (location.hash != 0 ){
     $(".kwicks li").each(function(){
		$(this).removeClass("kwicks-selected");
		 
	 });
	 $(location.hash).kwicks('expand');
	 $(location.hash).kwicks('select');
	 
	 
  }
  else{
	$("#ods").kwicks('select');  
  }
  
$('.oassets a').click(function(e) {
                    e.preventDefault();
                    var index = $(this).data('target');
                    $('.kwicks.kwicks-horizontal').kwicks('expand', index);
					$('.kwicks.kwicks-horizontal').kwicks('select', index);
                });
  
  
});


