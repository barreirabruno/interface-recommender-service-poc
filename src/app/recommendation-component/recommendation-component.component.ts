import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recommendation-component',
  templateUrl: './recommendation-component.component.html',
  styleUrls: ['./recommendation-component.component.css']
})
export class RecommendationComponentComponent {

  @Input() sponsorId!: string
  @Output() notify = new EventEmitter()

}
