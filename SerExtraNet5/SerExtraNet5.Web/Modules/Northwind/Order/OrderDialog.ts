﻿namespace SerExtraNet5.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OrderDialog extends _Ext.DialogBase<OrderRow, any> {
        protected getFormKey() { return OrderForm.formKey; }
        protected getIdProperty() { return OrderRow.idProperty; }
        protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
        protected getNameProperty() { return OrderRow.nameProperty; }
        protected getService() { return OrderService.baseUrl; }

        protected form = new OrderForm(this.idPrefix);

        constructor() {
            super();
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(SerExtraNet5.Common.ReportHelper.createToolButton({
                title: 'Invoice',
                cssClass: 'export-pdf-button',
                reportKey: 'Northwind.OrderDetail',
                getParams: () => ({
                    OrderID: this.get_entityId()
                })
            }));

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }
    }
}