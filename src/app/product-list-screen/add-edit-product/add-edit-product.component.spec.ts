import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { ProductListCommonDataService } from '../product-list-screen-common-data.service';
import { ProductListScreenService } from '../product-list-screen.service';
import { AddEditProductComponent } from './add-edit-product.component';

describe('AddEditProductComponent', () => {
    let fixture: ComponentFixture<AddEditProductComponent>;
    let component: AddEditProductComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AddEditProductComponent
      ],
      providers: [ProductListScreenService, ProductListCommonDataService, MessageService]
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(AddEditProductComponent);
    component = fixture.componentInstance;
});

  it('should create the AddEditProductComponent', () => {
    expect(component).toBeTruthy();
  });
});
