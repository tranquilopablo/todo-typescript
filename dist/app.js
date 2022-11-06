import { render as renderCategories } from './helpers/render-categories.helper.js';
import renderTasks from './helpers/render-tasks.helper.js';
const tasksContainerElement = document.querySelector('.tasks');
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = ['general', 'work', 'gym', 'hobby'];
const tasks = [
    {
        name: 'Wyrzucić śmieci',
        done: false,
        category: 'hobby',
    },
    {
        name: 'Pójść na siłownię',
        done: true,
        category: 'gym',
    },
    {
        name: 'Nakarmić koty',
        done: false,
        category: 'work',
    },
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener('click', (e) => {
    // const selectedRadioElement: HTMLInputElement = document.querySelector(
    //   'input[type=radio]:checked'
    // );
    // const selectedCategory: Category = selectedRadioElement.value as Category;
    e.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
addTask({ name: 'zrobić klatę', category: 'gym', done: false });
renderCategories(categories, categoriesContainerElement, selectedCategory);
renderTasks(tasks, tasksContainerElement);
