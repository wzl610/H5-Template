var oIndex = {
	register:function(){
		$('.register').on('click',function(){
			var username = $('#username').val(),
				password = $('#password').val();
				$.ajax({
                    type: 'POST',
                    url: '/user',
                    data:{
                    	username : username,
                    	password : password
                    },
                    success: function (result) {
                        if (result.code == 0) {
                            
                        } else {
                            alert(result.message);
                        }
                    }
                });
		})
	},
	init:function(){
		oIndex.register();
	}
}

$(function(){
	oIndex.init();
})