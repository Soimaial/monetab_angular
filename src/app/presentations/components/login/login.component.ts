import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      identifiant: new FormControl('', [Validators.required, Validators.minLength(15)]),
      mot_de_passe: new FormControl('', [Validators.required, Validators.minLength(15)]),
      
      
    })
  }  

}
