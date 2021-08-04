// Your code goes here


//Grabbing the navigation items//

const navItems = document.querySelectorAll('a');

//Applying all effects to each nav link//

for(let i=0; i<navItems.length; i++){
navItems[i].addEventListener('mouseover', function(event) {
    event.target.style.color = "White";
    event.target.style.backgroundColor = "black";
});

navItems[i].addEventListener('mouseout', function(event){
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
});

navItems[i].addEventListener('click', function(event){
    event.preventDefault();
});

}



//Grabbing the Sign Up Buttons at the Bottom of the Page//
const signUpButtons = document.getElementsByClassName('btn');

//applying all effects to each button//

for(let i=0; i<signUpButtons.length; i++){

    signUpButtons[i].addEventListener('click', function(event){
        event.target.textContent = "One Click Closer to Your Dream Vacay!";
        event.target.style.textAlign = 'center';

        setTimeout(function(){
            event.target.textContent = "Sign Me Up!";
        },500);

    }, false);

}

//Grabbing All Headers//
const allHeaderTwos = document.querySelectorAll('h2');
//Applying effects//


for(let i=0; i<allHeaderTwos.length; i++){
    allHeaderTwos[i].addEventListener('copy', function(event){
        console.log(`The user just copied ${allHeaderTwos[i].innerText}`);
    })
}

//Grabbing All Paragraphs//
const allParagraphs = document.querySelectorAll('p');

console.log(allParagraphs);
//Applying effects//

for(let i=0; i<allParagraphs.length; i++){
    allParagraphs[i].addEventListener('cut', function(event){
        console.log(`The user just cut "${allParagraphs[i].innerText}"`);
    })
}

const images = document.querySelectorAll('img');

images[1].addEventListener('dblclick', function(event){
    window.location.href = 'https://earth.google.com/web/';
});

















