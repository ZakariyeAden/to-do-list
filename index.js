document.querySelector('#push').onclick = function (){
  if(document.querySelector('#newtask input').value.length == 0){
    alert('Please Enter Task')
  }
  else{
    document.querySelector('#tasks').innerHTML += `
      <div class="task">
      <span id="taskname">
        ${document.querySelector('#newtask input').value}
      </span>  
        <button class="delete">
          <ion-icon name="trash-outline" class="trash-icon"></ion-icon>
        </button>
      </div>
    
      `;
      let currentTask = document.querySelectorAll('.delete');
      for(let i = 0; i < currentTask.length; i++){
        currentTask[i].onclick = function(){
          this.parentNode.remove();
        }
      }
      let tasks = document.querySelectorAll('.task');
      for(let i = 0; i< tasks.length; i++){
        tasks[i].onclick = function(){
          this.classList.toggle('completed')
        }
      }
      document.querySelector('#newtask input').value = "";
  }
}