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
import { PageOverheadDirective } from './directives/page-overhead/page-overhead.directive';
import { TranslateService } from './translate/translate.service';
import { TRANSLATION_PROVIDERS } from './translate/translations';
import { TranslatePipe } from './translate/translate.pipe';
import { AuthGuardService } from './services/auth-guard.service';
import { UserDataService } from './services/user-data.service';
import { AbcComponent } from './page/abc/abc.component';
import { AlimentosComponent } from './page/alimentos/alimentos.component';
import { AnimalesComponent } from './page/animales/animales.component';
import { NumerosComponent } from './page/numeros/numeros.component';
import { DetalleAlimentosComponent } from './page/detalle-alimentos/detalle-alimentos.component';
import { DetalleAnimalesComponent } from './page/detalle-animales/detalle-animales.component';
import { DetalleNumerosComponent } from './page/detalle-numeros/detalle-numeros.component';
import { DetalleColoresComponent } from './page/detalle-colores/detalle-colores.component';
import { ColoresComponent } from './page/colores/colores.component';
import { ZoomDirective } from './directives/zoom/zoom.directive';
import { ComentariosComponent } from './component/comentarios/comentarios.component';
import { ResponseComponent } from './component/response/response.component';

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
    CourseDetailComponent,
    PageOverheadDirective,
    TranslatePipe,
    AbcComponent,
    AlimentosComponent,
    AnimalesComponent,
    NumerosComponent,
    DetalleAlimentosComponent,
    DetalleAnimalesComponent,
    DetalleNumerosComponent,
    DetalleColoresComponent,
    ColoresComponent,
    ZoomDirective,
    ComentariosComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService, AuthGuardService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
