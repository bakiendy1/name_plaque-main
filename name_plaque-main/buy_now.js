//Adding variables to store our data
const buyBtn = document.querySelector('.buy-submit');
const putName = document.querySelector('#guessField')
const namePreview = document.querySelector('#prev');
const successText = document.querySelector('.sucText');
const warningText = document.querySelector('#warningArea');


// Adding arrow function

  const checkInput = () => {
    if (putName.value.trim() === '') {
        warningText.textContent = 'Please enter some letters.';
        warningText.style.color ='red';
        successText.textContent = '';
     
    } else if (namePreview.textContent.toLowerCase() === 'YOUR NAME'.toLowerCase()) {
        warningText.textContent = 'Please enter your custom name.';
        successText.textContent = '';
      
    } else if (putName.value.length > 15){
        warningText.textContent = 'You have exceeded the number of available letters';
        successText.textContent = '';
    } else { 
        warningText.textContent = '';
        successText.textContent = 'Successul!';
        successText.style.color ='green';
    }       
  }


//   Add event to carryout the action 

buyBtn.addEventListener('click', checkInput);