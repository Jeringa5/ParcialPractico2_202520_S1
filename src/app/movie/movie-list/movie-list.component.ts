import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService) {}

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
