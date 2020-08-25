let form = document.getElementsByTagName("form")[0];
let inputGroupElements = document.querySelectorAll(".inputGroup");



form.addEventListener("submit", function(event) {
    event.preventDefault();

    let status = true;

    inputGroupElements.forEach(inputGroupElement => {
        let input = inputGroupElement.querySelector("input")
        let span = inputGroupElement.querySelector(".statusMessage")

        if (validate(input, span) == false) {
            status = false;
        }
    });

    if (status == false) {

        return
    }
    console.log("done done")
    form.reset();
})




function validate(input, span) {
    if (input.value == "") {
        span.innerText = "Udfyld venligst"
        return false;

    }
    return true;

}