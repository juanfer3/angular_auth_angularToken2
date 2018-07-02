import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**Enviroment */
import {environment} from '../environments/environment';

/**Angular-Token2 Authentication */
import { Angular2TokenService } from 'angular2-token';



/**Conexion Http */
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* Routers */
import { routing } from './app.routing';

/**Forms Module */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**Angular Material Add Componentes */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/*Material Import*/
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule
} from '@angular/material';

/**Servicios */
import { AuthService } from './servicios/auth.service';
/**Component */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthLinksComponent } from './auth-links/auth-links.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthLinksComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    routing,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    MatDialogModule,
    
  ],
  providers: [
    Angular2TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
