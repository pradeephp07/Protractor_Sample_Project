
var menu = function(){
    this.clickprocedure = element(by.xpath("//span[text()='Procedure']"));
    this.clicksupplier = element(by.xpath("//span[text()='Suppliers']"));
    this.clickaddsupplier = element(by.linkText('Add Suppliers'));
    this.clickprocurement = element(by.xpath("//span[text()='Procurement']"));
    this.clickprocrequest = element(by.linkText('Procurement Request'));
    this.clickdirect = element(by.linkText('Direct Order'));

}
module.exports=new menu();