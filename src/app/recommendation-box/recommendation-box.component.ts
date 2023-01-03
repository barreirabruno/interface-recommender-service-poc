import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sponsor } from 'src/domain/models/sponsor';

@Component({
  selector: 'app-recommendation-box',
  templateUrl: './recommendation-box.component.html',
  styleUrls: ['./recommendation-box.component.css']
})
export class RecommendationBoxComponent {
  @Input() sponsor!: Sponsor[]
  @Output() notify = new EventEmitter()
}
