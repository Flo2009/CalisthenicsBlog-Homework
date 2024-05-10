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
  window.location.href="blog.html";
}
//on click check if fields have been filled and push into array and load the page to the Blog 
submitButton.addEventListener('click', function (event){
    event.preventDefault;
    let userInput=user.value.trim;
    let titleInput=title.value.trim;
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


    

