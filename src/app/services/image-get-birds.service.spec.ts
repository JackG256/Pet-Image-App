import { TestBed } from '@angular/core/testing';

import { ImageGetBirdsService } from './image-get-birds.service';

describe('ImageGetBirdsService', () => {
  let service: ImageGetBirdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageGetBirdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
