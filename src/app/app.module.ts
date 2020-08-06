import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { HomeloginComponentComponent } from './components/homelogin-component/homelogin-component.component';
import { from } from 'rxjs';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { AreasComponent } from './components/areas/areas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { UserSinginComponent } from './components/user-singin/user-singin.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'login', component: HomeloginComponentComponent },
  { path: 'registro', component: RegistroUsuariosComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'servicios', component: ServiciosComponent},
  { path: 'showAllUser', component: ShowUsersComponent },
  { path: 'editUser/:idUser', component: UpdateUsersComponent },
  { path: 'deleteUser/:idUser', component: ShowUsersComponent },
]

@NgModule({ 
  /** Componentes */
  declarations: [
    AppComponent,
    MenuComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    HomeloginComponentComponent,
    RegistroUsuariosComponent,
    AreasComponent,
    ServiciosComponent,
    UserSinginComponent,
    ShowUsersComponent,
    UpdateUsersComponent
  ],
  imports: [ /** Modulos de Angular */
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    /** Todos los servicios */
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
