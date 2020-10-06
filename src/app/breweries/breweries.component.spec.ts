import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BreweriesComponent } from './breweries.component';
import { HttpService } from '../http.service';

describe('BreweriesComponent', () => {
  let component: BreweriesComponent;
  let fixture: ComponentFixture<BreweriesComponent>;
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(async () => { // wait for any async operations to complete
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HttpService ],
      declarations: [ BreweriesComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(BreweriesComponent); // creates an instance of BreweriesComponent for each test
      component = fixture.componentInstance; // grab an instance of the component itself
      fixture.detectChanges();
      service = TestBed.inject(HttpService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
