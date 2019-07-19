import { TestBed } from '@angular/core/testing';

import { IdentiteService } from './identite.service';

describe('IdentiteService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: IdentiteService = TestBed.get(IdentiteService);
        expect(service).toBeTruthy();
    });
});
