"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const product_alerts_component_1 = require("./product-alerts.component");
describe('ProductAlertsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [product_alerts_component_1.ProductAlertsComponent]
        });
        fixture = testing_1.TestBed.createComponent(product_alerts_component_1.ProductAlertsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
