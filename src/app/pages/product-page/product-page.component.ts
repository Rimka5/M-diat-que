import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/Film.model';
import { AlbumHttpService } from 'src/app/services/album/album-http.service';
import { FilmHttpService } from 'src/app/services/film/film-http.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  //datas=;
  data! : any;

  
  typeProduit:string="Film";

  constructor(private route:ActivatedRoute,private router:Router,private serviceFilm:FilmHttpService,private serviceAlbum:AlbumHttpService) { }

  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('type') == "Film"){
      const id= this.route.snapshot.paramMap.get('id');
       
      if(id){
        this.data = this.serviceFilm.findById(parseInt(id)).subscribe((data)=> this.data=data);
      }
        
    }
    else{
      const id= this.route.snapshot.paramMap.get('id');
       
      if(id){
        this.data = this.serviceAlbum.findById(parseInt(id)).subscribe((data)=> this.data=data);
      }
    }

  }

}