import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListCommonDataService } from './product-list-screen-common-data.service';
import { ProductListScreenComponent } from './product-list-screen.component';
import { ProductListScreenService } from './product-list-screen.service';

describe('ProductListScreenComponent', () => {
    let fixture: ComponentFixture<ProductListScreenComponent>;
    let component: ProductListScreenComponent;
    let addProductButton: HTMLButtonElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        ProductListScreenComponent
      ],
      providers: [ProductListScreenService, ProductListCommonDataService]
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(ProductListScreenComponent);
    component = fixture.componentInstance;
    addProductButton = fixture.nativeElement.querySelector('#add-product-dialog-button');
});

  it('should create the ProductListScreenComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should open add dialog', () => {
    addProductButton.click();
    fixture.detectChanges();
    expect(component.commonService.addEditProductDialogVisible).toBeTrue();
  });
});
