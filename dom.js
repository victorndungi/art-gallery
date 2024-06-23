let headimg = document.getElementById('main-heading')
let input_field= document.getElementById('userInput')
let highlightedParagraph= document.getElementsByClassName("color")
let allParagraphs= document.querySelectorAll('p')
let buttonchange= document.getElementById('change_heading')
buttonchange.addEventListener('click' ,function(){
headimg.classList.add('styled')
})

