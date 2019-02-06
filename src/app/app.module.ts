import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { KeyobjPipe } from './pipes/keyobj.pipe';
import { RuleNamePipe } from './pipes/rule-name.pipe';
import { FormComponent } from './componentes/form/form.component';

@NgModule({
	declarations: [
		AppComponent,
		KeyobjPipe,
		RuleNamePipe,
		FormComponent,
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [ FormComponent ]
})
export class AppModule { }
