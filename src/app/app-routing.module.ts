import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NotepadReadServiceComponent } from './notepadreadservice/notepadreadservice.component';
import { AwsComponent } from './aws/aws.component';
import { ThreadsComponent } from './threads/threads.component';
import { Readwordfile } from './readwordfile/readwordfile.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
//canActivate: [AuthGuard] 
const routes: Routes = [
  { path: 'welcome', component: LeftSidebarComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'corejava', component: NotepadReadServiceComponent },
  {path:'home',component:SearchComponent},
  { path: 'spring', component: NotepadReadServiceComponent },
  { path: 'hibernate', component: NotepadReadServiceComponent }, 
  { path: 'springboot', component: NotepadReadServiceComponent},
  { path: 'angular', component: NotepadReadServiceComponent },
  { path: 'react', component: NotepadReadServiceComponent },
  { path: 'sql', component: NotepadReadServiceComponent },
  { path: 'microservices', component: NotepadReadServiceComponent },
  { path: 'kubernate', component: NotepadReadServiceComponent },
  { path: 'logical', component: NotepadReadServiceComponent },
  { path: 'aws', component: AwsComponent },
  { path: 'tek', component: Readwordfile },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
