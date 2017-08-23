var modal = document.getElementById('modal-wrapper');
var portalBtn = document.getElementById('portalBtn');
var closeBtn = document.getElementById('close');

portalBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}