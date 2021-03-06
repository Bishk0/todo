import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Task } from 'src/app/models/Task';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.getTasksByCategory(category);
  }
}
