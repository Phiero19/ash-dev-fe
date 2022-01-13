import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color: ThemePalette = 'primary';

 //Datos del paciente
  dni: any;
  nombre: any;
  apellido: any;
  historiaclinica: any;
  fecha: any;
  edad: any;

  //Receta
  medicamento1: any 
  cantidad1: any
  frecuencia1: any
  dias1: any

  medicamento2: any
  cantidad2: any
  frecuencia2: any
  dias2: any

  medicamento3: any 
  cantidad3: any
  frecuencia3: any
  dias3: any

  receta: any[] = [];

  Generar_receta(){
    this.receta = []
    console.log("-----GENERANDO RECETA----")
    let objReceta: any = {};
      if(this.medicamento1 != null){
        objReceta = {
          num: 1,
          medicamento: this.medicamento1,
          cantidad: this.cantidad1,
          frecuencia: this.frecuencia1,
          dias: this.dias1
        }
        this.receta.push(objReceta)
      }
      if(this.medicamento2 != null){
        objReceta = {
          num: 2,
          medicamento: this.medicamento2,
          cantidad: this.cantidad2,
          frecuencia: this.frecuencia2,
          dias: this.dias2
        }
        this.receta.push(objReceta)
      }
      if(this.medicamento3 != null){
        objReceta = {
          num: 3,
          medicamento: this.medicamento3,
          cantidad: this.cantidad3,
          frecuencia: this.frecuencia3,
          dias: this.dias3
        }
        this.receta.push(objReceta)
      }

    let obj : any;
    obj = {
      dni: this.dni,
      nombre: this.nombre,
      apellido: this.apellido,
      historiaclinica:this.historiaclinica,
      fecha:this.fecha,
      edad:this.edad,
      
      receta: this.receta,
    }
    console.log(obj)
  }

}
