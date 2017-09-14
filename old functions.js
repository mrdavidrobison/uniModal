jQuery(function($) {
  window.modalOpen = false;
  $(".team_bio").click(function() {
    if (!window.modalOpen) {
      $(".team_bio_modal").hide();
      $(".team_bio_modal", this).show();
      $("body").addClass("modal-open");
      window.modalOpen = true;
    }
  });
  $(".team_bio_modal_close").click(function() {
    if (window.modalOpen) {
      setTimeout(function() {
        $(".team_bio_modal").hide();
        window.modalOpen = false;
        $("body").removeClass("modal-open");
      }, 100);
    }
  });

  $(document).mouseup(function(e) {
    var container = $(".team_bio_modal");
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
$('.team_bio_modal_scroll').on( 'mousewheel DOMMouseScroll', function (e) {
  var e0 = e.originalEvent;
  var delta = e0.wheelDelta || -e0.detail;
  this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
  e.preventDefault();
});

});
