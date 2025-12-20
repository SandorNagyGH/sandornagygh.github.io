const showBtn=document.getElementById("button");

function showProjects(){
    if(showBtn.textContent=="Show more >>"){
        showBtn.textContent="<< Show less"
        document.querySelectorAll('.hidden-projects').forEach(el => {
            el.style.display = 'block';
        });
    } else {
        showBtn.textContent="Show more >>"
        document.querySelectorAll('.hidden-projects').forEach(el => {
            el.style.display = 'none';
        });
    }
}

showBtn.addEventListener("click", showProjects);

// Project Carousel
const projects = [
    { img: "https://i.postimg.cc/TYxwmMYx/CRCLImg.jpg", name: "CRCL", link: "https://sandornagygh.github.io/crcl/crcl.html" },
    { img: "https://i.postimg.cc/SNhD2rXC/Wordle-By-Alex-Img.jpg", name: "Wordle Game", link: "./WordleByAlex/WordleByAlex.html" },
    { img: "https://i.postimg.cc/nhxgxxY7/uspopulation-Img.jpgg", name: "Choropleth map of Usa", link: "./UsaPopulation/UsaPopulation.html" },
    { img: "https://i.postimg.cc/yN1NkwB7/Wordle-Solver-Img.jpg", name: "Wordle Solver", link: "./WordleSolver/wordleSolver.html" },
    { img: "https://i.postimg.cc/28bXh6Tf/Drum-Machine-Img.jpg", name: "Drum Machine", link: "./DrumMachine/DrumMachine.html" },
    { img: "https://i.postimg.cc/ry0HKXBz/Magyar-Wordle-Image.png", name: "Magyar Wordle", link: "./MagyarWordle/MagyarWordle.html" },
    { img: "https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png", name: "Random quoteMachine", link: "#" }
];

let currentIndex = 0;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const projectImg = document.getElementById('current-project-img');
const projectName = document.getElementById('project-name');
const projectLink = document.getElementById('project-link');

function updateCarousel() {
    projectImg.src = projects[currentIndex].img;
    projectName.textContent = projects[currentIndex].name;
    projectLink.href = projects[currentIndex].link;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
});

// Initialize
updateCarousel();