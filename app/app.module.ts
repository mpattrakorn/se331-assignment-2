import { FileNotFoundComponent } from './filenotfound/file-not-found.component';
import { ProductRoutingModule } from './Product/Product-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/students.component';
import {TimeComponent} from './time/time.component';
import {FormsModule} from '@angular/forms';
import {StudentDataService} from './services/students-data.service';
import {StudentDataFileService} from './services/students-data-file.service';
import {HttpModule} from '@angular/http';
import {ProductComponent} from './Product/add/Product.add.component';
import {ProductDataService} from './services/product-data.service';
import {ProductDataFileService} from './services/product-data-file.service';
import {InformationComponent} from './Product/information/information.component';
import {infoListComponent} from './Product/infoList/infoList.component';
import {AppRoutingModule} from "./app-routing.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


@NgModule({
 declarations: [ AppComponent,
				StudentsComponent,
				TimeComponent,
				ProductComponent,
				InformationComponent,
				infoListComponent,
				MenuComponent,
				FileNotFoundComponent],
 imports: [BrowserModule , FormsModule, HttpModule, ProductRoutingModule, AppRoutingModule],
 bootstrap: [AppComponent],
 providers: [ProductDataService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {}