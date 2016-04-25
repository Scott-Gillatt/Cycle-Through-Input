var showIdea = [1, 2, 3, 4, 5, 6]

function storeIdea() {
    showIdea.push(document.getElementById("idea").value)
    document.getElementById("showIdea").textContent = showIdea
    document.getElementById("idea").value = ""
}


window.addEventListener("keydown", showLastIdea);

var length = showIdea.length
function showLastIdea(e) {
    if (e.keyCode === 38) {
        if (length > 0) {
            document.getElementById("idea").value = showIdea[length - 1]
            length--
        }
        document.getElementById("idea").value = showIdea[length]
    } else if (e.keyCode === 40) {
        if (length < showIdea.length) {
            length++
            document.getElementById("idea").value = showIdea[length] || ""
        } else if (length === showIdea.length) {
            document.getElementById("idea").value = ""
        }
        // document.getElementById("idea").value = showIdea[length]
    } else {
        length = showIdea.length
    }
}