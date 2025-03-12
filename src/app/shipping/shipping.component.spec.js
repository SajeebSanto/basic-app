"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const shipping_component_1 = require("./shipping.component");
describe('ShippingComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [shipping_component_1.ShippingComponent]
        });
        fixture = testing_1.TestBed.createComponent(shipping_component_1.ShippingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
