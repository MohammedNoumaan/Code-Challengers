let mainContent = document.getElementById("main-content");

const dataFetch = async ()=>{
    let resp = await fetch("https://kontests.net/api/v1/all");
    let contestData = await resp.json();

    let img = 0
    contestData.forEach((data)=>{
        let card = 
        `<div class="card mx-3 my-2" style="width: 20rem;">
            <img src="https://picsum.photos/id/${img}/150/100"
            class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text font-weight-bold"> Site: ${data.site}</p>
                <p class="card-text">Starts : ${data.start_time}</p>
                <p class="card-text">Ends : ${data.end_time}</p>
                <p class="card-text">Status : ${data.status}</p>
                <p class="card-text">In 24 Hours: ${data.in_24_hours}</p>
                <a href="${data.url}" class="btn btn-primary">Visit Page</a>
            </div>
    </div>`
        img++;
        if(img>9){
            img = 0

        }
    mainContent.innerHTML+= card
    })



}

dataFetch();