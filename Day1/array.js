let books = ["maths","bio","computer Science","Jio"];
let a = new Array("maths","science");


const x = books.length;
console.log(a.length);
books.push("Hindi");

console.log(books);
books.unshift("ChEM");
console.log(books);

books.pop();
console.log(books);

books.shift();
console.log(books);

books.splice(1,2);

//  two ways to empty arrays

const newLocal = books = [];

  books.length  =0;

let x = books.indexOf("bio");

let x = "max";

let text = "this is text";


let wordArray = books.join(' ');

let book2 = ["economics","history"];
let newbook = books.concat(book2);


//  Multidimensional Array

let b = [
    ["Maths",12],
    ["English",14],
    ["Hindi",34]
];

let x = booksWithPages[1][1];
    for( let i=0;i<b.length;i++){
        for(let j=0;j<b[i].length;j++){
            console.log(b[i][j]);
        }
    }

books.forEach(myFu);
function myFu(value){
    console.log(value);

}

console.log(x);
