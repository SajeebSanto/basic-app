"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const product_details_component_1 = require("./product-details.component");
describe('ProductDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [product_details_component_1.ProductDetailsComponent]
        });
        fixture = testing_1.TestBed.createComponent(product_details_component_1.ProductDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
