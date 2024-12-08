// Detect browser & set appropriate download link
function browserDetect(){
    let downloadButton = document.getElementById("download-button");

    // Sets the user's agent
    let userAgent = navigator.userAgent;

    let unhide;

    // Verify browser in use & set the link
    if(userAgent.includes("Chrome")){
        // set download link
        downloadButton.href = "https://chromewebstore.google.com/detail/web-presentation-clicker/mnkkbdgkehfhenamhggdljdmlpdpjmom";

        unhide = document.getElementsByClassName("chrome");
    } else if (userAgent.includes("Firefox")){
        downloadButton.href = "https://addons.mozilla.org/en-US/firefox/addon/web-presentation-clicker/";

        unhide = document.getElementsByClassName("firefox");
    } else {
        downloadButton.href = "#";
        downloadButton.textContent = "Browser not supported";
        
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