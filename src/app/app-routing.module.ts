import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CitiesComponent } from './cities/cities.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {
    path: 'cities/:id',
    component: CitiesComponent,
  },

  {
    path: '',
    component: CarouselComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
