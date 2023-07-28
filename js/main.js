
var acc = document.getElementsByClassName("accordion-button");

//add event to each class
for (let i = 0; i < acc.length; i++) {
    
    acc[i].addEventListener("click", function () {
        
        //add/remove class .active to the clicked button, this here refer to the clicked button
        this.classList.toggle("active");

        // Find the <img> element within the clicked button
        const arrow = this.querySelector('img');

        //add/remove class .accordion-icon-rotate to the arrow
        arrow.classList.toggle('accordion-icon-rotate');

        // Find the accordion-content that is the next element of the cliked button
        let acc_content = this.nextElementSibling;

        if (acc_content.style.display === "block") {
            acc_content.style.display = "none";
        } else {
            acc_content.style.display = "block";
        }
    });
}
