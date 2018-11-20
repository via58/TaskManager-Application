import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Pipe } from '@angular/core';
import { AppRoutingModule,AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule}from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TaskfilterPipe} from 'src/app/filter/taskfilter.pipe';
import { pipe } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AppRouting,
    TaskfilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
