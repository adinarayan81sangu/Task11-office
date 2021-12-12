import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { TablepageComponent } from './Components/tablepage/tablepage.component';
import { TemplateFormComponent } from './Components/template-form/template-form.component';
import { ViewpageComponent } from './Components/viewpage/viewpage.component';

const routes: Routes = [
  {path:"",component:LoginpageComponent,pathMatch:'full'},
  {path:"table",component:TablepageComponent},
  {path:"Adduser",component:TemplateFormComponent},
  {path:"Viewpage",component:ViewpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
