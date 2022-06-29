import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/Film.model';

import { Album } from 'src/app/models/Album.model';
import { AlbumHttpService } from 'src/app/services/album/album-http.service';
import { FilmHttpService } from 'src/app/services/film/film-http.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  films: Film[] = [];
  albums: Album[] = [];


  film:string="Film";
  album:string="Album";

  
  constructor (private serviceFilm:FilmHttpService,private serviceAlbum:AlbumHttpService) { 
    this.serviceFilm.findAll().subscribe((data)=> this.films =data);
    this.serviceAlbum.findAll().subscribe((data)=> this.albums=data);
    
  }
  ngOnInit(): void {}

  

}
