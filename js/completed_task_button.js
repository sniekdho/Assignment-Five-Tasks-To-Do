// task one
const taskOne = document.getElementById('task-one');
document.getElementById('task-one').addEventListener('click', function()
{
    // show alert
    alert('Board Updated Successfully');

    // increase the completed task
    document.getElementById('completed-task-count').innerText++;

    // decrease the assigned task
    document.getElementById('assigned-task').innerText--;

    // description added with time
    const descriptionContainer = document.getElementById('description-container');

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('bg-[#f4f7ff]', 'p-2', 'text-xs', 'rounded-xl', 'text-center');

    let currentTime = new Date().toLocaleTimeString();

    descriptionParagraph.innerText = ` You have Complete The Task Add Dark Mode at ${currentTime}`;

    descriptionContainer.appendChild(descriptionParagraph);

    // disable the button
    taskOne.setAttribute('disabled', true);
    taskOne.style.backgroundColor = 'gray';
    taskOne.style.opacity = '0.2';
})


// task two
const taskTwo = document.getElementById('task-two');
document.getElementById('task-two').addEventListener('click', function()
{
    // show alert
    alert('Board Updated Successfully');

    // increase the completed task
    document.getElementById('completed-task-count').innerText++;

    // decrease the assigned task
    document.getElementById('assigned-task').innerText--;

    // description added with time
    let currentTime = new Date().toLocaleTimeString();
    const descriptionContainer = document.getElementById('description-container');

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('bg-[#f4f7ff]', 'p-2', 'text-xs', 'rounded-xl', 'text-center');
    descriptionParagraph.innerText = ` You have Complete The Task Add Dark Mode at ${currentTime}`;

    descriptionContainer.appendChild(descriptionParagraph);

    // disable the button
    taskTwo.setAttribute('disabled', true);
    taskTwo.style.backgroundColor = 'gray';
    taskTwo.style.opacity = '0.2';
})


// task three
const taskThree = document.getElementById('task-three');
document.getElementById('task-three').addEventListener('click', function()
{
    // show alert
    alert('Board Updated Successfully');

    // increase the completed task
    document.getElementById('completed-task-count').innerText++;

    // decrease the assigned task
    document.getElementById('assigned-task').innerText--;

    // description added with time
    let currentTime = new Date().toLocaleTimeString();
    const descriptionContainer = document.getElementById('description-container');

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('bg-[#f4f7ff]', 'p-2', 'text-xs', 'rounded-xl', 'text-center');
    descriptionParagraph.innerText = ` You have Complete The Task Add Dark Mode at ${currentTime}`;

    descriptionContainer.appendChild(descriptionParagraph);

    // disable the button
    taskThree.setAttribute('disabled', true);
    taskThree.style.backgroundColor = 'gray';
    taskThree.style.opacity = '0.2';
})


// task four
const taskFour = document.getElementById('task-four');
document.getElementById('task-four').addEventListener('click', function()
{
    // show alert
    alert('Board Updated Successfully');

    // increase the completed task
    document.getElementById('completed-task-count').innerText++;

    // decrease the assigned task
    document.getElementById('assigned-task').innerText--;

    // description added with time
    let currentTime = new Date().toLocaleTimeString();
    const descriptionContainer = document.getElementById('description-container');

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('bg-[#f4f7ff]', 'p-2', 'text-xs', 'rounded-xl', 'text-center');
    descriptionParagraph.innerText = ` You have Complete The Task Add Dark Mode at ${currentTime}`;

    descriptionContainer.appendChild(descriptionParagraph);

    // disable the button
    taskFour.setAttribute('disabled', true);
    taskFour.style.backgroundColor = 'gray';
    taskFour.style.opacity = '0.2';
})


// task five
const taskFive = document.getElementById('task-five');
document.getElementById('task-five').addEventListener('click', function()
{
    // show alert
    alert('Board Updated Successfully');

    // increase the completed task
    document.getElementById('completed-task-count').innerText++;

    // decrease the assigned task
    document.getElementById('assigned-task').innerText--;

    // description added with time
    let currentTime = new Date().toLocaleTimeString();
    const descriptionContainer = document.getElementById('description-container');

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('bg-[#f4f7ff]', 'p-2', 'text-xs', 'rounded-xl', 'text-center');
    descriptionParagraph.innerText = ` You have Complete The Task Add Dark Mode at ${currentTime}`;

    descriptionContainer.appendChild(descriptionParagraph);

    // disable the button
    taskFive.setAttribute('disabled', true);
    taskFive.style.backgroundColor = 'gray';
    taskFive.style.opacity = '0.2';
})


// task six
const taskSix = document.getElementById('task-six');
document.getElementById('task-six').addEventListener('click', function()
{
    // show alert
    alert('Board Updated Successfully');

    // increase the completed task
    document.getElementById('completed-task-count').innerText++;

    // decrease the assigned task
    document.getElementById('assigned-task').innerText--;

    // description added with time
    let currentTime = new Date().toLocaleTimeString();
    const descriptionContainer = document.getElementById('description-container');

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('bg-[#f4f7ff]', 'p-2', 'text-xs', 'rounded-xl', 'text-center');
    descriptionParagraph.innerText = ` You have Complete The Task Add Dark Mode at ${currentTime}`;

    descriptionContainer.appendChild(descriptionParagraph);

    // disable the button
    taskSix.setAttribute('disabled', true);
    taskSix.style.backgroundColor = 'gray';
    taskSix.style.opacity = '0.2';
})


// clear history button
document.getElementById('clear-history').addEventListener('click', function()
{
    document.getElementById('description-container').innerText = '';
})


// new html file
document.getElementById('blogs').addEventListener('click', function()
{
    window.location.href = 'blog.html';
})