import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent implements OnInit{
  @Input() guitarId: String = "";
  constructor() {
  }

  onFavoriteClick(): void {
    alert("Clicked a favourite" + this.guitarId);
  }

  ngOnInit(): void {
  }

}
