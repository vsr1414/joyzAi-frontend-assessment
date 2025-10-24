import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeRepresentation } from './tree-representation';

describe('TreeRepresentation', () => {
  let component: TreeRepresentation;
  let fixture: ComponentFixture<TreeRepresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeRepresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeRepresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
