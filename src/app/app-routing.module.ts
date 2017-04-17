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

const routes: Routes = [
	{path: '', children: [
		{path: '', redirectTo: 'home', pathMatch: 'full'},
		{path: 'home', component: HomeComponent},
		{path: 'about-us', component: AboutUsComponent},
		{path: 'profile', component: ProfileComponent},
		{path: 'register', component: RegisterComponent},
		{path: 'login', component: LoginComponent},
		{path: 'course-detail', component: CourseDetailComponent},
		{path: 'courses', component: CoursesComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
