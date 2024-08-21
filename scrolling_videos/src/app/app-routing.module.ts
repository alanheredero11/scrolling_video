import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMPTY_STRING, INTERNAL_PATHS } from 'src/app/data/constants/routes';
import { SkeletonComponent } from 'src/app/layout/skeleton/skeleton.component';
import { HomeModule } from 'src/app/modules/home/home.module';
import { AboutMeComponent } from './modules/about-me/pages/about-me/about-me.component';

const routes: Routes = [
  {
    path: EMPTY_STRING,
    component: SkeletonComponent,
    children: [
      {
        path: INTERNAL_PATHS.PAGES_HOME,
        loadChildren: () =>
          import('src/app/modules/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
      },
      {
        path: INTERNAL_PATHS.PAGES_ABOUT_DEFAULT,
        loadChildren: () =>
          import('src/app/modules/about-me/about-me.module').then(
            (m): typeof AboutMeComponent => m.AboutMeModule
          ),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
