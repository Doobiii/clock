//DOM ELEMENT
const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");


    //check if the mode is already set to "dark Mode" is localStorage
    if(localStorage.getItem("mode")==="Dark Mode"){

        body.classList.add("dark");
        modeSwitch.textContent="Light Mode";

    }

    //add click event listener
    modeSwitch.addEventListener("click", () =>{
        //toggle the drk class on body
        body.classList.toggle("dark");
        //check dark class present on screen
        const isDarkmode = body.classList.contains("dark");
        // console.log(isDarkmode)


        //set switchmode text based on "dark" class
        modeSwitch.textContent= isDarkmode ? "Light Mode" : "Dark Mode";

        //set local storage "mode" item based on "dark" mode presence
        localStorage.setItem("mode" , isDarkmode ? "Dark Mode" : "Light Mode");

    })

    

const updateTime = () => {
    //get courrent time and calcualte degrees for clock hands
   
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

    // Rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;

};

//call updateTime to set clock hands every second
setInterval(updateTime, 1000);

// call updateTime on page load
updateTime();
