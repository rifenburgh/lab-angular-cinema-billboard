import { Injectable } from '@angular/core';

@Injectable()
export class FilmsService {
  movies: Array<any> = [
    {
      id: 0,
      title: 'Movie 0',
      poster: 'https://userscontent2.emaze.com/images/dba11b7c-5acf-4f73-81fa-ca2511bd0ba0/8cec5c02a972e54e5b1763841cf8d917.jpg',
      synopsis: 'There was action.  There was plot.',
      Genres: ['Action', 'Adventure'],
      year: 2000,
      director: 'John Smith',
      actors: ['Jim Smith', 'Jane Smith'],
      hours: ['WED1740', 'WED2100', 'FRI1800'],
      room: 1
    },
    {
      id: 1,
      title: 'Movie 1',
      poster: 'https://s-media-cache-ak0.pinimg.com/originals/8a/9d/43/8a9d4368b239d0e88e822bd550337974.jpg',
      synopsis: 'There was action.  There was plot.',
      Genres: ['Action', 'Adventure'],
      year: 2001,
      director: 'John Smith',
      actors: ['Jim Smith', 'Jane Smith'],
      hours: ['WED1740', 'WED2100', 'FRI2200'],
      room: 2
    },
    {
      id: 2,
      title: 'Movie 2',
      poster: 'http://www.impawards.com/2016/posters/xmen_apocalypse_ver18_xxlg.jpg',
      synopsis: 'There was action.  There was plot.',
      Genres: ['Action', 'Adventure'],
      year: 2002,
      director: 'John Smith',
      actors: ['Jim Smith', 'Jane Smith'],
      hours: ['WED1740', 'WED2100', 'FRI1400'],
      room: 3
    },
    {
      id: 3,
      title: 'Movie 3',
      poster: 'http://www.theshiznit.co.uk/media/2016/January/revenant.jpg',
      synopsis: 'There was action.  There was plot.',
      Genres: ['Action', 'Adventure'],
      year: 2003,
      director: 'John Smith',
      actors: ['Jim Smith', 'Jane Smith'],
      hours: ['WED1740', 'WED2100', 'FRI1830'],
      room: 4
    },
    {
      id: 4,
      title: 'Movie 4',
      poster: 'https://cdn0.vox-cdn.com/thumbor/ONGnvLmoWOqY0487GrwHz7qrjyU=/800x0/filters:no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/6326239/The-Hobbit-Battle-of-the-Five-Armies-Comic-Con-2014-Movie-Poster.jpg',
      synopsis: 'There was action.  There was plot.',
      Genres: ['Action', 'Adventure'],
      year: 2004,
      director: 'John Smith',
      actors: ['Jim Smith', 'Jane Smith'],
      hours: ['WED1740', 'WED2100', 'FRI2100'],
      room: 5
    },

  ];
  constructor() { }
  getMovies() {}
  getMovie(id) {
    console.log(id);
    return this.movies[id];
  }
}
