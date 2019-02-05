import { Component } from '@angular/core';
import { GetListRulesService } from './services/get-list-rules.service';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        GetListRulesService
    ]
})

export class AppComponent {
    private rules: Array<any>;
    public cont = 0;
    private formulario: FormGroup
    hide = true;
  
    constructor ( 
        private listRules: GetListRulesService,
        private fb: FormBuilder
    )
    {
        this.formulario = fb.group({})
    }
  
    ngOnInit(){
        this.rules = this.listRules.getList();
    }

    public addRule( name_field: string ): void
    {
        this.cont++;
        let newFieldName = `Regla${this.cont}`;
        this.formulario.addControl( newFieldName, this.fb.group({ name : [0], arguments: this.fb.group({}) }))
    }

    deleteRule( ruleKey: string ): void {
        this.formulario.removeControl( ruleKey )
    }

    ruleSelected( index ) {
        let rule = this.formulario.value[index];
        this.formulario.removeControl(index);

        let args: FormGroup;
        
        args = new FormGroup({})

        if ( rule.name != 0 && 
                ( typeof(this.rules[rule.name-1].arguments) != 'undefined' && 
                  this.rules[rule.name-1].arguments.length > 0 ) ) 
            {
                for( let theRule of this.rules[rule.name-1].arguments ){
                    args.addControl( theRule.name, new FormControl() )
            }
        }7
      
        this.formulario.addControl( index, this.fb.group({
            name: rule.name,
            arguments: args
        }));
    }
}
