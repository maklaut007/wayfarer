import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CitiesComponent } from './cities/cities.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [
  {
    path: 'cities/:id',
    component: CitiesComponent,
  },
  {
    path: '',
    component: CarouselComponent,
  },

  {
    path: 'cities/:cityid/post/:id',
    component: PostPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
