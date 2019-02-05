import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { GetListRulesService } from "../../services/get-list-rules.service";

import * as $ from 'jquery/dist/jquery.min.js';

@Component({
	selector: 'form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	providers: [ GetListRulesService ]
})
export class FormComponent implements OnInit {
	private fieldCount = 0;
	private ruleCount=0;
	private rules: Array<any>;
	private dinamicForm: FormGroup;
	public formulario: any;
	constructor(private fb: FormBuilder, private listRules: GetListRulesService) {
		this.rules = listRules.getList();
	}

	ngOnInit() {
		this.dinamicForm = this.fb.group({});
	}

	addField(): void {
		this.dinamicForm.addControl( 'field_' + this.fieldCount, this.fb.group({
			'name': 0,
			'isRequired': true
		}));
		this.fieldCount++;
	}

	addRule( item ): void {
		(<FormGroup>this.dinamicForm.get(item)).addControl( 'reglas',  this.fb.array([]));
		(<FormArray>this.dinamicForm.get(item+".reglas")).push( this.fb.group({ name: 0 }));
	}

	addArgument( field, rule ): void {
		let base = field+".reglas."+rule;
		(<FormGroup>this.dinamicForm.get(base)).addControl( "arguments", this.fb.group({}) );
		(<FormGroup>this.dinamicForm.get( base+'.arguments')).addControl( "min", this.fb.control('') );
		(<FormGroup>this.dinamicForm.get( base+'.arguments')).addControl( "max", this.fb.control('') );
	}

	removeArgument(field: string, rule: string): void {
		let base = field+".reglas."+rule;
		this.dinamicForm.removeControl(base);
	}

	removeField( item ): void
	{
		this.dinamicForm.removeControl(item);
	}

	trackByFn(index: any, item: any) {
		return index;
	}

	mostrar( vista: string ) {
		$(vista).toggleClass("collapse")
	}
}

