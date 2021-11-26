import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureLoaderComponent } from './signature-loader.component';

describe('SignatureLoaderComponent', () => {
  let component: SignatureLoaderComponent;
  let fixture: ComponentFixture<SignatureLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
