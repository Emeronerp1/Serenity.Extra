﻿namespace SerExtraNet5.ExtraSamples {

    @Serenity.Decorators.registerClass()
    export class OrdersByCustomerReportPanel extends _Ext.ReportPanelBase<OrdersByCustomerReportRequest> {
        protected getReportTitle() { return 'Orders By Customer'; }
        protected getReportKey() { return 'ExtraSamples.OrdersByCustomerReport'; }
        protected getFormKey() { return OrdersByCustomerReportRequestForm.formKey; }

        private form: OrdersByCustomerReportRequestForm = new OrdersByCustomerReportRequestForm(this.idPrefix);

        constructor(container: JQuery, opt) {
            super(container, opt);

        }
    }
}