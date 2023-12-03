import { Component } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {
  comics:Comic[]=[]

  constructor(private comicService:ComicService){
    this.comicService.getComics().subscribe(res=>{
      this.comics=res
    })
  }
}
