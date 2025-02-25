function search() {
    let input = document.getElementById("search").value.toLowerCase();
    let containers = document.querySelectorAll(".container");
    let found = false;
    
    containers.forEach(container => {
        if (container.classList.contains(input) || container.innerText.toLowerCase().includes(input)) {
            container.style.display = "block";
            found = true;
        } else {
            container.style.display = "none";
        }
    });
    
    if (!found) {
        alert("Nenhum resultado encontrado.");
    }
}