var menuf = document.getElementById('menufixed');
var altura = menuf.offsetTop;
window.addEventListener('scroll', function(){
    if(window.pageYOffset > altura){
        menuf.classList.add('fixed');
    } else{
        menuf.classList.remove('fixed');
    }
});