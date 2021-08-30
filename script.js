var listnumber = 1;
function playNext() {
    // list[listnumber].index
    if(listnumber!=listamount){
        console.log('yes', listnumber)
    } else {
        listnumber=0;
    }
    document.getElementById("audio").setAttribute('src', `${list[listnumber].audio}`);
    document.getElementById("songName").innerHTML = `${list[listnumber].songName}`;
    document.getElementById("songImg").setAttribute('src', `${list[listnumber].image}`);
    // document.getElementById("bodyImg").style.background = `url('${list[listnumber].image}') center/cover`;
    document.getElementById("bodyImg").style.background = `linear-gradient(${list[listnumber].color})`;
    listnumber++
}

function playPrevious() {
    // list[listnumber].index
    listnumber--
    if(listnumber<0){
        listnumber=listamount-1
    }
    document.getElementById("audio").setAttribute('src', `${list[listnumber].audio}`);
    document.getElementById("songName").innerHTML = `${list[listnumber].songName}`;
    document.getElementById("songImg").setAttribute('src', `${list[listnumber].image}`);
    // document.getElementById("bodyImg").style.background = `url('${list[listnumber].image}') center/cover`;
    document.getElementById("bodyImg").style.background = `linear-gradient(${list[listnumber].color})`;
}

function animateOut() {
    var elem = document.getElementById("welcome");
    elem.style.animation= 'animateOut 1.8s ease-in-out'
    setTimeout(() => {
        elem.remove();
        document.getElementById("audio").play()
    }, 1780);
}

// document.getElementById("bodyImg").style.background = `url('images/Mission-impossible.png') center/cover`;
document.getElementById("bodyImg").style.background = `linear-gradient(#3e3e41, #6d746f)`;

setTimeout(() => {
    document.getElementById("loading").remove()
}, 2000);

document.getElementById("audio").pause();

console.log(list)