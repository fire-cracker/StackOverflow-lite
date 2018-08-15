function getwords() {
    text = words.value;
    document.getElementById("para").innerHTML += '<p>'+text
    document.getElementById("words").value = "enter"
  }

  function getcomment() {
   var drop=document.getElementById("post").value;
    var comments=document.getElementById("comments");
    comments.innerHTML=drop;
  }

  function toggleA() {
    // get the clock
    var postanswer= document.getElementById('post-answer');

    // get the current value of the clock's display property
    var displaySetting = postanswer.style.display;

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      postanswer.style.display = 'none';
    }
    else {
      // clock is hidden. show it
      postanswer.style.display = 'block';
    }
  }

