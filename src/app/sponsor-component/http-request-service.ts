import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, zip } from "rxjs";
import { AvailableSponsor } from "src/domain/models/available-sponsors";
import { RecommendationSponsor } from "src/domain/models/recommendation-sponsor";
import { Sponsor } from "src/domain/models/sponsor";
import { sponsorConfigs } from "src/sponsor-configs";

@Injectable()
export class HttpRequestService {

  sponsorsConfig = sponsorConfigs

  constructor(
    private readonly httpService: HttpClient
  ) {}

  getAvailableSponsorsRequest() {
    const url = this.sponsorsConfig.base_url.dev + this.sponsorsConfig.available_sponsors.path
    return this.httpService.get<AvailableSponsor>(url)
  }

  getRecommendationSponsorRequest(sponsorId: string) {
    const url = this.sponsorsConfig.base_url.dev + this.sponsorsConfig.recommendation.path + sponsorId
    return this.httpService.get<RecommendationSponsor>(url)
  }

  getSponsorById(recommendationData?: RecommendationSponsor) {
    const urlsToRequest: Observable<Sponsor>[] = []

    const rootSponsor = `${this.sponsorsConfig.base_url.dev}${this.sponsorsConfig.sponsor_by_id.path}${recommendationData?.sponsor.id}`
    urlsToRequest.push(this.httpService.get<Sponsor>(rootSponsor))

    recommendationData?.similarSponsors.map(sponsor => {
      const tempUrl = `${this.sponsorsConfig.base_url.dev}${this.sponsorsConfig.sponsor_by_id.path}${sponsor.id}`
      return urlsToRequest.push(this.httpService.get<Sponsor>(tempUrl))
    })

    return zip(urlsToRequest)
  }
}
