

 updateBadge();
document.querySelectorAll(".popup-close").addEventListener('click',updateBadge);



function updateBadge(){
document.getElementById('b1').innerHTML = document.getElementById('pi1').value;
}