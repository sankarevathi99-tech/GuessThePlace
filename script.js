let urls = [{
        name: "charminar",
        url: "https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=",
        hint: "Famous monument in Hyderabad with four minarets."
    },
    {
        name: "tajmahal",
        url: "https://res.cloudinary.com/db2gmv9r8/image/upload/v1753116141/download_1_sknglx.jpg",
        hint: "A symbol of eternal love located in Agra."
    },
    {
        name: "Golconda",
        url: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np0g9HkIl_WrwDGFbhY4ftfYmVkEMgw4bDX8KNAXBcoyHRkr3a2CtiWFRtZDrlw-YMoczmTbtdXopFzO41PwA0NQdiw7y0VI4VmgZx9JakcartqAGt4p4meIbEpQD21FiHB0XGJ8g=w270-h312-n-k-no",
        hint: "Historic fort near Hyderabad known for its acoustics."

    },
    {
        name: "India Gate",
        url: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqOfQe2PO9j3m6e0rd7IyIemW1ZhNrcLG6neR6-XhzbwkF8YV5ZiBYBGNqChit3wUHHaTbNfb0Ik5f6eVMxi0TEet1RpALOAFRlQsw5In4xzy5yLx5hOWmbLLKXbs4crKoHGIR6=w270-h312-n-k-no",
        hint: "War memorial arch located in the capital city."

    },
    {
        name: "Qutub Minar",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTI12ERtIHBQXJL-X_BFYSoANv2B893lE7cA&s",
        hint: "Tallest brick minaret in the world, located in Delhi."
    },
    {
        name: "Golden temple",
        url: "https://www.ahospitalityclub.com/wp-content/uploads/2020/03/B17BEEBC-2AED-4711-86EC-DAE995B2E0A4.jpeg",
        hint: "Sikhism’s holiest shrine, located in Amritsar"
    },
    {
        name: "Mysore palace",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MXzy4fubdr2YMIrPzSZKGzZ7Zyw_0_oaTzKZZL2qKSKiHB55grCtdGGsDOgj61bkO00&usqp=CAU",
        hint: "Royal residence known for its grandeur in Karnataka"

    },
    {
        name: "Backwaters",
        url: "https://res.cloudinary.com/db2gmv9r8/image/upload/v1753121571/download_laxdqq.jpg",
        hint: "Peaceful lagoons and houseboats in Kerala."

    },
    {
        name: "havelock",
        url: "https://skyrover.in/wp-content/uploads/2024/05/Havelock-Island.jpg",
        hint: "A beautiful island in the Andaman and Nicobar Islands."
    }, {
        name: "varanasi ghats",
        url: "https://res.cloudinary.com/db2gmv9r8/image/upload/v1753601236/download_3_htcxpj.jpg",
        hint: "Sacred riverfront steps in one of the world’s oldest cities."
    }, {
        name: "lotus temple",
        url: "https://res.cloudinary.com/db2gmv9r8/image/upload/v1753601555/download_4_iwdbyj.jpg",
        hint: "A lotus-shaped temple known for its silence and openness."
    },
    {
        name: "Gateway of india",
        url: "https://res.cloudinary.com/db2gmv9r8/image/upload/v1753602098/download_5_rci7p3.jpg",
        hint: "Iconic arch monument in Mumbai facing the Arabian Sea."
    },
    {
        name: "Birla mandir",
        url: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/10/birlamandir-hyd-weekend-yaari-.jpg?fit=800%2C480&ssl=1",
        hint: "White marble temple on a hill in Hyderabad."
    },
    {
        name: "Ajanta caves",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-muQCpeQoU3hfBs3tvOyU_ELBFuQz2L8KzA&s",
        hint: "Cave paintings and carvings from 2nd century BCE."
    },
    {
        name: "ellora caves",
        url: "https://whc.unesco.org/uploads/thumbs/site_0243_0001-1200-630-20151104152442.jpg",
        hint: "Rock-cut caves featuring Hindu, Buddhist, and Jain monuments."
    }, {
        name: "red fort",
        url: "https://c.ndtvimg.com/2024-08/bfia2rug_independence-day_625x300_15_August_24.jpeg?downsize=545:307",
        hint: "Iconic fort in Delhi where the Indian Prime Minister addresses the nation on Independence Day."
    }, {
        name: "dwaraka",
        url: "https://static.wixstatic.com/media/2d34e5_89ecb78003b746c58e1654f2648d696a~mv2.jpg/v1/fill/w_480,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d34e5_89ecb78003b746c58e1654f2648d696a~mv2.jpg",
        hint: "Ancient city believed to be the kingdom of Lord Krishna."
    }, {
        name: "konark sun temple",
        url: "https://res.cloudinary.com/db2gmv9r8/image/upload/v1753628207/download_6_v6ncae.jpg",
        hint: "Chariot-shaped temple dedicated to the Sun God in Odisha."
    }, {
        name: "kanyakumari beach",
        url: "https://res.cloudinary.com/db2gmv9r8/image/upload/v1753628615/download_7_td4ttn.jpg",
        hint: "Southernmost tip of mainland India where three seas meet."
    }, {
        name: "jatayu earth center",
        url: "https://res.cloudinary.com/db2gmv9r8/image/upload/v1753629261/download_8_nd62en.jpg",
        hint: "Huge sculpture of a mythical bird from the Ramayana in Kerala."

    }
]
let count = 0;
let answer = 0;

