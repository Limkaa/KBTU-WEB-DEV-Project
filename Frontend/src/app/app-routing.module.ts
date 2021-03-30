import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'albums', component: AlbumsComponent},
  // {path: 'albums/:id', component: AlbumDetailComponent},
  // {path: 'albums/:id/photos', component: AlbumPhotosComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
