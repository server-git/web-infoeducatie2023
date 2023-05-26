document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);
  
    document.addEventListener("mousemove", function(e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  
    document.addEventListener("mousedown", function() {
      cursor.classList.add("active");
    });
  
    document.addEventListener("mouseup", function() {
      cursor.classList.remove("active");
    });
  });
  