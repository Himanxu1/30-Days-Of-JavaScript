

async function getGithhubdata(){
    let response = await fetch('https://api.github.com/users');
    // console.log(response);
    let data = await response.json();
    
    let display ="";
    data.map((values)=>{
        display += `<div class="cards">
        <img src=${values.avatar_url} alt=${values.login}>
        <h1>${values.login}</h1>
    </div>`
    });
    document.getElementById("root").innerHTML = display;

    await new Promise((resolve,reject)=>{
        setTimeout(resolve,2000);
    });
    console.log("All data has been displaed")
};

getGithhubdata();

