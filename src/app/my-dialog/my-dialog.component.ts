import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { Task } from 'src/models/task';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
  constructor(public dialogRef: MatDialogRef<MyDialogComponent>){
  }
  fechar():void{
    this.dialogRef.close();
  }

  novaTarefa = {
    name: '',
    descricao: ''
  }
  adicionarTarefa(): void {
    const newTask = new Task (
      {
      name: this.novaTarefa.name,
      descricao: this.novaTarefa.descricao
      }
      );
      this.dialogRef.close(newTask);
  }
}
