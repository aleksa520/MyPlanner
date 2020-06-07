import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccomplishedPage } from './accomplished.page';

describe('AccomplishedPage', () => {
  let component: AccomplishedPage;
  let fixture: ComponentFixture<AccomplishedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomplishedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccomplishedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
