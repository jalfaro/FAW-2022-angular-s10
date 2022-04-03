import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: '',
      apellido: '',
      sexo : '2',
      personaje: 'option3'
    })
  }

  mostrarInfo() {
    console.log(this.form.controls['nombre'].value);
    alert ("nombre : " + this.form.controls['nombre'].value + ", apellido : " + this.form.controls['apellido'].value +
      ", sexo: " + (this.form.controls['sexo'].value == '1'? "masculino" : "femenino") + "personaje : " + this.form.controls['personaje'].value);
  }

}
