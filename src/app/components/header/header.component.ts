import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'FFS';
  something : number=24;
  subscription:Subscription;
  showAddTask:boolean=true;
  constructor(private uiservice:UiService,private router:Router) {
    this.subscription = this.uiservice.onToggle().subscribe((value)=>(this.showAddTask=value)) ;
   }

  ngOnInit(): void {
  }
  addtask()
  {this.uiservice.showtask();
  this.showAddTask=!this.showAddTask}
  hasroute(route:string)
  {
return this.router.url===route;
  }
}
