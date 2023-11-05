import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { HttpClientModule } from "@angular/common/http";
import { CafesService } from 'src/app/services/cafes.service';
import { ListCafesComponent } from './list-cafes.component';
import { Cafe } from '../Cafe';

describe('ListCafesComponent', () => {
  let component: ListCafesComponent;
  let fixture: ComponentFixture<ListCafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCafesComponent ]
      ,imports : [HttpClientTestingModule, HttpClientModule]
      ,providers: [CafesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCafesComponent);
    component = fixture.componentInstance;
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

    console.log(bodyRows.length);

    expect(table).toBeTruthy();
    expect(headerRow).toBeTruthy();
    expect(bodyRows.length).toBe(3);

  });

});
