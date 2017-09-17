import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHeroisComponent } from './lista-herois.component';

describe('ListaHeroisComponent', () => {
  let component: ListaHeroisComponent;
  let fixture: ComponentFixture<ListaHeroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHeroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHeroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
