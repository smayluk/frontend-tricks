var body = document.body,
    timer;

document.addEventListener("scroll", function() {
    clearTimeout(timer);
    var disableHoverClass = 'disable-hover';

    if(!body.classList.contains(disableHoverClass)) {
        body.classList.add(disableHoverClass);

        timer = setTimeout(function(){
            body.classList.remove(disableHoverClass);
        }, 500);
    }
}, false);