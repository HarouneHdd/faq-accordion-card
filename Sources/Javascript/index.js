const detailsElements = document.querySelectorAll("details");

// Add the onclick listeners
detailsElements.forEach(targetDetail => {
    targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail
        detailsElements.forEach(element => {
            if (element !== targetDetail) {
                element.removeAttribute("open");
            }
        })
    })
});