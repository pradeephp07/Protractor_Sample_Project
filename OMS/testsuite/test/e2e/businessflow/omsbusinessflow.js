var suppliers = require("../../pages/supplierpage.js");
var procurementrequest = require("../../pages/procurementreqpage.js");
var menu = require("../../pages/menupage.js");
var login = require("../../pages/loginpage.js");
var oms_businessflow = function(){

//click from menu
this.menuSection_clickMenu=function(menuItem){
    if (menuItem=="Procedure")
    {
        menu.clickprocedure.click();
    }
    else if (menuItem == "Suppliers"){
        menu.clicksupplier.click();
    }
    else if(menuItem == "Add Suppliers"){
        menu.clickaddsupplier.click();
    }
    else if(menuItem == "Procurement"){
        menu.clickprocurement.click();
    }
    else if(menuItem == "Procurement Request"){
        menu.clickprocrequest.click();
    }
    else if(menuItem=="Direct Order"){
        menu.clickdirect.click();
    }
}

//login admin
this.loginpage_login=function(email,password){
    login.enteremail.sendKeys(email);
    login.enterpassword.sendKeys(password);
    login.clicklogin.click();
    
    
}
//supplier - add supplier
    this.supplierpage_addsupplier=function(supplier_name,contact_person,email,phone,zipcode,address,city,supplies){
        suppliers.entersupplier.sendKeys(supplier_name);
        suppliers.contactperson.sendKeys(contact_person);
        suppliers.enteremail.sendKeys(email);
        suppliers.enterphone.sendKeys(phone);
        suppliers.entercode.sendKeys(zipcode);
        browser.sleep(2000);
        suppliers.enteraddress.sendKeys(address);
        browser.sleep(2000);
        suppliers.entercity.sendKeys(city);
        suppliers.entersupplies.sendKeys(supplies);
        suppliers.clicksave.click();

    }
//procurement request workflow
this.procurementrequestpage_reqflow = function(supplies,supplier,procedure_count,clinic,location){
    procurementrequest.selectprocedure.click();
    procurementrequest.selectvalue.click();
    browser.sleep(2000);
    procurementrequest.selectsupplies.sendKeys(supplies);
    procurementrequest.selectsupplier.sendKeys(supplier);
    procurementrequest.entercount.sendKeys(procedure_count);
    procurementrequest.selectclinic.sendKeys(clinic);
    procurementrequest.selectloc.sendKeys(location);
    procurementrequest.clicksubmit.click();
}

//Direct order form
this.directorderpage_directorder = function(){
    
}

}
module.exports = new oms_businessflow();