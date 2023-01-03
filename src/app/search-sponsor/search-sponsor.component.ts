import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-sponsor',
  templateUrl: './search-sponsor.component.html',
  styleUrls: ['./search-sponsor.component.css']
})
export class SearchSponsorComponent {
  @Output() notify = new EventEmitter()
}
