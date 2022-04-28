import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../interfaces/photo.interface';
import { PhotoserviceService } from '../services/photoservice.service';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.scss'],
})
export class PhotosDetailsComponent implements OnInit {
  photo: Photo;
  jsonData: Photo = {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  };

  constructor(private route: ActivatedRoute, private ps: PhotoserviceService) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get('photoID'));
    let id: any = this.route.snapshot.paramMap.get('photoID');
    this.ps.getPhotoById(id).subscribe((photo) => {
      this.photo = photo;
    });
  }
}
