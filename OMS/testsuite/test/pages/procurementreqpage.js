var procurementrequest = function(){

    this.selectprocedure = element(by.xpath("(//div[@class='mat-input-infix mat-form-field-infix'])/mat-select[1]"));
    this.selectvalue = $('[value="Mouth Trays"]');
    this.selectsupplies = element(by.xpath("(//div[@class='mat-select-value'])[2]"));
    this.selectsupplier = element(by.xpath("(//div[@class='mat-input-infix mat-form-field-infix'])[3]"));
    this.entercount = element(by.name('quantity'));
    this.selectclinic = element(by.xpath("(//div[@class='mat-select-value'])[4]"));
    this.selectloc = element(by.xpath("(//div[@class='mat-select-value'])[5]"));
    this.clicksubmit = element(by.buttonText('submit'));
}
module.exports = new procurementrequest();