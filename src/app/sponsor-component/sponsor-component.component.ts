import { Component } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { Sponsor } from 'src/domain/models/sponsor';
import { HttpRequestService } from './http-request-service';

@Component({
  selector: 'app-sponsor-component',
  templateUrl: './sponsor-component.component.html',
  styleUrls: ['./sponsor-component.component.css']
})
export class SponsorComponentComponent {

  loading: Boolean = false
  loadingSponsorMessage = "Um momento, Buscando um incentivador no portal SALIC..."

  availableSponsorData: Sponsor = {
    "idSalic": "",
    "nome": "",
    "cgccpf": "",
    "total_doado": 0
  }

  recommendation: Sponsor[] = []

  recommendationArea = false

  constructor(
    private readonly httpRequestService: HttpRequestService
  ) {}

  ngOnInit() {
    this.availableSponsors()
  }

  availableSponsors() {
    this.loading = true
    this.httpRequestService.getAvailableSponsorsRequest()
      .subscribe(data => {
        this.availableSponsorData = data.availableSponsors[Math.floor(Math.random() * data.availableSponsors.length)]
      })
    this.loading = false
  }

  onNotify(sponsorId: string) {
    this.httpRequestService.getRecommendationSponsorRequest(sponsorId)
      .subscribe(data => {
        const requests = this.httpRequestService.getSponsorById(data)
        const switched = of(requests).pipe(switchMap(result => result))
        switched.subscribe(value => {
          this.recommendation = value
        })
        this.recommendationArea = true
      })
  }
}
