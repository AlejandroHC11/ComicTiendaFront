import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-delete-comic',
  templateUrl: './delete-comic.component.html',
  styleUrls: ['./delete-comic.component.css']
})
export class DeleteComicComponent {
  comicId?: number;

  constructor(private route:ActivatedRoute, private comicService:ComicService,private router: Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.comicId = +params['comicId'];
    })
    this.comicService.deleteComic(this.comicId).subscribe(
      (response) => {
        alert('Comic borrado exitosamente');
        this.router.navigate(['/comics']);
      }
    );
  }
}
