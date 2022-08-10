import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUrlComponent } from './components/input-url/input-url.component';
import { FooterComponent } from './components/footer/footer.component';

import { SaveComponent } from './pages/save/save.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    InputUrlComponent,
    FooterComponent,
    SaveComponent,
    HomepageComponent,
    MenuContainerComponent,
    MenuButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
