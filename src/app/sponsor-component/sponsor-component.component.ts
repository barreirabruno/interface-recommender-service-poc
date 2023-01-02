import { Component } from '@angular/core';
import { AvailableSponsor } from 'src/domain/models/available-sponsors';
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
}
