import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Franchise } from 'src/app/models/franchise';
import { FranchiseService } from 'src/app/services/franchise.service';
import { ComicService } from 'src/app/services/comic.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-update-comic',
  templateUrl: './update-comic.component.html',
  styleUrls: ['./update-comic.component.css']
})
export class UpdateComicComponent {
  comicForm?: FormGroup;
  franchises:Franchise[]=[]
  comicId?: number;

  constructor(private router: Router, private route:ActivatedRoute, private comicService:ComicService,private franchiseService: FranchiseService,private formBuilder: FormBuilder){
    this.franchiseService.getFranchises().subscribe((res) => {
      this.franchises = res;
    });
  }


  form:FormGroup = this.formBuilder.group({
    comicId: ['', Validators.required],
    imageLink: ['', Validators.required],
    comicName: ['', Validators.required],
    franchiseId: ['', Validators.required],
    stock: ['', Validators.required],
    price: ['', Validators.required]
  })
  
  guardar():void{
    if (this.form.valid) {
      const comicData = this.form.value;
      
      this.comicService.updateComic(comicData).subscribe(
        (response) => {
          alert('Comic actualizado exitosamente');
          this.router.navigate(['/comics']);
        }
      );
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.comicId = +params['comicId'];
      this.comicService.getComicById(this.comicId).subscribe(comic => {
        this.form.patchValue({
          comicId: comic.comicId,
          imageLink: comic.imageLink,
          comicName: comic.comicName,
          franchiseId: comic.franchiseId,
          stock: comic.stock,
          price: comic.price
        });
      });
    });
    
  }
}
