import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatDrawerMode } from '@angular/material/sidenav'; // Import MatDrawerMode instead of MatDrawerModule
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TodoListComponent } from './todo-list/todo-list.component'; // Import MatSidenavModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import MatCheckboxModule


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSidenavModule, 
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
