
var suppliers = function(){
    this.entersupplier = element(by.id('SupplierName'));
    this.contactperson = element(by.id('CompanyName'));
    this.enteremail = element(by.id('Email'));
    this.enterphone = element(by.id('Phone'));
    this.entercode = element(by.id('zipcode'));
    this.enteraddress = element(by.xpath("(//div[@class='mat-input-infix mat-form-field-infix'])[6]/input"));
    this.entercity = element(by.xpath("(//div[@class='mat-input-infix mat-form-field-infix'])[8]/input"));
    this.entersupplies = element(by.xpath("(//div[@class='mat-input-infix mat-form-field-infix'])[11]/input"));
    this.clicksave = element(by.buttonText('Save'));


    this.entersuppliername = element(by.id('SupplierName'));
}
module.exports = new suppliers();