let random = Math.floor(Math.random() * (urls.length));


let container = document.getElementById('container');

function display(item) {
    container.textContent = "";



    let {
        name,
        url
    } = item;

    if (answer === 5) {
        score();
        return;
    }
    answer++;


    let gameContainer = document.createElement("div");
    gameContainer.classList.add("container_bg");
    container.appendChild(gameContainer);

    let headingEl = document.createElement("h1");
    headingEl.textContent = "Guess Place";

    headingEl.classList.add("guess", "m-2", "text-center");
    gameContainer.appendChild(headingEl);

    let paraContainer = document.createElement('div');
    paraContainer.classList.add("d-flex", "flex-row", "justify-content-end", "m-4");
    gameContainer.appendChild(paraContainer);

    let para_score = document.createElement("p");
    para_score.textContent = count + "/50" + " 🪙";

    para_score.classList.add("score");
    paraContainer.appendChild(para_score);




    let image = document.createElement('img');
    image.src = url;
    image.classList.add("image", "mb-5");
    gameContainer.appendChild(image);
    let inputDiv = document.createElement("div");
    inputDiv.classList.add("d-flex", "flex-row", "justify-content-center");
    gameContainer.appendChild(inputDiv);

    let input1 = document.createElement('input');
    input1.placeholder = "write the destination name here..";
    input1.type = "text";
    input1.classList.add("form-control", "m-2", "mb-4", "inputEl","w-25");
    inputDiv.appendChild(input1);

    let paraEl = document.createElement('p');
    gameContainer.appendChild(paraEl);


    let checkContainer = document.createElement('div');
    checkContainer.classList.add('d-flex', 'flex-row', 'justify-content-center', 'mb-3');
    gameContainer.appendChild(checkContainer);

    let btnContainerEl = document.createElement('div');
    btnContainerEl.classList.add('d-flex', 'flex-row', 'm-2', 'justify-content-center');
    gameContainer.appendChild(btnContainerEl);

    let checkEl = document.createElement('button');
    checkEl.textContent = "check";
    checkEl.classList.add('btn', 'btn-primary', 'm-3');
    btnContainerEl.appendChild(checkEl);

    let hintBtn = document.createElement('button');
    hintBtn.textContent = "hint";
    hintBtn.classList.add('btn', 'btn-outline-light', 'm-3');
    btnContainerEl.appendChild(hintBtn);

    hintBtn.onclick = function() {
        let hintContainer = document.createElement("div");
        gameContainer.appendChild(hintContainer);


        let answer = document.createElement('p');
        answer.textContent = item.hint;
        answer.style.color = "white";
        answer.classList.add('text');
        hintContainer.appendChild(answer);
    }

    let btnContainer = document.createElement('div');
    btnContainer.classList.add('d-flex', 'flex-row', 'justify-content-center', 'mb-4');
    btnContainerEl.appendChild(btnContainer);
    let btnEl = document.createElement('button');
    btnEl.textContent = "Next";
    btnEl.classList.add('btn', 'btn-primary', 'm-3');
    btnContainerEl.appendChild(btnEl);





    checkEl.onclick = function() {
        let userValue = input1.value;
        
if (userValue.toLowerCase() === name.toLowerCase()) {
    count += 10;
    paraEl.textContent = "✅ Correct!!";
    paraEl.style.color = "green";
    input1.classList.add("border", "border-success");

} else if(userValue === ""){
    paraEl.textContent = "Please Enter your Guess";
    paraEl.style.color = "red";
    input1.classList.add("border", "border-danger");

}

else {
    paraEl.textContent = "❌ Wrong!!";
    paraEl.style.color = "red";
    input1.classList.add("border", "border-danger");
}

        
        
    }
    btnEl.addEventListener("click", function() {
        container.innerHTML = "";
        random = Math.floor(Math.random() * (urls.length));
        display(urls[random]);

    });

}



