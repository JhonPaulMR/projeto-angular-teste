import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPessoaFormComponent } from './adicionar-pessoa-form.component';

describe('AdicionarPessoaFormComponent', () => {
  let component: AdicionarPessoaFormComponent;
  let fixture: ComponentFixture<AdicionarPessoaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarPessoaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarPessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
