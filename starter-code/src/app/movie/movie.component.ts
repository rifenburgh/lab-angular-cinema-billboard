import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../films.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  contactId: string;
  movie: Object;

  constructor(private myRoute: ActivatedRoute, private filmService: FilmsService) { }

  ngOnInit() {
    this.myRoute.params.subscribe((paramsResult) => {
      this.contactId = paramsResult['id'];
      this.movie = this.filmService.getMovie(this.contactId);
      console.log(this.movie);
      // console.log(this.theMovies[1]);
      // ids: number = number(this.contactId);
      // theMovie = this.theMovies[ids];
    });
  }

}
