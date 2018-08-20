function checkpass() {
var password = document.getElementById('passwordsignup').value;
var confirmpassword = document.getElementById('confirmpassword').value;
    if (password === confirmpassword) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
    document.getElementById('signup').disabled =false;
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
    document.getElementById('signup').disabled=true;
  }
}


var form = document.getElementById("test");
var obj = {};
(function() {
	function toJSONString(form) {
		var elements = form.querySelectorAll( "input,div,textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[name] = value;
			}
		}

		console.log(JSON.stringify(obj));
	}

	document.addEventListener( "DOMContentLoaded", function() {
		form.addEventListener( "submit", function(e) {
			e.preventDefault();
			toJSONString(this);
			

		}, false);

	});

})();