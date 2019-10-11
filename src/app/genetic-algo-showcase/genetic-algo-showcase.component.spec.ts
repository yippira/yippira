import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticAlgoShowcaseComponent } from './genetic-algo-showcase.component';

describe('GeneticAlgoShowcaseComponent', () => {
  let component: GeneticAlgoShowcaseComponent;
  let fixture: ComponentFixture<GeneticAlgoShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneticAlgoShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticAlgoShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
