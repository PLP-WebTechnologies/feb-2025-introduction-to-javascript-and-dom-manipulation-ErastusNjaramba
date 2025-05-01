let elementCount = 0;

function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'The text has been changed dynamically!';
}

function toggleStyle() {
    const textElement = document.getElementById('dynamicText');
    textElement.classList.toggle('highlight');
}

function addElement() {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('p');
    newElement.id = `element-${elementCount}`;
    newElement.textContent = `New Element ${elementCount + 1}`;
    newElement.style.color = '#28a745';
    newElement.style.margin = '5px 0';
    container.appendChild(newElement);
    elementCount++;
}

function removeElement() {
    const container = document.getElementById('elementContainer');
    const lastElement = document.getElementById(`element-${elementCount - 1}`);
    if (lastElement) {
        container.removeChild(lastElement);
        elementCount--;
    }
}