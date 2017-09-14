var imported = document.createElement('script');
imported.src = 'http://brainstorm.solutions/bas/wp-content/themes/betheme-child/modalDetails.js';
document.head.appendChild(imported);

// jQuery

jQuery(function($) {
  
  $.getScript('http://brainstorm.solutions/bas/wp-content/themes/betheme-child/modalDetails.js', function() {
  });  

  window.modalOpen = false;
  $(".pic-url", ".bio-name").click(function() {
    if (!window.modalOpen) {
      $(".team-bio-modal", this).show();
      $("body").addClass("modal-open");
      window.modalOpen = true;
    }
  });

  $(".bas-close").click(function() {
    if (window.modalOpen) {
      setTimeout(function() {
        $(".team-bio-modal").hide();
        window.modalOpen = false;
        $("body").removeClass("modal-open");
      }, 100);
    }
  });

  $(document).mouseup(function(e) {
    var container = $(".team-bio-modal");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if (window.modalOpen) {
        container.hide();
        setTimeout(function() {
          window.modalOpen = false;
          $("body").removeClass("modal-open");
        }, 100);
      }
    }
  });

  // Prevent <body> from scrolling while mouse is inside modal
  $('.team-bio-modal-scroll').on( 'mousewheel DOMMouseScroll', function (e) {
    var e0 = e.originalEvent;
    var delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    e.preventDefault();
  });

});


// shortcuts
var docId = function(id) {
  return document.getElementById(id);
}

var docClass = function(cl) {
  return document.getElementsByClassName(cl);
}

var teamBioModal = docClass('team-bio-modal');


// array that includes [0]: portal login id, [1-15]: ids of bios, total of sixteen array items
var bioPics = [docId('bas-ceo'), docId('bas-cfo'), docId('bas-pres'), docId('bas-vp-salesops'), docId('bas-vp-sales'), docId('bas-directorbd-mar'), docId('bas-directorbd-ser'), docId('bas-directorbd-wr'), docId('bas-directorbd-mwr'), docId('bas-director-bd'), docId('bas-director-mis'), docId('bas-director-fa'), docId('bas-director-acct'), docId('bas-director-loss'), docId('bas-director-claims')];


// for loop to check if id is clicked that matches array items
for (let i = 0; i < bioPics.length; i++) {
  bioPics[i].onclick = function() {  

    teamBioModal[i].style.display = "block";

    var arrayObject = basTeamMembers[i];

    var picToAdd = docClass("pic-url");
    picToAdd[i].setAttribute('src', arrayObject["picUrl"]);

    var nameToAdd = docClass("bio-name");
    nameToAdd[i].innerHTML = arrayObject["firstName"] + " " + arrayObject["lastName"];
    
    var companyTitleToAdd = docClass("company-title");
    companyTitleToAdd[i].innerHTML = arrayObject["companyTitle"];

    var linkedInUrlToAdd = docClass("linkedin-url");
    linkedInUrlToAdd[i].setAttribute('href', arrayObject["linkedInUrl"]);

    var bioContentP1ToAdd = docClass("bio-content-p1");
    bioContentP1ToAdd[i].innerHTML = arrayObject["bioContentP1"];
 
    var bioContentP2ToAdd = docClass("bio-content-p2");
    bioContentP2ToAdd[i].innerHTML = arrayObject["bioContentP2"];
    
    var regionMapToAdd = docClass("region-map");
    regionMapToAdd[i].setAttribute('src', arrayObject["regionMap"]);

    var quoteToAdd = docClass("quote");
    quoteToAdd[i].innerHTML = arrayObject["quote"];

    var bioContentP3ToAdd = docClass("bio-content-p3");
    bioContentP3ToAdd[i].innerHTML = arrayObject["bioContentP3"];    
  };
}