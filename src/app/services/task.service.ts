import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl="http://localhost:8090/task/GetTasks";
private url = "http://localhost:8090/task/DeleteTask"
  constructor(private http:HttpClient) { }
  gettasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  deletetask(taskid:any):Observable<Task>
  {
    console.log(taskid);
   return this.http.delete<Task>(`http://localhost:8090/task/DeleteTask/${taskid}`);
  }
  remind(task:any):Observable<any>
  {
    return this.http.put<any>(`http://localhost:8090/task/Update/${task.id}/${!task.reminder}`,{});

  }
  add(task:any):Observable<any>
  {
    console.log(task)
    return this.http.post<any>(`http://localhost:8090/task/Add`,task);

  }
}
