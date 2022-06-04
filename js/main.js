const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (item of list_items){
    item.addEventListener('dragstart',function(){
        console.log('drag-Start');
        draggedItem = item;
        setTimeout(function(){
            item.style.display='none';
        },0);
    });

    item.addEventListener('dragend',function(){
        console.log('drag-End');
        setTimeout(function(){
            draggedItem.style.display='block';
            draggedItem = null;
        },0);
    });

    for(list of lists){
        list.addEventListener('dragover',function(e){
            e.preventDefault();
        })
    }


}