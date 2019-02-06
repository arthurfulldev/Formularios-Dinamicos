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
    
}
