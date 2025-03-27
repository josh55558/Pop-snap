function popSnap() {
    const userInput = document.querySelector("#userInput").value;


    if (userInput % 4 == 0 && userInput % 6 == 0) {
        document.querySelector("#output").textContent = "Pop Snap"
       
    } else if (userInput % 4 == 0) {
        document.querySelector("#output").textContent = "Pop"
    }
    else if (userInput % 6 == 0){
        document.querySelector("#output").textContent = "Snap"
    }
    else{
        document.querySelector("#output").textContent = userInput
    }
}