import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreationComponent } from './item-creation.component';

describe('UpdateItemComponent', () => {
  let component: ItemCreationComponent;
  let fixture: ComponentFixture<ItemCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
