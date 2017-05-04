import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//-- Importing Pages
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RegisterComponent } from './page/register/register.component';
import { CoursesComponent } from './page/courses/courses.component';
import { CourseDetailComponent } from './page/course-detail/course-detail.component';
import { DetalleAlimentosComponent } from './page/detalle-alimentos/detalle-alimentos.component';
import { DetalleNumerosComponent } from './page/detalle-numeros/detalle-numeros.component';
import { DetalleAnimalesComponent } from './page/detalle-animales/detalle-animales.component';
import { DetalleColoresComponent } from './page/detalle-colores/detalle-colores.component';
import { LoginComponent } from './page/login/login.component';
import { AbcComponent } from './page/abc/abc.component';
import { AlimentosComponent } from './page/alimentos/alimentos.component';
import { AnimalesComponent } from './page/animales/animales.component';
import { NumerosComponent } from './page/numeros/numeros.component';
import { ColoresComponent } from './page/colores/colores.component';

//-- Importing Services
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
	{path: '', children: [
		{path: '', redirectTo: 'inicio', pathMatch: 'full'},
		{path: 'inicio', component: HomeComponent},
		{path: 'sobre-nosotros', component: AboutUsComponent },
		{path: 'perfil', component: ProfileComponent},
		{path: 'registro', component: RegisterComponent},
		{path: 'iniciar-sesion', component: LoginComponent},
		{path: 'detalle-curso-abc', component: CourseDetailComponent},
		{path: 'detalle-curso-alimentos', component: DetalleAlimentosComponent},
		{path: 'detalle-curso-numeros', component: DetalleNumerosComponent},
		{path: 'detalle-curso-animales', component: DetalleAnimalesComponent},
		{path: 'detalle-curso-colores', component: DetalleColoresComponent},
		{path: 'cursos', component: CoursesComponent},
		{path: 'abc', component: AbcComponent},
		{path: 'animales', component: AnimalesComponent},
		{path: 'numeros', component: NumerosComponent},
		{path: 'comida', component: AlimentosComponent},
		{path: 'colores', component: ColoresComponent},
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [AuthService, AuthGuardService]
})
export class AppRoutingModule { }
