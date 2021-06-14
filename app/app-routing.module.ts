import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


const routes: Routes = [
  {path:'welcomepage',component:WelcomepageComponent },
  {path:'login',component:LoginComponent},
  {path:'registerpage',component:RegisterpageComponent}

];
export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
