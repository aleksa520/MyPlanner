import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FailedPage } from './failed.page';

describe('FailedPage', () => {
  let component: FailedPage;
  let fixture: ComponentFixture<FailedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
