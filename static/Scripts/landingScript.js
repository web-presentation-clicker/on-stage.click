// Detect browser & set appropriate download link
function browserDetect(){
    // Sets the user's agent
    let userAgent = navigator.userAgent;

    let unhide;

    // Verify browser in use & set the link
    if(userAgent.includes("Chrome")){
        unhide = document.getElementsByClassName("chrome");
    } else if (userAgent.includes("Firefox")){
        unhide = document.getElementsByClassName("firefox");
    } else {
        unhide = document.getElementsByClassName("browser-fallback");
    }

    // set browser-specific elements
    for (let e in unhide) {
        unhide[e].style.display = "unset";
    }

}

// Toggles menu visibility
function toggleMenu(){
    let navbar = document.getElementById("navbar-container");
    navbar.classList.toggle("show");
}

// Copies the Bitcoin wallet address
function copyBitcoinAddress(){
    let address = document.getElementById("bitcoin-address").textContent;
    navigator.clipboard.writeText(address);
}

// Copies the Monero wallet address
function copyMoneroAddress(){
    let address = document.getElementById("monero-address").textContent;
    navigator.clipboard.writeText(address);
}

window.onload = browserDetect;