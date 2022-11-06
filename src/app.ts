import { render as renderCategories } from './helpers/render-categories.helper.js';
import  renderTasks  from './helpers/render-tasks.helper.js';
import { Category, Task } from './types/types.js';

const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const categoriesContainerElement: HTMLElement =
  document.querySelector('.categories');

let selectedCategory: Category;

// const categories: Category[] = ['general', 'work', 'gym', 'hobby'];
const categories: Category[] = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
}

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

type TaskAsTuple = [string, Category, boolean]
const task: TaskAsTuple = ["zrobić klatę", Category.GYM, false]

const taskName = task[0]
const taskCategory = task[1]
const taskDoneStatus = task[2]


addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement,updateSelectedCategory );
renderTasks(tasks, tasksContainerElement);
