import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestData } from '../data/TestData';
import { Category } from '../models/Category';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    this.getTasks();
  }

  // getCategories(): Category[] {
  //   return TestData.categories;
  // }

  getTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  getTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter((task) => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
