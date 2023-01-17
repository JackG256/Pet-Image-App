import { Component } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
	statistics: number[] = [0, 0, 0];
	dogCounter: number = 0;
	catCoutner: number = 0;
	birdCounter: number = 0;

	editDog?: number;
	editCat?: number;
	editBird?: number;

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

	saveEditData() {
		this.statisticsService.getData("stats").then(statistics => {
			if (!statistics) {
				this.statistics = [0, 0, 0];
			}
			else {
				this.statistics = statistics;
			}
		});

		if (this.editDog != undefined && this.editDog > -1) {
			this.statistics[0] = this.editDog;
		}

		if (this.editCat != undefined && this.editCat > -1) {
			this.statistics[1] = this.editCat;
		}

		if (this.editBird != undefined && this.editBird > -1) {
			this.statistics[2] = this.editBird;
		}
		this.statisticsService.saveData("stats", this.statistics);
		console.log(this.statistics);
		this.refresh();
	};

	private refresh() {
		this.statisticsService.getData("stats").then(statistics => {
			this.dogCounter = statistics[0];
			this.catCoutner = statistics[1];
			this.birdCounter = statistics[2];
		});
	}
}
