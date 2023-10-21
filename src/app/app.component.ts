import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Task } from 'src/models/task';
import {MyDialogComponent} from './my-dialog/my-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  constructor(public dialog: MatDialog){}

  //lista de tarefas
  tarefas: Task[] = [
    new Task({name: "estudar Angular",
            descricao: "preciso estudar angular..."       
  })
  ]

//metodo para abrir nosso dialog
  openDialog():void{
    const dialogRef = this.dialog.open(MyDialogComponent);
    dialogRef.afterClosed().subscribe(res =>{
      if(res){
        this.tarefas.push(res);
      }
    })
  }



}
