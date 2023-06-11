const zoomInImg = document.querySelectorAll(".btn-img-zoom")
const imgZoomSubcontainer = document.getElementById("img-zoom-subcontainer")
const imgZoomContainer = document.querySelector(".img-zoom-container")
const imgZoomClose = document.querySelector(".btn-img-zoom-close")

for(let button of zoomInImg) {
    button.addEventListener("click", () => {
        imgZoomContainer.classList.add("img-zoom-container-visible")
        let img = button.nextElementSibling.lastElementChild.cloneNode(true)
        imgZoomSubcontainer.appendChild(img)
    })
}

imgZoomClose.addEventListener("click", () => {
    imgZoomContainer.classList.remove("img-zoom-container-visible")
    imgZoomSubcontainer.removeChild(imgZoomSubcontainer.lastElementChild)
})