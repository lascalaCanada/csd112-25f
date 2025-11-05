window.addEventListener('load', () => {
    let name = prompt("Please enter your name!"); 
    if ( ! name ) { return; }
    let headingElement = document.querySelector('h1'); 
    let heading = headingElement.innerHTML; 
    heading = heading.substring(0, heading.length - 1);   
    heading = heading + ", " + name + "!"; 
    headingElement.innerHTML = heading; 
});

