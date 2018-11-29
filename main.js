function sound(){
    var sound = document.getElementById("winAudio");
    sound.play();
}
function scratch1(){
    var replace = document.getElementById("s1");
    replace.innerHTML = "<img src='scratching.gif'>"
    setTimeout(() => replace.style.opacity = "0",1000);
    setTimeout(() => sound(),1200);
}

function scratch2(){
    var replace = document.getElementById("s2");
    replace.innerHTML = "<img src='scratching.gif'>"
    setTimeout(() => replace.style.opacity = "0",1000);
    setTimeout(() => sound(),1200);
}

function scratch3(){
    var replace = document.getElementById("s3");
    replace.innerHTML = "<img src='scratching.gif'>"
    setTimeout(() => replace.style.opacity = "0",1000);
    setTimeout(() => sound(),1200);
}

function scratch4(){
    var replace = document.getElementById("s4");
    replace.innerHTML = "<img src='scratching.gif'>"
    setTimeout(() => replace.style.opacity = "0",1000);
    setTimeout(() => sound(),1200);
}

function scratch5(){
    var replace = document.getElementById("s5");
    replace.innerHTML = "<img src='scratching.gif'>"
    setTimeout(() => replace.style.opacity = "0",1000);
    setTimeout(() => sound(),1200);
}

function scratch6(){
    var replace = document.getElementById("s6");
    replace.innerHTML = "<img src='scratching.gif'>"
    setTimeout(() => replace.style.opacity = "0",1000, sound,4000);
    setTimeout(() => sound(),1200);
}