import { Component } from '@angular/core';
import { Franchise } from 'src/app/models/franchise';
import { FranchiseService } from 'src/app/services/franchise.service';
import { ComicService } from 'src/app/services/comic.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-comic',
  templateUrl: './new-comic.component.html',
  styleUrls: ['./new-comic.component.css']
})
export class NewComicComponent {
  franchises:Franchise[]=[]
  comicForm?: FormGroup;

  form:FormGroup = this.formBuilder.group({
    imageLink: ['', Validators.required],
    comicName: ['', Validators.required],
    franchiseId: ['', Validators.required],
    stock: ['', Validators.required],
    price: ['', Validators.required]
  })
  constructor(private router: Router,private comicService:ComicService,private franchiseService: FranchiseService, private formBuilder: FormBuilder){
    this.franchiseService.getFranchises().subscribe((res) => {
      this.franchises = res;
    });
  }
  guardar():void{
    if (this.form.valid) {
      const comicData = this.form.value;

      this.comicService.createComic(comicData).subscribe(
        (response) => {
          alert('Comic creado exitosamente');
          this.router.navigate(['/comics']);
        }
      );
    }
  }
}
