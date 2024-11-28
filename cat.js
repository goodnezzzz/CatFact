function fetchCatFact() {
    const button = document.getElementById("fetchFactButton");
    const factDiv = document.getElementById("fact");
    
    button.textContent = "Loading...";
    button.disabled = true;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/fact");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            factDiv.textContent = data.fact;
        } else {
            factDiv.textContent = "Could not fetch a cat fact. Please try again.";
        }

        button.textContent = "Get Cat Fact";
        button.disabled = false;
    };
    
    xhr.send();
} 