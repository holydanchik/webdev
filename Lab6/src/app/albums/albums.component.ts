import { Component, OnInit } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(albums => this.albums = albums);
  }

  deleteAlbum(albumId: number) {
    // Implement delete functionality here
    console.log('Deleting album with ID:', albumId);
  }

}
