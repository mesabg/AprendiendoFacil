import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//-- Importing Pages
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RegisterComponent } from './page/register/register.component';
import { CoursesComponent } from './page/courses/courses.component';
import { CourseDetailComponent } from './page/course-detail/course-detail.component';
import { LoginComponent } from './page/login/login.component';

//-- Importing Services
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
	{path: '', children: [
		{path: '', redirectTo: 'inicio', pathMatch: 'full'},
		{path: 'inicio', component: HomeComponent},
		{path: 'sobre-nosotros', component: AboutUsComponent, canActivate: [AuthGuardService]},
		{path: 'perfil', component: ProfileComponent},
		{path: 'registro', component: RegisterComponent},
		{path: 'iniciar-sesion', component: LoginComponent},
		{path: 'course-detail', component: CourseDetailComponent},
		{path: 'cursos', component: CoursesComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [AuthService, AuthGuardService]
})
export class AppRoutingModule { }
