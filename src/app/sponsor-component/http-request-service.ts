import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AvailableSponsor } from "src/domain/models/available-sponsors";
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
}
