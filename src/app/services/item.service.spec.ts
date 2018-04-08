import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService]
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});
