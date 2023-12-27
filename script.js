//your code here
document.addEventListener('DOMContentLoaded',function(){
	const draggables = document.querySelectorAll('.image');

	draggables.forEach(draggable => {
		draggable.addEventListener('dragstart', dragStart);
		draggable.addEventListener('dragover' , dragOver);
		draggable.addEventListener('dragenter', dragEnter);
		draggable.addEventListener('dragleave', dragLeave);
		draggable.addEventListener('drop', dragDrop);
		draggable.addEventListener('dragend', dragEnd);
	});

	let draggedElement = null;

	function dragStart(e){
		draggedElement = this;
		 e.dataTransfer.effectAllowed = 'move';
	    e.dataTransfer.setData('text/plain', this.style.backgroundImage);
	}

	function dragOver(e)
		{
			e.preventDefault();
		}

	function dragEnter()
		{
			this.classList.add('over');
		}
	
	function dragLeave()
		{
			this.classList.remove('over');
		}

	function dragDrop(e)
		{
			if(draggedElement !== this)
			{
				 const tempImage = this.style.backgroundImage;
		      this.style.backgroundImage = e.dataTransfer.getData('text/plain');
		      draggedElement.style.backgroundImage = tempImage;
			}
			this.classList.remove('over');
		}
	function dragEnd()
		{
			
			draggedElement = null;
		}
});