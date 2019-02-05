import { Injectable } from '@angular/core';
import { list_rules } from '../mock/list_rules';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class GetListRulesService {
	private list: any;
	constructor() {
		this.list = list_rules;
	}

	public getList(): Array<any> {
		return this.list
	}

	public getArg(index: number): any {
		return this.list[index];
	}

}
