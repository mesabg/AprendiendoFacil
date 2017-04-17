import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { MenuHighlightDirective } from './component/header/directives/menu-highlight.directive';
import { CoursesComponent } from './page/courses/courses.component';
import { LoginComponent } from './page/login/login.component';
import { CourseDetailComponent } from './page/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    AboutUsComponent,
    MenuHighlightDirective,
    CoursesComponent,
    LoginComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
