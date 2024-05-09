
const blogList = document.querySelector('#card');
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
    
    let count=0;
    // Render new entries
    blogInput.forEach((elmnt)=>{
        count++;
        //Read the array of objects and put it in a linear array
        let blog=[`Blog#${count}` ,"User", elmnt.userInput, "Title of Posting",elmnt.titleInput, "Content", elmnt.commentInput];
        //Loop through array and set the Elements
        for (let i = 0; i<blog.length; i++){
            if(i===0){
                const h3=document.createElement('h3');
                h3.textContent = blog[i];
                h3.setAttribute('class','blog');
                blogList.appendChild(h3);
            }else if(i===1){
                const h4=document.createElement('h4');
                h4.textContent = blog[i]; 
                h4.setAttribute('class','userfield');
                blogList.appendChild(h4);  
            }else if (i===2){
                const p1=document.createElement('p');
                p1.textContent = blog[i];
                p1.setAttribute('class','textfield');
                blogList.appendChild(p1);
            }else if (i===3){
                const h4=document.createElement('h4');
                h4.textContent = blog[i]; 
                h4.setAttribute('class','userfield');
                blogList.appendChild(h4);
            }else if (i===4){
                const p1=document.createElement('p');
                p1.textContent = blog[i];
                p1.setAttribute('class','textfield');
                blogList.appendChild(p1);
            }else if (i===5){
                const h4=document.createElement('h4');
                h4.textContent = blog[i]; 
                h4.setAttribute('class','userfield');
                blogList.appendChild(h4); 
            }else if (i===6){
                const p1=document.createElement('p');
                p1.textContent = blog[i];
                p1.setAttribute('class','textend');
                blogList.appendChild(p1); 
            }
            
            // console.log(h3);
            //h3.setAttribute('data-file', i);
            
        }
})
}
init();
