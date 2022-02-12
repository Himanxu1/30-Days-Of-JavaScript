//  Problem with the argument is that user can put any number in Argument .So to solve this problem JavaScript gave us the 
//  Argument array 

        // function add(){

        //     console.log(arguments.length);
        // }
        // add(1,2,3)

     function add(){

        if(arguments.length == 0){
            console.log("Argument Not Passed");
        }else{


            let sum =0;
            for(let i=0;i<arguments.length;i++){
             sum += arguments[i];
            }
          console.log(sum);

        }
     }    

    let addition = add;
     addition(1,2,3);