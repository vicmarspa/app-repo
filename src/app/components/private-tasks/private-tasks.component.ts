import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  privateTasks = [];
  tasks = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.getPrivateTasks()
      .subscribe(
        res => this.privateTasks = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/signin']);
            }
          }
        }
      );

      this.taskService.getDocumentsPrivate()
      .subscribe(
        res => {
          this.tasks = res;
        },
        err => console.log(err)
      )
  



  }

////////
//
//ELIMINAR DOCUMENTO
////////
  deleteDocument(id: string) {

    this.taskService.deleteDocumentsPrivate(id)
      .subscribe(res => {
        console.log(res)
        location.reload();
      })
  }








}
