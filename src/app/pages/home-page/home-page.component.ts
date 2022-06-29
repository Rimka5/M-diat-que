import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Album.model';
import { Film } from 'src/app/models/Film.model';
import { AlbumHttpService } from 'src/app/services/album/album-http.service';
import { FilmHttpService } from 'src/app/services/film/film-http.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  films: Film[] = [];
  albums: Album[] = [];
  img_default: string =environment.IMG_DEFAULT;

  i:number=0;
    
  film1:string="Film";
  
  constructor(private serviceFilm:FilmHttpService,private serviceAlbum:AlbumHttpService) { 
    this.serviceFilm.findAll().subscribe((data)=> this.films =data);
    this.serviceAlbum.findAll().subscribe((data)=> this.albums=data);
  }

  ngOnInit(): void {
  }

}
