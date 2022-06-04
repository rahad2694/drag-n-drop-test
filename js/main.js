const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (const item of list_items) {
    item.addEventListener('dragstart', function () {
        // console.log('drag-Start');
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', function () {
        // console.log('drag-End');
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
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });

        list.addEventListener('drop', function (e) {
            // console.log(draggedItem.innerText);
            let column = this.children;

            if (draggedItem.innerText != column[0]?.innerText && draggedItem.innerText != column[1]?.innerText && draggedItem.innerText != column[2]?.innerText && draggedItem.innerText != column[3]?.innerText && draggedItem.innerText != column[4]?.innerText && draggedItem.innerText != column[5]?.innerText) {
                this.append(draggedItem);
            } else {
                console.log('Already Exists!')
            }
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });
    }


}