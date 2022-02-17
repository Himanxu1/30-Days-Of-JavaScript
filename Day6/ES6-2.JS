//  Default Parameter


// function talk(msg){
//     console.log(msg);
// }

// talk("hello");
// talk();  Default parameter

function talk(msg="hi"){
    console.log(msg);
}

talk();
talk("hello");

// output  
// hi
// hello