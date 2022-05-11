import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListSectionComponent } from './components/list-section/list-section.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownCastPipe } from './dropdown-cast.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CarouselComponent, ListSectionComponent, DropdownComponent, DropdownCastPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
