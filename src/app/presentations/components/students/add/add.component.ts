import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit{
  formAdd!: FormGroup;
  ngOnInit(): void {
    this.formAdd = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(10)]), // Corrigé la longueur minimale
      prenom: new FormControl('', [Validators.required, Validators.minLength(2)]), // Corrigé la longueur minimale
      genre: new FormControl('', [Validators.required]), // Champ Genre
      matricule: new FormControl('', [Validators.required, Validators.minLength(5)]), // Champ Matricule
      date_naissance: new FormControl('', [Validators.required]), // Champ Date de Naissance
      classe: new FormControl('', [Validators.required]), // Champ Classe
      telephone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]), // Champ Téléphone
      ville: new FormControl('', [Validators.required]) // Champ Ville
      
    })

  }  

  isInvalidInput(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }



}
