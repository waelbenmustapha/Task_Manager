import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addt:EventEmitter<any> = new EventEmitter();
text:string;
date:string;
subscription:Subscription;
showAddTask:boolean;
reminder:boolean=false;
  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddTask=value)) ;
  }
 
  ngOnInit(): void {
  }
  addtask()
  {
     if(!this.text){
       alert('Please Add text');
     }
    else if(!this.date){
      alert('Please Add date')
    }
  else{
    const newTask={
      text : this.text,
      date:this.date,
      reminder : this.reminder
    }
this.addt.emit(newTask);
this.text="";
this.date=""
this.reminder=false;
  }
  } 

}
