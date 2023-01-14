import { TestBed } from '@angular/core/testing';

import { ImageGetShibuService } from './image-get-shibu.service';

describe('ImageGetService', () => {
  let service: ImageGetShibuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageGetShibuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
