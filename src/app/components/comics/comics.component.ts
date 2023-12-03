import { Component } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {
  comics:Comic[]=[]

  constructor(private comicService:ComicService){
    this.comicService.getComics().subscribe((res) => {
      res.forEach((comic) => {
        this.comicService.getFranchiseNameById(comic.franchiseId).subscribe((Franchise) => {
          comic.franchiseName = Franchise.franchiseName;
        });
      });
      this.comics = res;
    });
  }
}
