import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {MainViewModule} from "./views/main-view/main-view.module";
import {MinorViewModule} from "./views/minor-view/minor-view.module";
import {LoginModule} from "./views/login/login.module";
import {RegisterModule} from "./views/register/register.module";

// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductNewComponent } from './views/product-new/product-new.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductNewComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,

    // Views
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,

    // Modules
    LayoutsModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
