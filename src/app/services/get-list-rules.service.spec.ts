import { TestBed } from '@angular/core/testing';

import { GetListRulesService } from './get-list-rules.service';

describe('GetListRulesService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: GetListRulesService = TestBed.get(GetListRulesService);
		expect(service).toBeTruthy();
	});
});
