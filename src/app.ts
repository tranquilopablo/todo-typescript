import { render as renderCategories } from './helpers/render-categories.helper.js';
import  renderTasks  from './helpers/render-tasks.helper.js';
import { Category, Task } from './types/types.js';

const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const categoriesContainerElement: HTMLElement =
  document.querySelector('.categories');

let selectedCategory: Category;

const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener('click', (e: Event) => {
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
renderCategories(categories, categoriesContainerElement,selectedCategory );
renderTasks(tasks, tasksContainerElement);
