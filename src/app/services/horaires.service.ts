import { Injectable } from '@angular/core';
import { Horaires } from 'src/app/models/horaires';


import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HorairesService {

	private serviceHttp: HttpClient;

	constructor( private param_http: HttpClient) { 
		this.serviceHttp = param_http;
	}

	public dataUrl:string = "../../assets/data/horaires.json";

	public getHoraires():  Observable <Horaires[]>{
		return this.serviceHttp.get( this.dataUrl ).pipe(
			map( (data: any ) => {

				

				let horaireTab: any = new Array();

				console.log(data);
				console.log(data.horaires.length);	
				
				for(let i = 0 ; i < data.horaires.length; i++){

					let myHoraires: Horaires = new Horaires();

					myHoraires.day 			= data.horaires[i].day;

					myHoraires.hm_opening	= data.horaires[i].hm_opening;
					myHoraires.mm_opening	= data.horaires[i].mm_opening;

					myHoraires.hm_closing	= data.horaires[i].hm_closing;
					myHoraires.mm_closing	= data.horaires[i].mm_closing;

					myHoraires.ha_opening	= data.horaires[i].ha_opening;
					myHoraires.ma_opening	= data.horaires[i].ma_opening;

					myHoraires.ha_closing	= data.horaires[i].ha_closing;
					myHoraires.ma_closing	= data.horaires[i].ma_closing;

					myHoraires.m_state		= data.horaires[i].m_state;
					myHoraires.a_state		= data.horaires[i].a_state;

					horaireTab[i] = myHoraires;
				}
				console.log( horaireTab );

				return horaireTab;
			}
			

			)
		)
	}
  
}
