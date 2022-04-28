import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosDetailsComponent } from './photos-details/photos-details.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:photoID', component: PhotosDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
