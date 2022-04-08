//finding audio element on page where 'data-key' = 'e.keycode'.
window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);


    //finding div elelment on page where 'data-key' = 'e.keycode'. using document.querySelector.
    //returned element is assigned to a constant variable called key.

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //if audio element is not present for the particular key than return. "Statement stops the execution of a function".

    if (!audio) return; //for handling null keys.

    //assigning class= "playing" to div using JavaScript
    key.classList.add('playing');

    //now begin play audio. before playing audio rewind it to the start of the element so hitting key agaain again wil rewind it to start.
    audio.currentTime = 0;
    audio.play();

    //the end of playSound function.
}

//use of animation only during the press of key. using transitioned event.
// const key = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitioned', removeTransition));

//Transition event : once it occure than call removeTransition by passing event obj. which contains a propertyName:'transform'. if it is completed than remove animation by removing class playing.

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }




//from repo
function endSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key)
        return;
    key.classList.remove('playing');

}
// frim repo
window.addEventListener('keydown', playSound)
window.addEventListener('keyup', endSound)


//another approach: 
// document.addEventListener("keypress", function(event) {
//     sound(event.key);
//     animation(event.key);                              });
//     animation(event.key);                              });