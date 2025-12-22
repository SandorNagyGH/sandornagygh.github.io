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

function updateCarousel() {
    setTimeout(() => {
        projectImg.src = projects[currentIndex].img;
        projectName.textContent = projects[currentIndex].name;
        projectLink.href = projects[currentIndex].link;
        qrImg.src = projects[currentIndex].qr || '';
        
        if(direction == 'next'){ 
            nextNav.animate([
                { transform: 'translateX(-10vw) scale(2)', opacity: 0.75 },
                { transform: 'translateX(0) scale(1)', opacity: 0.5 }
            ], { duration: 500, fill: 'forwards' });
            projectImg.animate([
                { transform: 'translateX(-22vw) scale(0.5)', opacity: 0.75 },
                { transform: 'translateX(0) scale(1)', opacity: 1 }
            ], { duration: 500, fill: 'forwards' });
            prevNav.animate([
                { transform: 'translateX(-20vw)' },
                { transform: 'translateX(0)' }
            ], { duration: 500, fill: 'forwards' });
            setTimeout(() => {
                qrImg.animate([
                { transform: 'translateX(-50vw)',opacity: 0},
                { transform: 'translateX(0)',opacity: 1}
            ], { duration: 250, fill: 'forwards' });
            }, 500);
        }
        if(direction == 'prev'){
            prevNav.animate([
                { transform: 'translateX(10vw) scale(2)', opacity: 0.75 },
                { transform: 'translateX(0) scale(1)', opacity: 0.5 }
            ], { duration: 500, fill: 'forwards' });
            projectImg.animate([
                { transform: 'translateX(20vw) scale(0.5)', opacity: 0.75 },
                { transform: 'translateX(0) scale(1)', opacity: 1 }
            ], { duration: 500, fill: 'forwards' });
            nextNav.animate([
                { transform: 'translateX(20vw)' },
                { transform: 'translateX(0)' }
            ], { duration: 500, fill: 'forwards' });
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

        const nextIndex = (currentIndex + 1) % projects.length;
        nextNav.src = projects[nextIndex].img;
        nextNav.setAttribute('data-index', nextIndex);
    }, 500);
}

prevNav.addEventListener('click', () => {
    prevNav.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-20vw)' }
    ], { duration: 500, fill: 'forwards' });
    projectImg.animate([
        { transform: 'translateX(0) scale(1)', opacity: 1 },
        { transform: 'translateX(-22vw) scale(0.5)', opacity: 0.75 }
    ], { duration: 500, fill: 'forwards' });
    nextNav.animate([
        { transform: 'translateX(0) scale(1)', opacity: 0.5 },
        { transform: 'translateX(-10vw) scale(2)', opacity: 0.75 }
    ], { duration: 500, fill: 'forwards' });
    setTimeout(() => {
        qrImg.animate([
            { transform: 'translateX(0)',opacity: 1  },
            { transform: 'translateX(-50vw)',opacity: 0 }
        ], { duration: 250, fill: 'forwards' });
    }, 400);
    
    direction = 'prev';
    if(currentIndex == projects.length - 1){
        currentIndex = 0
    } else {
        currentIndex = currentIndex + 1;
    }
    updateCarousel();
});

nextNav.addEventListener('click', () => {
    nextNav.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(20vw)' }
    ], { duration: 500, fill: 'forwards' });
    projectImg.animate([
        { transform: 'translateX(0) scale(1)', opacity: 1 },
        { transform: 'translateX(22vw) scale(0.5)', opacity: 0.75 }
    ], { duration: 500, fill: 'forwards' });
    prevNav.animate([
        { transform: 'translateX(0) scale(1)', opacity: 0.5 },
        { transform: 'translateX(10vw) scale(2)', opacity: 0.75 }
    ], { duration: 500, fill: 'forwards' });
    setTimeout(() => {
        qrImg.animate([
            { transform: 'translateX(0)',opacity: 1 },
            { transform: 'translateX(50vw)',opacity: 0}
        ], { duration: 250, fill: 'forwards' });
    }, 400);

    direction = 'next';
    if(currentIndex == 0){
        currentIndex = projects.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    updateCarousel();
});

updateCarousel();