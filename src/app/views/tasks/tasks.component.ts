import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/models/Task';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

   displayedColumns: string[] = [
    'color',
    'id',
    'title',
    'date',
    'priority',
    'category',
  ];
   dataSource: MatTableDataSource<Task>;

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe((tasks) => (this.tasks = tasks));

    this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  getPriorityColor(task: Task) {
    if (task.completed) {
      return '#F8F9FA'
    }
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return '#fff';
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
