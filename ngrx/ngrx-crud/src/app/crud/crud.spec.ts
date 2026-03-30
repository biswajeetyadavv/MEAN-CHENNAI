import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUD } from './crud';

describe('CRUD', () => {
  let component: CRUD;
  let fixture: ComponentFixture<CRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUD],
    }).compileComponents();

    fixture = TestBed.createComponent(CRUD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
