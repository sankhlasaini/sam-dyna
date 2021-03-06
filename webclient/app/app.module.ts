import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Md2Module } from 'md2';
import { SamDynaElementComponent } from './sam-dyna-element/sam-dyna-element.component';
import { SamDynaViewComponent } from './sam-dyna-view/sam-dyna-view.component';
import { SamDynaElementService } from './sam-dyna-element-service';
import { SamDynaElementDataService } from './sam-dyna-element-data-service';
import { SamarthyaWebComponentsModule } from 'samarthyaWebcomponent';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    ReactiveFormsModule,
    FlexLayoutModule,
    SamarthyaWebComponentsModule
  ],
  providers: [
    SamDynaElementService,
    SamDynaElementDataService
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SamDynaElementComponent,
    SamDynaViewComponent,
  ],
})
export class AppModule { }
