import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [SharedModule, CommonModule, AboutMeRoutingModule],
})
export class AboutMeModule {}
