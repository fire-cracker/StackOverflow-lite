var title = document.getElementById("question_title");
var body = document.getElementById("question_body");
var tag = document.getElementById("question_tag");
var submit_question = document.getElementById("post_question");
var display_title = document.getElementById("display_title");
var display_body = document.getElementById("display_body");
var display_tag = document.getElementById("display_tag");
var display_date = document.getElementById("display_date");
var post_history = document.getElementById("post_history");
var your_questions = document.getElementById("your_questions");

var title_arr = [];
var body_arr = [];
var tag_arr = [];
var date_arr = [];
var date = Date();
var question_length = 0;
var posts = "";
var questions = "";

submit_question.addEventListener("click", post_question);

function post_question() {
    title_arr[question_length] = title.value;
    body_arr[question_length] = body.value;
    tag_arr[question_length] = tag.value;
    date_arr[question_length] = date;
    questions="<Fieldset> <legend id='display_title'>" + title_arr[question_length] +"</legend> <div id='display_body'>" + body_arr[question_length]+"</div> <div id='display_tag'>"+ "Tags : " + tag_arr[question_length] +"</div> <div id='display_date'>" +"Posted on : " + date; + "</div> </Fieldset>";
    posts += "<div class='fakeimg'>" + title.value + "</div><br>";
    your_questions.innerHTML = questions;
    post_history.innerHTML = posts;
    title.innerHTML = "";
    body.innerHTML = "";
    tag.innerHTML = "";
    question_length++;
}



var form = document.getElementById("test");
var obj = {};
(function() {
	function toJSONString( form ) {
		var elements = form.querySelectorAll( "input,div,textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify(obj);
	}

	document.addEventListener( "DOMContentLoaded", function() {
		form.addEventListener( "submit", function(e) {
			e.preventDefault();
			toJSONString(this);
			

		}, false);

	});

})();