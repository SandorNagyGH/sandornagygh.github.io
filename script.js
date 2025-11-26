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