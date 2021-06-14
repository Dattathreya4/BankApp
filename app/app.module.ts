import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import routes,{ AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterpageComponent,
    WelcomepageComponent,
    ServicesComponent,
    TransactionsComponent,
    AdminComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [LoginComponent]
  // bootstrap:[ServicesComponent]
  // bootstrap:[RegisterpageComponent]
  // bootstrap:[TransactionsComponent]
  // bootstrap:[WelcomepageComponent]
  // bootstrap:[AdminComponent]
  // // bootstrap:[ContactComponent]
})
export class AppModule { }
