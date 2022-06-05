// Declaring variables for the array of boxes and for the array of columns:
const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

// looping through the array of box items:
for (const item of list_items) {
    item.addEventListener('dragstart', function () {
        draggedItem = item;

        setTimeout(function () {
            item.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    // looping through columns to ensure drag events and drop an item with logic:
    for (const list of lists) {
        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0,0,0,0.3)';
        });

        list.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });

        list.addEventListener('drop', function (e) {
            let targetColumnMembers = this.children;

            // Checking it any of the boxes in the targeted column matches with our dragged box or not:
            if (draggedItem.innerText != targetColumnMembers[0]?.innerText && draggedItem.innerText != targetColumnMembers[1]?.innerText && draggedItem.innerText != targetColumnMembers[2]?.innerText && draggedItem.innerText != targetColumnMembers[3]?.innerText && draggedItem.innerText != targetColumnMembers[4]?.innerText && draggedItem.innerText != targetColumnMembers[5]?.innerText) {
                this.append(draggedItem);
            } else {
                // console.log('Already Exists!')
            }
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });
    }


}