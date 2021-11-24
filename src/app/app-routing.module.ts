import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalDirectivesComponent } from './directives/internal-directives/internal-directives.component';
import { PipeDemoComponent } from './pipes/pipe-demo/pipe-demo.component';
import { ActualExampleOFRxjsWithHttpComponent } from './Rxjs_Concept/actual-example-of-rxjs-with-http/actual-example-of-rxjs-with-http.component';
import { ObservableDemoComponent } from './Rxjs_Concept/observable-demo/observable-demo.component';

const routes: Routes = [
  {path:'internal-directives',component:InternalDirectivesComponent},
  {path:'pipes',component:PipeDemoComponent},
  {path:'obs',component:ObservableDemoComponent},
  {path:'obshttp',component:ActualExampleOFRxjsWithHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
