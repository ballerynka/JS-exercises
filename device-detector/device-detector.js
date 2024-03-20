// script that detects screen size:
// > desktop
// > smartphone




              // esle    
//                 v
//  <-------smartphone----              ---------- desktop --->
//                        \            |
// 300 ------------------ x ---------- x --------------1920px --- > viewport width   
//                        |            |
//                         -- tablet --
//                                    1200px        ^ 
                                                 // if

function adapt(){
const SMALL = 800
const MEDIUM = 1200
let viewportWidth = innerWidth


if(viewportWidth > MEDIUM){
// alert('desktop')
heading.className = "title-large"
heading.innerHTML = 'desktop'
}else if(viewportWidth <= MEDIUM && viewportWidth >= SMALL){
    //  alert('tablet')
    heading.className = "title-medium";
    heading.innerHTML = "tablet";
}else{
heading.className = "title-small";
heading.innerHTML = "smartphone";
}
}