import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent  implements OnInit {
  
  // variables
  name:string = '';
  email:string = '';
  users:any[] = [];

  constructor(private userServices:UsersService){}
  ngOnInit(): void {
    this.userServices.getUsers().subscribe(response => {
      this.users = response
    })
  }
  nouvelArticle = { 
    name: '', email: '' };
  isAjoutModalOuvert = false;


  ajouterArticle() {
    const nameTemporaire = this.nouvelArticle.name;
    const emailTemporaire = this.nouvelArticle.email;

    

    this.userServices.postUsers(this.nouvelArticle).subscribe((response: any) => {
      console.log('Réponse du service après ajout d\'article :', response);
      this.users.push(response); // Ajouter le nouvel article à la liste existante
      // this.fermerAjoutModal(); // Fermer le modal
      // console.log('tableau', this.tabPost);

      // Réinitialiser les champs en utilisant les valeurs temporaires
      this.nouvelArticle = { name: '', email: '' };
    });
    // Récupérer les articles locaux
    // const localArticles = 
    localStorage.setItem('post', JSON.stringify(this.users));

//     // Afficher les valeurs pour le débogage
    // console.log('Valeurs après ajout :', titreTemporaire, contenuTemporaire);
    // this.fermerAjoutModal()
  }


}
