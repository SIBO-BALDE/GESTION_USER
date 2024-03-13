import { Component, OnInit } from '@angular/core';
import { admin } from '../model/admin';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route: Router) {
    
  }

  idlastAdmin:number = 0;
  tabAdmin:any;
  // .idAdmin
  admins: admin[] = [];
  

//
  ngOnInit(): void {
    if (!localStorage.getItem("userkey") ) {
      localStorage.setItem("userkey",JSON.stringify(this.admins));
    }
  
    this.tabAdmin=JSON.parse(localStorage.getItem("userkey") || "[]")
    if(this.tabAdmin.length){
      this.idlastAdmin=this.tabAdmin[this.tabAdmin.length-1].idAdmin
    }
    
  }
 
  // nvariables declarees;
  email: string="";
  password: string="";

//function pour viider les champs
  viderChamps() {
    this.email = "";
    this.password = "";
  }

  //function wseetalert
  verifSweetAt(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    })
  }

  //function pour verifier les champs
  verifierChamps(){
    console.log(this.email, this.password);
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    if (this.email=="" || this.password=="" ) {
      // alert("Please enter a valid email")
      this.verifSweetAt("desole", "les champs sont vides", "error");
      
    }else if(!this.email.match(emailPattern)) {
      this.verifSweetAt("desole", "l'email n'est pas valide", "error");
    }else if(this.email==='admin@admin.com' && this.password=== 'admin'){
      let adminOb = {
        email: this.email,
        password: this.password,
        
      } 
      this.tabAdmin.push(adminOb);
      console.log(this.tabAdmin);
      localStorage.setItem("userkey", JSON.stringify(this.tabAdmin));
      this.verifSweetAt("Bravo", "Inscription reussi", "success");
      this.viderChamps()
      this.route.navigate(['userlist' ]);
    }
    else {
      this.verifSweetAt("desole", "ce compte n'hesite pas", "error");
      
      
    }
  }
  annulerConnexion(){
    Swal.fire({
      title: "Vous etes sur?",
      text: "vouloir annuler la connexion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33 ",
      confirmButtonText: "oui, annuler!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "annuler!",
          text: "votre connexion a été annuler avec succées",
          icon: "success"
        });
      }
    });
    this.viderChamps()

  }

    
  }
