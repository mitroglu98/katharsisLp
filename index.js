
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
 
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
captionText.onclick = function() {
    modal.style.display = "none";
  }

  var modal2 = document.getElementById("myModal2");

var img2 = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
 
}

var span2 = document.getElementsByClassName("close")[1];

span2.onclick = function() {
  modal2.style.display = "none";
}
captionText2.onclick = function() {
    modal2.style.display = "none";
  }

  var modal3 = document.getElementById("myModal3");

  var img3 = document.getElementById("myImg3");
  var captionText3 = document.getElementById("caption3");
  img3.onclick = function(){
    modal3.style.display = "block";
   
  }
  
  var span3 = document.getElementsByClassName("close")[2];
  
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  captionText3.onclick = function() {
      modal3.style.display = "none";
    }

    var modal4 = document.getElementById("myModal4");
    var img4 = document.getElementById("myImg4");
    var captionText4 = document.getElementById("caption4");
    img4.onclick = function(){
      modal4.style.display = "block";
     
    }
    var span4 = document.getElementsByClassName("close")[3];
    span4.onclick = function() {
      modal4.style.display = "none";
    }
    captionText4.onclick = function() {
        modal4.style.display = "none";
      }

      var modal5 = document.getElementById("myModal5");

      var img5 = document.getElementById("myImg5");
      var captionText5 = document.getElementById("caption5");
      img5.onclick = function(){
        modal5.style.display = "block";
       
      }
      var span5 = document.getElementsByClassName("close")[4];
      
      span5.onclick = function() {
        modal5.style.display = "none";
      }
      captionText5.onclick = function() {
          modal5.style.display = "none";
        }

  $(function() {
    $('.goto').click(function() {
      var checkBoxes = $('.l1').find('input');
      checkBoxes.prop("checked", !checkBoxes.prop("checked"));
    });
  });

  function topFunction() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;

    const el = document.scrollingElement || document.documentElement
     el.scrollTop = 0;
  }
  

    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
      if (document.documentElement.lang === "en") {
        window.location.href = "index.html";
      } else if (document.documentElement.lang === "mne") {
        window.location.href = "home.html";
      }
    }

    function countryHandler(value) {
      if(`${value}`=="MNE"){
        window.location.assign(`home.html`);
      }else{
        window.location.assign(`index.html`);
      }
      
  }
   