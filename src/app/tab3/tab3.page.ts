import { Component } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  statistics: number[] = [];
  dogCounter: number = 0;
  catCoutner: number = 0;
  birdCounter: number = 0;
  
  constructor(private statisticsService: StatisticsService) {
    this.saveData();
  }
  saveData() {
    this.statisticsService.getData("stats").then(statistics => {
        this.statistics = statistics;
        console.log(statistics);
        this.dogCounter = this.statistics[0];
        this.catCoutner = this.statistics[1];
        this.birdCounter = this.statistics[2];
		});
	}

}
