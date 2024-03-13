import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {path: 'auth', component:AuthComponent},
  {path:'userlist', component:UserslistComponent},
  {path: '', redirectTo:'auth', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
