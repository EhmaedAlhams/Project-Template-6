const InputEmail = document.getElementById('Email');
const BtnChange = document.getElementById('BtnEmail');
let isEnabled = true;


BtnChange.addEventListener("click", () => {
    if (isEnabled) {
        InputEmail.setAttribute('disabled', '');
        isEnabled = false;
        console.log("Done Set");
    } else {
        InputEmail.removeAttribute('disabled');
        isEnabled = true;
        console.log("Done Remove");
    }
});

// That's when leave focus save what the user input it.

// InputEmail.addEventListener('focusout', () => {
//     console.log("OnBlur!");
// });


// if (isEnabled) {
    
// } else if (isEnabled = false) {
//     BtnChange.addEventListener("click", () => {
        
//     });
// }


// if (InputEmail.hasAttribute('disabled')) {
//     // console.log(InputEmail.getAttribute('disabled'));
//     // AnchorChangeBtn.addEventListener("click", () => {
//     //     InputEmail.setAttribute('disabled', '');
//     //     console.log("Done remove");
//     // });
    

// } else {
//     // InputEmail.setAttribute('disabled', '');
//     // AnchorChangeBtn.addEventListener("click", () => {
//     //     InputEmail.removeAttribute('disabled');
//     //     console.log("Done Set");
//     // });
// }