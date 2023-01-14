import { TestBed } from '@angular/core/testing';

import { ImageGetCatsService } from './image-get-cats.service';

describe('ImageGetCatsService', () => {
  let service: ImageGetCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageGetCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
