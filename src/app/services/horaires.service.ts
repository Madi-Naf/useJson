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
					myHoraires.m_opening	= data.horaires[i].m_opening;
					myHoraires.m_closing	= data.horaires[i].m_closing;
					myHoraires.a_opening	= data.horaires[i].a_opening;
					myHoraires.a_closing	= data.horaires[i].a_closing;
					myHoraires.state		= data.horaires[i].state;

					horaireTab[i] = myHoraires;
				}
				console.log( horaireTab );

				return horaireTab;
			}
			

			)
		)
	}
  
}
