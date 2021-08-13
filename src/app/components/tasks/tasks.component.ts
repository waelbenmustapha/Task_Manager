import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks : Task[]=[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.gettasks().subscribe((tasks)=>this.tasks=tasks);
  }
  delete(taskid:any)
 {
   this.taskService.deletetask(taskid).subscribe(()=>(this.taskService.gettasks().subscribe((tasks)=>this.tasks=tasks)))
 }
 remind(task:any)
 {
  this.taskService.remind(task).subscribe(()=>(this.taskService.gettasks().subscribe((tasks)=>this.tasks=tasks)))

 }
 add(task:any)
 {
  this.taskService.add(task).subscribe(()=>(this.taskService.gettasks().subscribe((tasks)=>this.tasks=tasks)))

 }
}
