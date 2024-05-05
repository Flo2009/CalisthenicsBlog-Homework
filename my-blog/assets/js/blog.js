
const blogList = document.querySelector('#blog-list');
let blogInput = [];


function init() {
    // Get stored inputs from localStorage
    const storedInputs = JSON.parse(localStorage.getItem('bloginput'));
  
    // If there are entries update
    if (storedInputs !== null) {
      blogInput = storedInputs;
    }
    renderBlogEntries();
}

function renderBlogEntries() {
    // Clear blogList element 
    blogList.innerHTML = '';
    
  
    // Render a new li 
    blogInput.forEach((elmnt)=>{
        let blog=[elmnt.userInput, elmnt.titleInput, elmnt.commentInput];
        
        for (let i = 0; i<blog.length; i++){
            const li=document.createElement('li');
            li.textContent = blog[i];
            console.log(blog[i]);
            li.setAttribute('data-file', i);
            blogList.appendChild(li);
        }
})
}
init();
