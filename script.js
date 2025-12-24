const projects = [
    { img: "https://i.postimg.cc/yYVkvKPB/Crcl.jpg", name: "CRCL", link: "https://sandornagygh.github.io/crcl/crcl.html", qr:"https://i.postimg.cc/SNyJD4rh/Crcl_QR.jpg" },
    { img: "https://i.postimg.cc/659yYK0W/Wordle.jpg", name: "Wordle Game", link: "./WordleByAlex/WordleByAlex.html", qr:"https://i.postimg.cc/28zV2Ywj/Wordle_Qr.png" },
    { img: "https://i.postimg.cc/rF8KQTJ8/Usa_Population.png", name: "Choropleth map of Usa", link: "./UsaPopulation/UsaPopulation.html", qr:"https://i.postimg.cc/KvZRJbNx/Usa_Qr.png" },
    { img: "https://i.postimg.cc/ry0HKXBz/Magyar-Wordle-Image.png", name: "Magyar Wordle", link: "./MagyarWordle/MagyarWordle.html" },
    { img: "https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png", name: "Random quoteMachine", link: "#" },
    { img: "https://i.postimg.cc/ncHC0xkh/Wordle_Solver.jpg", name: "Wordle Solver", link: "./WordleSolver/wordleSolver.html", qr:"https://i.postimg.cc/5Nnjrr7V/Wordle_Solver_Qr.png" },
    { img: "https://i.postimg.cc/659yYK0K/Drum_Machine.png", name: "Drum Machine", link: "./DrumMachine/DrumMachine.html", qr:"https://i.postimg.cc/ncHC0xkt/Drum_Machine_Qr.png" },
    
];

let currentIndex = 0;
let direction = '';

const projectImg = document.getElementById('current-project-img');
const projectName = document.getElementById('project-name');
const projectLink = document.getElementById('project-link');
const qrImg = document.getElementById('qr-img');
const prevNav = document.querySelector('.prev-nav');
const nextNav = document.querySelector('.next-nav');
const leftNav = document.querySelector('.left-nav');
const rightNav = document.querySelector('.right-nav');

function updateCarousel() {
    setTimeout(() => {
        projectImg.src = projects[currentIndex].img;
        projectName.textContent = projects[currentIndex].name;
        projectLink.href = projects[currentIndex].link;
        qrImg.src = projects[currentIndex].qr || '';
        
        if(direction == 'next'){ 
            setTimeout(() => {
                qrImg.animate([
                { transform: 'translateX(-50vw)',opacity: 0},
                { transform: 'translateX(0)',opacity: 1}
            ], { duration: 250, fill: 'forwards' });
            }, 500);
        }
        if(direction == 'prev'){
            setTimeout(() => {
                qrImg.animate([
                    { transform: 'translateX(50vw)',opacity: 0 },
                    { transform: 'translateX(0)',opacity: 1 }
                ], { duration: 250, fill: 'forwards' });
            }, 500);
        }

        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        prevNav.src = projects[prevIndex].img;
        prevNav.setAttribute('data-index', prevIndex);

        const leftIndex = (currentIndex - 2 + projects.length) % projects.length;
        leftNav.src = projects[leftIndex].img;
        leftNav.setAttribute('data-index', leftIndex);

        const nextIndex = (currentIndex + 1) % projects.length;
        nextNav.src = projects[nextIndex].img;
        nextNav.setAttribute('data-index', nextIndex);

        const rightIndex = (currentIndex + 2) % projects.length;
        rightNav.src = projects[rightIndex].img;
        rightNav.setAttribute('data-index', rightIndex);
    }, 500);
}
function moveRight(){
    rightNav.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(20vw)' }
    ], { duration: 500 });
    nextNav.animate([
        { transform: 'translateX(0) scale(1)',  },
        { transform: 'translateX(12vw) scale(0.5)', opacity: 0.25 }
    ], { duration: 500 });
    projectImg.animate([
        { transform: 'translateX(0)translateY(0) scale(1)', opacity: 1 },
        { transform: 'translateX(35vw)translateY(25px) scale(0.2)', opacity: 0.5 }
    ], { duration: 500 });
    prevNav.animate([
        { transform: 'translateX(0)translateY(0) scale(1)', opacity: 0.5 },
        { transform: 'translateX(35vw)translateY(-30px) scale(5)', opacity: 1 }
    ], { duration: 500 });
    leftNav.animate([
        { transform: 'translateX(0) scale(1)', opacity: 0.25 },
        { transform: 'translateX(12vw) scale(2)', opacity: 0.5 }
    ], { duration: 500 });
    setTimeout(() => {
        qrImg.animate([
            { transform: 'translateX(0)',opacity: 1 },
            { transform: 'translateX(50vw)',opacity: 0}
        ], { duration: 250, fill: 'forwards' });
    }, 300);

    direction = 'next';
    if(currentIndex == 0){
        currentIndex = projects.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    updateCarousel();
}
function moveLeft(){
    leftNav.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-20vw)' }
    ], { duration: 500});
    prevNav.animate([
        { transform: 'translateX(0) scale(1)', opacity: 0.5 },
        { transform: 'translateX(-12vw) scale(0.5)', opacity: 0.25 }
    ], { duration: 500 });
    projectImg.animate([
        { transform: 'translateX(0)translateY(0) scale(1)', opacity: 1 },
        { transform: 'translateX(-35vw)translateY(25px) scale(0.2)', opacity: 0.5 }
    ], { duration: 500 });
    nextNav.animate([
        { transform: 'translateX(0)translateY(0) scale(1)', opacity: 0.5 },
        { transform: 'translateX(-35vw)translateY(-30px) scale(5)', opacity: 1 }
    ], { duration: 500});
    rightNav.animate([
        { transform: 'translateX(0) scale(1)', opacity: 0.25 },
        { transform: 'translateX(-12vw) scale(2)', opacity: 0.5 }
    ], { duration: 500});
    setTimeout(() => {
        qrImg.animate([
            { transform: 'translateX(0)',opacity: 1  },
            { transform: 'translateX(-50vw)',opacity: 0 }
        ], { duration: 250, fill: 'forwards' });
    }, 300);
    
    direction = 'prev';
    if(currentIndex == projects.length - 1){
        currentIndex = 0
    } else {
        currentIndex = currentIndex + 1;
    }
    updateCarousel();
}
prevNav.addEventListener('click', () => {
    moveLeft();
});
nextNav.addEventListener('click', () => {
    moveRight();
});

updateCarousel();