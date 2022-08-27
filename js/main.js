const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const hero = document.querySelector('#hero');
const thumbnail = Array.from(document.getElementsByClassName('thumbnail'));


const backgrounds = [
    "../images/bg1.png",
    "../images/bg2.png",
    "../images/bg3.png",
    "../images/bg4.png",
    "../images/bg5.png",
]

let i = 0;

const updateBackground = () => {
    hero.style.backgroundImage = `url(${backgrounds[i]})`;
}

const increaseBackgroundIndex = () => {
    i += 1;
    if (i >= backgrounds.length) i = backgrounds.length - 1;
}

const decreaseBackgroundIndex = () => {
    i -= 1;
    if (i <= 0) i = 0;
}


const updateThumbnail = () => {
    thumbnail.map((item, index) => {
        if(i === index){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    });
}

const updateImage = () => {
    updateThumbnail();
    updateBackground();
}

const setupThumbnailEvents = () => {
    thumbnail.map((item, index) => {
        item.addEventListener('click', () => {
            i = index;
            updateImage();
        });
    })
}

next.addEventListener('click', () => {
    increaseBackgroundIndex();
    updateImage();

});

prev.addEventListener('click', () => {
    decreaseBackgroundIndex();
    updateImage();
});

setupThumbnailEvents();