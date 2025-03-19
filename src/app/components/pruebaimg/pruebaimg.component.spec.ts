import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaimgComponent } from './pruebaimg.component';

describe('PruebaimgComponent', () => {
  let component: PruebaimgComponent;
  let fixture: ComponentFixture<PruebaimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaimgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
