const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');

type Category = 'general' | 'work' | 'gym' | 'hobby';

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

const categories: string[] = ['general', 'work', 'gym', 'hobby'];

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

const render = () => {
  // <li>
  // <label for="task-1">Wyrzucić śmieci</label>
  // <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
  // </li>
  tasksContainerElement.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement('li');
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.innerText = task.name;
    labelElement.setAttribute('for', id);

    const checkboxElement: HTMLInputElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener('change', () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener('click', (e: Event) => {
  const selectedRadioElement: HTMLInputElement = document.querySelector(
    'input[type=radio]:checked'
  );
  const selectedCategory: string = selectedRadioElement.value;
  e.preventDefault();
  addTask({ name: taskNameInputElement.value, done:false, category: selectedCategory });
  render();
});

addTask({ name: 'zrobić klatę', category: 'gym', done: false });
render();
