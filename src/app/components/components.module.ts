import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CamComponentComponent } from  './cam-component/cam-component.component';

@NgModule({
  declarations: [CamComponentComponent ],
  imports: [ CommonModule,FormsModule, IonicModule  ],
  exports:[CamComponentComponent]
})
export class ComponentsModule { }