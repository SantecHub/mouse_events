
      
  document.getElementById("down").onmousedown = function() {mouseOut()};
      document.getElementById("down").onmousedown = function() {mouseOver()};
      
      function onmousedown() {
        document.getElementById("down").innerHTML = "Mousedown";
      }
        function mouseOver() {
        document.getElementById("down").innerHTML = "Realse me";
      }



      document.getElementById("over").onmouseover = function() {mouseOver()};
      document.getElementById("over").onmouseout = function() {mouseOut()};
      
      function mouseOver() {
        document.getElementById("over").innerHTML = "Mouse out";
      }
       function mouseOut() {
        document.getElementById("over").innerHTML = "Mouse Over Me";
      }
