var basTeamMembers = [
  {
    id: 'bas-directorbd-mar',
    picUrl: 'http://brainstorm.solutions/bas/wp-content/uploads/2017/08/Team_Elizabeth-T.jpg',
    firstName: 'Elizabeth',
    lastName: 'Toscano',
    companyTitle: 'Director of Business Development - Mid Atlantic Region',
    linkedInUrl: 'https://www.linkedin.com/in/elizabeth-toscano-6a645732/',
    bioContentP1: 'Elizabeth holds a Bachelor’s Degree in Marketing from Columbia College in Chicago, IL. She started at BAS in 2006 as a Sales and Marketing Representative for small groups. In this role she marketed stop loss and sold a small group product for employer groups of 10-100 employee lives. Soon after she took over the additional responsibility of Wellness Coordinator due to her passion for healthy lifestyles. She was responsible for the design, implementation, and reporting of all activity based and outcome based wellness programs. Her success in this position was proved by positive measurable outcomes.',
    bioContentP2: 'Elizabeth is currently a Sales Executive for mid to large size employer groups. Her territory includes IL, MI, PA, NY, NJ, MD and Washington D.C. Her expertise in a wide array of stop loss products, analytics, network and reference based pricing, regulatory compliance and plan design help her accomplish long term cost reduction strategies with her clients.',
    regionMap: 'http://brainstorm.solutions/bas/wp-content/uploads/2017/08/map-elizabeth.png',
    quote: '“I know I’ve done my job when I can identify a client’s particular needs, and provide the right solution for them. I am dedicated and diligent in applying the latest industry standards along-side our BAS solutions and I strive to provide the best service possible. The most rewarding part of my job is knowing that my clients are satisfied.”',
    bioContentP3: 'In her free time, Elizabeth enjoys spending time with her family. She loves to cook, and she considers herself an expert in Italian cuisine. Whenever Elizabeth has time for a break you can expect she’s traveling and learning about new cultures, new foods, and living life to the fullest! She is also an active member in both SIIA, and SPBA.'
  }
];


// shortcuts
var docId = function(id) {
return document.getElementById(id);
}

var docClass = function(cl) {
return document.getElementsByClassName(cl);
}

var modalWrapper = docId('modal-wrapper');
var teamBioModal = docClass('team-bio-modal');


// array that includes [0]: portal login id, [1-15]: ids of bios, total of sixteen array items
var bioPics = [docId('bas-directorbd-mar')];


// for loop to check if id is clicked that matches array items

bioPics[0].onclick = function() {  

  teamBioModal[0].style.display = "block";

  var arrayObject = basTeamMembers[0];

  var picToAdd = docClass("bio-picture");
  picToAdd[0].setAttribute('src', arrayObject["picUrl"]);

  var nameToAdd = docClass("team-bio-name");
  nameToAdd[0].innerHTML = arrayObject["firstName"] + " " + arrayObject["lastName"];
  
  var companyTitleToAdd = docClass("company-title");
  companyTitleToAdd[0].innerHTML = arrayObject["companyTitle"];

  var linkedInUrlToAdd = docClass("linkedin-url");
  linkedInUrlToAdd[0].setAttribute('href', arrayObject["linkedInUrl"]);

  var bioContentP1ToAdd = docClass("bio-content-p1");
  bioContentP1ToAdd[0].innerHTML = arrayObject["bioContentP1"];

  var bioContentP2ToAdd = docClass("bio-content-p2");
  bioContentP2ToAdd[0].innerHTML = arrayObject["bioContentP2"];
  
  var regionMapToAdd = docClass("region-map");
  regionMapToAdd[0].setAttribute('src', arrayObject["regionMap"]);

  var quoteToAdd = docClass("quote");
  quoteToAdd[0].innerHTML = arrayObject["quote"];

  var bioContentP3ToAdd = docClass("bio-content-p3");
  bioContentP3ToAdd[0].innerHTML = arrayObject["bioContentP3"];    
};

jQuery(function($) {
  window.modalOpen = false;
  $(".team-bio").click(function() {
    if (!window.modalOpen) {
      $(".team-bio-modal").hide();
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
        console.log("mouseUp");
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