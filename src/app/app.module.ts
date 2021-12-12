import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablepageComponent } from './Components/tablepage/tablepage.component';
import { TemplateFormComponent } from './Components/template-form/template-form.component';
import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AuthGuard } from './Components/auth.guard';
import { AuthService } from 'src/Services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { ViewpageComponent } from './Components/viewpage/viewpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TablepageComponent,
    TemplateFormComponent,
    LoginpageComponent,
    HomepageComponent,
    ViewpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,ToastrModule.forRoot()
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
