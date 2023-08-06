function init(){
    element = document.getElementById("load-local");
    element.addEventListener('click', function () {
        display();
    });
}
localStorage.setItem("h2-content", "My first project");
localStorage.setItem("p-content", "Building my own portfolio website using HTML, CSS, Java Script. With the purpose of representing who I am, and what I have become.To impress the recruiter!");
localStorage.setItem("img-path", "./Images/iewek-gnos-hhUx08PuYpc-unsplash.jpg");
localStorage.setItem("a-content", "hi");
localStorage.setItem("link1", "https://github.com/vqnguyenSD/CSE134_HW4_Part2");

function display(){
    /*
    const rimg = document.querySelector("#project-card");
    const cardvalue = rimg.innerHTML.valueOf();
    const storeVal = JSON.stringify(cardvalue);
    localStorage.setItem("card-info", storeVal);

    const newcard = document.querySelector("new-card");
    console
    newcard.innerHTML = localStorage.getItem("card-info");
    */


    
    const rh2 = document.querySelector("#h3");
    
    const h2value = localStorage.getItem("h2-content");
    rh2.innerHTML = h2value;
    const rp = document.querySelector("#p");
    const pvalue = localStorage.getItem("p-content");
    const img1 = document.querySelector("#img1");
    img1.src = localStorage.getItem("img-path");
    const link1 = document.querySelector("#link1");
    const reflink = localStorage.getItem("link1");
    link1.setAttribute("href", reflink);
    link1.style.display = ":inline";
    rp.innerHTML = pvalue;
    

}

window.addEventListener('DOMContentLoaded', init);