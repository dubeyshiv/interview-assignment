import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { ProductListCommonDataService } from '../product-list-screen-common-data.service';
import { ProductListScreenService } from '../product-list-screen.service';
import { ProductTableComponent } from './product-table.component';

describe('ProductTableComponent', () => {
    let fixture: ComponentFixture<ProductTableComponent>;
    let component: ProductTableComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        ProductTableComponent
      ],
      providers: [ProductListScreenService, ProductListCommonDataService, MessageService]
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
});

  it('should create the ProductTableComponent', () => {
    expect(component).toBeTruthy();
  });
});
