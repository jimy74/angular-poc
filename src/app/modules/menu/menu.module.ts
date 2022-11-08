import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { MenuComponent } from './components/menu.component';

@NgModule({
  declarations: [MenuComponent],  
  imports: [AppRoutingModule],
  exports: [MenuComponent]
})
export class MenuModule { }
