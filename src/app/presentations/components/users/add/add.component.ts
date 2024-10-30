import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {
  formAdd!: FormGroup;
  ngOnInit(): void {
    this.formAdd = new FormGroup({
      Pseudo: new FormControl('', [Validators.required, Validators.minLength(15)]),
      mot_de_pase: new FormControl('', [Validators.required, Validators.minLength(15)]),
      confirmer_mot_de_pase: new FormControl('', [Validators.required, Validators.minLength(15)]),

      
      
    })
  } 
  
  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty);
  }


}
