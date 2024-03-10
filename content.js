// content.js
// window.addEventListener('load', (event) => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

    // Check if the elements exist before attempting to modify them
    let bodyBg = document.getElementById("gb");
    // let changeTxt = document.querySelector('.gNO89b');
    let dom = document.getElementsByClassName('gNO89b')

    if (bodyBg) {
        bodyBg.style.backgroundColor = "#" + randomColor;
    }

    let footerBg = document.querySelector(".o3j99.c93Gbe");
    if (footerBg) {
        footerBg.style.backgroundColor = "#" + randomColor;
    }

    if (dom) {
        // Modify the text of the element
        // dom.style.backgroundColor = "#" + randomColor;

        // Add an event listener to the element
        // dom.addEventListener("click", changeTheText);
      dom[1].value = "the text is changed";
      dom[1].addEventListener("click", changeTheText);
      console.log('This is Dom',dom[1])      
    }

// });

function changeTheText() {
    alert('Hello');
}
