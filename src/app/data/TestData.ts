import { Category } from '../models/Category';
import { Priority } from '../models/Priority';
import { Task } from '../models/Task';

export class TestData {
  static categories: Category[] = [
    { id: 1, title: 'Робота' },
    { id: 2, title: 'Сім’я' },
    { id: 3, title: 'Навчання' },
    { id: 4, title: 'Відпочинок' },
    { id: 5, title: 'Спорт' },
    { id: 6, title: 'Їжа' },
    { id: 7, title: 'Фінанси' },
    { id: 8, title: 'Гаджети' },
    { id: 9, title: 'Здоровя' },
    { id: 10, title: 'Автомобіль' },
    { id: 11, title: 'Ремонт' },
  ];

  static priorities: Priority[] = [
    { id: 1, title: 'Низький', color: '#e5e5e5' },
    { id: 2, title: 'Середній', color: '#85D1B2' },
    { id: 3, title: 'Високий', color: '#F1828D' },
    { id: 4, title: 'Дуже срочно!!', color: '#F1128D' },
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залити бензин повний бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10'),
    },

    {
      id: 2,
      title: 'Передати звіти начальнику управління',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11'),
    },

    {
      id: 3,
      title: 'Прибрати у себе в кімнаті, полити вазони',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
    },

    {
      id: 4,
      title: 'Сходити в парк з сімєю, запросити друзів',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-08-17'),
    },
    {
      id: 5,
      title: 'Знайти і вивчити підручник по квантовій фізиці',
      completed: false,
      category: TestData.categories[2],
    },
    {
      id: 6,
      title: 'Сходити на семінар по програмуванню',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2019-06-11'),
    },

    {
      id: 7,
      title: 'Знайти білети в Турцію, вибрати готель',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3],
    },
    {
      id: 8,
      title: 'Приготовити вечерю для всієї сімї (сьомга з картоплею)',
      completed: false,
      category: TestData.categories[5],
    },
    {
      id: 9,
      title: 'Підтягнутись 10 раз',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12'),
    },
    {
      id: 10,
      title: 'Пробігти 100 м',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4],
    },

    {
      id: 11,
      title: 'Организовать детский праздник ',
      completed: false,
    },

    {
      id: 12,
      title: 'Сходить на лекцию "Как научиться программировать на Java"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
    },
    {
      id: 13,
      title: 'Купить продукты на неделю',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2019-05-11'),
    },

    {
      id: 14,
      title: 'Провести собрание по поводу всех проектов',
      completed: true,
      category: TestData.categories[0],
    },

    {
      id: 15,
      title: 'Сдати екзамен по JavaScript',
      priority: TestData.priorities[2],
      completed: true,
    },

    {
      id: 16,
      title: 'Положити 100 000$ в банк на депозит',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6],
    },

    {
      id: 17,
      title: 'Попросить аванс на работе',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6],
    },

    {
      id: 18,
      title: 'Сдать анализы, проверить гемоглобин',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-12-11'),
    },

    {
      id: 19,
      title: 'Сравнить новый айпад с самсунгом',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2019-10-11'),
    },

    {
      id: 20,
      title: 'Футбол с сотрудниками',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-17'),
    },
  ];
}
