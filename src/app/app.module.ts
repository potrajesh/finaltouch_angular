import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { NotepadReadServiceComponent } from './notepadreadservice/notepadreadservice.component';
import { AwsComponent } from './aws/aws.component';
import { Readwordfile } from './readwordfile/readwordfile.component';
import { SearchComponent } from './search/search.component';
import { ThreadsComponent } from './threads/threads.component';
import { KubernatesComponent } from './kubernates/kubernates.component';
import { DockerComponent } from './docker/docker.component';
import { AzureComponent } from './azure/azure.component';
import { Java11Component } from './java11/java11.component';
import { SpringbatchComponent } from './springbatch/springbatch.component';
import { ApchekafkaComponent } from './apchekafka/apchekafka.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { CategoryQuestionsComponent } from './category-questions/category-questions.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NotepadReadServiceComponent,
    Readwordfile,
    AwsComponent,
    SearchComponent,
    ThreadsComponent,
    KubernatesComponent,
    DockerComponent,
    AzureComponent,
    Java11Component,
    SpringbatchComponent,
    ApchekafkaComponent,
    LeftSidebarComponent,
    CategoryQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
