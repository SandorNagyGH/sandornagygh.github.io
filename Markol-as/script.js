
      var audio=document.getElementById("audio");
      var playPauseBTN=document.getElementById("playPauseBTN");
      var count = 0;
      function playPause(){
        if(count==0){
          count=1;
          audio.play();
          playPauseBTN.innerHTML="&#9208";
        } else {
          count=0;
          audio.pause();
          playPauseBTN.innerHTML="&#9205";
        }
      }
      playPauseBTN.addEventListener("click", playPause);
      const currentDateParagraph = document.getElementById("current-date");
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      currentDateParagraph.textContent = `${year}-${month}-${day}`;
