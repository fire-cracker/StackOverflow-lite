function checkpass() {
var password = document.getElementById('password1').value;
var confirmpassword = document.getElementById('confirmpassword').value;
    if (password == confirmpassword) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
    document.getElementById('submit').disabled =false;
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
    document.getElementById('submit').disabled=true;
  }
}


  (function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input,textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		console.log(JSON.stringify( obj ));
	}

	document.addEventListener("DOMContentLoaded", function() {
        event.preventDefault();
		var form =document.getElementById("form");
		var output =document.getElementById("output");
		form.addEventListener("submit",function(e) {
			e.preventDefault();
			var json = toJSONString(this);
			output.innerHTML = json;

		}, false);

	});

})();