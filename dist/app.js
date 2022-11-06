import { render as renderCategories } from './helpers/render-categories.helper.js';
import renderTasks from './helpers/render-tasks.helper.js';
import { Category } from './types/types.js';
const tasksContainerElement = document.querySelector('.tasks');
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
// const categories: Category[] = ['general', 'work', 'gym', 'hobby'];
const categories = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY];
const tasks = [
    {
        name: 'Wyrzucić śmieci',
        done: false,
        category: Category.HOBBY,
    },
    {
        name: 'Pójść na siłownię',
        done: true,
        category: Category.GYM,
    },
    {
        name: 'Nakarmić koty',
        done: false,
        category: Category.WORK,
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
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
const task = ["zrobić klatę", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
