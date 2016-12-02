/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorageFileService } from './storage-file.service';

describe('StorageFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageFileService]
    });
  });

  it('should ...', inject([StorageFileService], (service: StorageFileService) => {
    expect(service).toBeTruthy();
  }));
});
