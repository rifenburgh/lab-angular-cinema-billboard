import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  theMovies = this.filmService.movies;
  contactId: string;
  
  constructor(private filmService: FilmsService, private myRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myRoute.params.subscribe((paramsResult) => {
      this.contactId = paramsResult['id']
    });
  }
}
