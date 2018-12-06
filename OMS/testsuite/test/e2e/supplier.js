var suppliers = require("../pages/supplierpage.js");
var menu = require("../pages/menupage.js");
var testdata = require("../testdata/supplieradd.json");
var oms_businessflow = require("../e2e/businessflow/omsbusinessflow.js");
var using = require("jasmine-data-provider");

describe('login oms',function(){
it('login admin portal', function(){
    browser.get(browser.baseUrl);
    browser.manage().window().maximize();
    browser.sleep(2000);
    browser.waitForAngular();

//login
using(testdata.login,function(data_login){
    oms_businessflow.loginpage_login(data_login.email,data_login.password);
})
//menu - supplier
    oms_businessflow.menuSection_clickMenu('Suppliers');
    oms_businessflow.menuSection_clickMenu('Add Suppliers');

//add supplier
using(testdata.addsupplier,function(data_suppliers){
    oms_businessflow.supplierpage_addsupplier(data_suppliers.supplier_name,data_suppliers.contact_person,data_suppliers.email,data_suppliers.phone,data_suppliers.zipcode,data_suppliers.address
    ,data_suppliers.city,data_suppliers.supplies);
})




});
});