function score() {

    container.textContent = "";




    let scoreContainer = document.createElement("div");
    scoreContainer.classList.add("d-flex", "flex-column", "justify-content-center", "bg");
    scoreContainer.style.minHeight = "100vh";
    container.appendChild(scoreContainer);

    let h2El = document.createElement("h2");
    h2El.textContent = "Game Over 🏆";
    h2El.style.fontSize = 50 + "px";
    scoreContainer.appendChild(h2El);

    let emoji = document.createElement("h1");
    emoji.style.fontSize = 100 + "px";
    scoreContainer.appendChild(emoji);

    let score_display = document.createElement("h4");
    score_display.style.fontSize = 40 + "px";
    score_display.classList.add('text');
    scoreContainer.appendChild(score_display);
    score_display.style.fontFamily = "Roboto";

    let value = document.createElement("h6");
    value.style.fontSize = 40 + "px";
    value.classList.add('text');
    scoreContainer.appendChild(value);



    if (count >= 45) {
        emoji.textContent = "🥳👏🎉";
        score_display.textContent = "Wow You have done Great Job";
        value.textContent = count + "/50";
    } else if (count >= 30 && count <= 44) {
        emoji.textContent = "😊🎯👍";
        score_display.textContent = "Well Done";
        value.textContent = count + "/50";

    } else if (count > 25 && count <= 30) {
        emoji.textContent = "😅🤏";
        score_display.textContent = "Almost There";
        value.textContent = count + "/50";

    } else {
        emoji.textContent = "😓😳";
        score_display.textContent = "All The best For Next time";

        value.textContent = count + "/50";

    }
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("d-flex", "flex-row", "justify-content-center");
    scoreContainer.appendChild(btnDiv);

    let restartBtn = document.createElement("button");
    restartBtn.style.width = "150px";
    restartBtn.classList.add("w-auto");
    restartBtn.textContent = "Restart";
    restartBtn.style.fontFamily = "Roboto";

    restartBtn.classList.add("text-center", "btn", "btn-outline-dark", 'w-50');
    btnDiv.appendChild(restartBtn);
   
        restartBtn.onclick = function() {
  
        count = 0;
        answer = 0;
        show();
    
}

    }






function show() {

    random = Math.floor(Math.random() * (urls.length));

    display(urls[random]);
    document.getElementById('container').scrollIntoView({
        behavior: 'smooth'
    })
}