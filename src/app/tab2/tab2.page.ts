import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ApiServiceService } from "../services/apiService.service";
import { StatisticsService } from '../services/statistics.service';
import { Subject, takeUntil } from "rxjs";
import { ChangeDetectorRef } from "@angular/core";
import { ViewWillLeave, ViewDidEnter } from "@ionic/angular";

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements ViewWillLeave, ViewDidEnter, AfterViewInit {
	public imageUrl: string = 'https://via.placeholder.com/200';
	public loadImage: boolean = false;
	private _destroy$ = new Subject<void>();


	constructor(private apiService: ApiServiceService, private _cdk: ChangeDetectorRef) {
	}
	ngAfterViewInit() {
		this.apiService.currentImageSource$.pipe(takeUntil(this._destroy$)).subscribe((data) => {
			if (data) {
				this.imageUrl = data;

			}
		});
	}

	ionViewDidEnter() {
		this.loadImage = true;
	}

	ionViewWillLeave() {
		this._destroy$.next();
	}
}
