import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header-component';
import { CatalogAdminComponent } from './components/catalog-admin/catalog-admin-component';


import { Web3Service } from './services/web3.service';
import { WindowRefService } from './services/window-ref.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
	HeaderComponent,
	CatalogAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AppRoutingModule
  ],
  providers: [
	  Web3Service,
	  WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
