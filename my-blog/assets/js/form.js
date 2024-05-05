const submitButton=document.getElementById('submit');
const user=document.getElementById('user');
const title=document.getElementById('title');
const comment=document.getElementById('content');
let blogInput = [];

function init() {
    // Get stored inputs from localStorage
    const storedInputs = JSON.parse(localStorage.getItem('bloginput'));
  
    // If there are entries update
    if (storedInputs !== null) {
      blogInput = storedInputs;
    }
}
function storeInput() {
    localStorage.setItem('bloginput', JSON.stringify(blogInput));
  }

 function changeScreen(){
  window.location.href="/blog.html";
}

submitButton.addEventListener('click', function (event){
    event.preventDefault;
    let userInput=user.value;
    let titleInput=title.value;
    let commentInput=comment.value.trim();

    if (userInput===''|| titleInput===''||commentInput===''){
        alert("Please fill the complete form, no blanks permitted!")
        return;
    }
    blogInput.push({userInput, titleInput, commentInput});
    storeInput();
    changeScreen();
    
  });

init();
// console.log(blogInput);
// localStorage.setItem('bloginput', JSON.stringify(blogInputs));

    

