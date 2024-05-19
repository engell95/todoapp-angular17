import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import {Task}  from '../../models/task.model'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar el angular CLI',
      completed: true
    },
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear Componente',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear Servicio',
      completed: false
    }
  ]);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
    input.value = '';
  }

  addTask(title:string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }
    this.tasks.update((tasks) =>[...tasks,newTask]);
  }

  deleteTask(index:number){
    this.tasks.update((tasks) => {
      tasks.splice(index, 1);
      return tasks;
    });
  }

  updateTask(index:number){
    this.tasks.update((tasks) => {
      return tasks.map((tasks,position) =>{
        if(position == index){
          return {
            ...tasks,
            completed:!tasks.completed
          }
        }
        return tasks;
      })
    });
  }

  

}
