import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  tasks =[
    'Instalar el angular CLI',
    'Crear proyecto',
    'Crear Componente',
    'Crear Servicio'
  ];
  name= signal('Engell');
  age=28;
  disabled = true;
  img='https:/w3schools.com/hwoto/img_avatar.png';

  person={
    name:'Engell',
    age:28,
    avatar:'https:/w3schools.com/hwoto/img_avatar.png'
  };
  
  clickHandler(){
    alert('hola');
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);

    console.log(event);
  }
  

}
