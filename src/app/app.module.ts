import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalDirectivesComponent } from './directives/internal-directives/internal-directives.component';
import { PipeDemoComponent } from './pipes/pipe-demo/pipe-demo.component';
import { DefaultPipe } from './pipes/default.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { ObservableDemoComponent } from './Rxjs_Concept/observable-demo/observable-demo.component';
import { ActualExampleOFRxjsWithHttpComponent } from './Rxjs_Concept/actual-example-of-rxjs-with-http/actual-example-of-rxjs-with-http.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalDirectivesComponent,
    PipeDemoComponent,
    DefaultPipe,
    ReversePipe,
    ObservableDemoComponent,
    ActualExampleOFRxjsWithHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
