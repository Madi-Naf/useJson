import { Component, OnInit } from '@angular/core';

import { Horaires } from 'src/app/models/horaires';
import { HorairesService } from 'src/app/services/horaires.service';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent implements OnInit {

	public horaiResponse: Horaires[]  = new Array();

	constructor( private horaireService: HorairesService) { }

  	ngOnInit() {
    	this.horaireService.getHoraires().subscribe(
      		(data: any ) =>{
				this.horaiResponse = data;
    	})
  	}

}
