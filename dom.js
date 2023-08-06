function init() {
    element = document.getElementById("load-local");
    element.addEventListener('click', function () {
        display();
    });

    element = document.getElementById("load-remote");
    element.addEventListener('click', function () {
        loadRemote();
    });
}

function loadRemote() {

    const apiKey = '$2b$10$38qpvDi3GCylbyfMLOWRG.BlYhkS3q9Kh2zBSzCmtpo8D915VNcwO'; // Replace with your JSONBin secret key
    //const binId = 'your_bin_id'; // Replace with the ID of your JSONBin bin
    const url = 'https://api.jsonbin.io/v3/b/64d01cac9d312622a38cfada';

    fetch(url, {
        headers: {
            'X-Access-Key': apiKey,
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('Data from JSONBin:', data.record);
            class MyCustomElement extends HTMLElement {
                constructor() {
                    super();

                    const shadowRoot = this.attachShadow({ mode: 'open' });
                    const storedCollegeCourse = data.record.projectCard;
                    console.log(storedCollegeCourse[0].cardNum);
                    const rootList = document.createElement('section');

                    const style = document.createElement('style');
                    style.textContent = `
                        img{
                            width: 150px;
                            height: 100px;
                        }
                    `;

                    if (storedCollegeCourse) {
                        storedCollegeCourse.forEach(card => {
                            const h2content = document.createElement('h2');
                            h2content.textContent = `${card.d}`;
                            rootList.appendChild(h2content);

                            // p element
                            const pcontent = document.createElement('p');
                            pcontent.textContent = `${card.p}`;
                            rootList.appendChild(pcontent);

                            // link from a tag


                            const acontent = document.createElement('a');
                            const link = `${card.link}`;
                            acontent.setAttribute('href', link);
                            acontent.innerHTML = "Read More";
                            rootList.appendChild(acontent);

                            //Img
                            const imgcontent = document.createElement('img');
                            const imgsrc = `${card.img}`;
                            imgcontent.setAttribute("src", imgsrc);
                            rootList.appendChild(imgcontent);
                        });
                    }

                    shadowRoot.appendChild(style);
                    shadowRoot.appendChild(rootList);



                }
            }
            customElements.define('my-custom-element', MyCustomElement);
        })


}


function display() {

    localStorage.setItem("h2-content", "My first project");
    localStorage.setItem("p-content", "Building my own portfolio website using HTML, CSS, Java Script. With the purpose of representing who I am, and what I have become.To impress the recruiter!");
    localStorage.setItem("img-path", "./Images/iewek-gnos-hhUx08PuYpc-unsplash.jpg");
    localStorage.setItem("a-content", "hi");
    localStorage.setItem("link1", "https://github.com/vqnguyenSD/CSE134_HW4_Part2");


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
    rp.innerHTML = pvalue;


}

window.addEventListener('DOMContentLoaded', init);