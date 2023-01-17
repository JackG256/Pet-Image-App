import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService} from "../services/apiService.service";
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public apiService: ApiServiceService, public statisticService: StatisticsService) {
  }

  statistics: number[] = [0, 0, 0];

	saveDogData() {
		this.apiService.getDogImage();

		this.statisticService.getData("stats").then(statistics => {
		if (!statistics) {
			this.statistics = [0, 0, 0];
		}
		else {
			this.statistics = statistics;
		}
        this.statistics[0] = this.statistics[0] + 1;
		this.statisticService.saveData("stats", this.statistics);
      	console.log(statistics);
		});
	}
	
	saveCatData() {
		this.apiService.getCatImage()

		this.statisticService.getData("stats").then(statistics => {
		if (!statistics) {
			this.statistics = [0, 0, 0];
		}
		else {
			this.statistics = statistics;
		}	
		this.statistics[1] = this.statistics[1] + 1;
		this.statisticService.saveData("stats", this.statistics);	
		console.log(statistics);
		});
	}

	saveBirdData() {
		this.apiService.getBirdImage()

		this.statisticService.getData("stats").then(statistics => {
		if (!statistics) {
			this.statistics = [0, 0, 0];
		}
		else {
			this.statistics = statistics;
		}
		this.statistics[2] = this.statistics[2] + 1;
		this.statisticService.saveData("stats", this.statistics);
		console.log(statistics);
		});
	}
}




