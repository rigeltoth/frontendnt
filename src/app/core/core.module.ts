import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    SkeletonComponent,
  ],
  imports: [
    CoreRoutingModule,
    SharedModule
  ],
  exports:[
    NavigationComponent,
    SkeletonComponent,
    FooterComponent
  ]
})
export class CoreModule { }
