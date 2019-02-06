import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { GetListRulesService } from "../../services/get-list-rules.service";
import * as $ from 'jquery/dist/jquery.min.js';
import { NumberSymbol } from '@angular/common';

@Component({
	selector: 'form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	providers: [ GetListRulesService ]
})
export class FormComponent implements OnInit {
	private fieldCount = 1;
	private ruleCount=2;
	private rules: Array<any>;
	public dinamicForm: FormGroup;
	public validateFieldRule = [];
	constructor(private fb: FormBuilder, private listRules: GetListRulesService) {
		this.rules = listRules.getList();
	}

	ngOnInit() {
		this.dinamicForm = this.fb.group({});
	}

	addField(): void {
		if( !this.validaFormulario() ){
			return;
		}
		this.dinamicForm.addControl( 'field_' + this.fieldCount, this.fb.group({
			'name': [ null, Validators.required ],
			'isRequired': true
		}));
		this.fieldCount++;
	}

	removeField( item ): void
	{
		this.dinamicForm.removeControl(item);
	}

	addRule( item ): void {
		if( !this.validaFormulario() ){
			return;
		}
		(<FormGroup>this.dinamicForm.get(item)).addControl( 'reglas',  this.fb.array([]));
		(<FormArray>this.dinamicForm.get(item+".reglas")).push( this.fb.group({ name: 0 }));
	}

	removeRule( field: string, rule: number ): void
	{
		(<FormArray>this.dinamicForm.get( field + '.reglas')).removeAt(rule);
	}
	
	selectedRuleList( field: string, rule: number ): void 
	{
		let regla = this.dinamicForm.get( field + '.reglas.' + rule + '.name').value;
		this.addArguments( field, rule, regla )
	}

	addArguments( field: string, rule: number, value: number ): void {
		let base = field+".reglas." + rule;
		let theRule = (value != 0) ? this.rules[value-1]: 0;
		(<FormGroup>this.dinamicForm.get(base)).removeControl( "arguments" );
		if ( theRule['arguments'] ){
			(<FormGroup>this.dinamicForm.get(base)).addControl( "arguments", this.fb.group({}) );
			for( let argument of theRule['arguments'] ) {
				(<FormGroup>this.dinamicForm.get( base+'.arguments')).addControl( argument.name, this.fb.control('', Validators.required ) );
			}
		}
	}

	trackByFn(index: any, item: any) {
		return index;
	}

	validaFormulario(): boolean{
		return this.dinamicForm.valid;
	}

	mostrar( vista: string ) {
		$(vista).toggleClass("collapse")
	}

	save()
	{
		if( !this.validaFormulario() ){
			return;
		}
		console.log( this.dinamicForm.value );
	}
}

//dist/fields