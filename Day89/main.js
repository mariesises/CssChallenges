
function generateGrid(parentNode, count) {
    if (!(parentNode instanceof Element)) {
        console.error('The first element should be a valid HTML');
        return;
    }


    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        fragment.appendChild(item);
    }

    parentNode.appendChild(fragment);
}

const content = document.querySelector('.content');

generateGrid(content, 100); 