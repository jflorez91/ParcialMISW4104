import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCafesComponent } from './list-cafes.component';
import { Cafe } from '../Cafe';

describe('ListCafesComponent', () => {
  let component: ListCafesComponent;
  let fixture: ComponentFixture<ListCafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCafesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create a table with three rows',()=>{
    const cafes : Cafe[] =[
      new Cafe(1,'Cafe 1','pais origen','Colombia','Chocolate',10,'imagen1'),
      new Cafe(2,'Cafe 2','pais origen','Peru','Vainilla',10,'imagen1'),
      new Cafe(3,'Cafe 3','pais origen','Ecuador','Fresa',10,'imagen1'),
    ];

    component.cafeList=cafes;

    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('table');
    const headerRow = table.querySelector('thead tr');
    const bodyRows = table.querySelectorAll('tbody tr');

    expect(table).toBeTruthy();
    expect(headerRow).toBeTruthy();
    expect(bodyRows.length).toBe(3);

  });

});
