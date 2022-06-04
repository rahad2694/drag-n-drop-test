const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (const item of list_items) {
    item.addEventListener('dragstart', function () {
        console.log('drag-Start');
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', function () {
        console.log('drag-End');
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    for (const list of lists) {
        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0,0,0,0.2)';
        });

        list.addEventListener('dragleave', function (e) {
            // e.preventDefault();
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });

        list.addEventListener('drop', function (e) {
            // e.preventDefault();
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });
    }


}