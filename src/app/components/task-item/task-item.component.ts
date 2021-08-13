import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task:Task;
@Output() ondeletetask:EventEmitter<any>=new EventEmitter();
@Output() onremind:EventEmitter<any>=new EventEmitter();
faTimes=faTimes;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }
  deletetask(taskid:any)
  {
    this.ondeletetask.emit(taskid);
  }
remind(task:any)
{
  this.onremind.emit(task)
}
}
