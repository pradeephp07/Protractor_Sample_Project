var menu = require("../pages/menupage.js");
var procurementrequest = require("../pages/procurementreqpage.js");
var testdata = require("../testdata/proc_req.json");
var oms_businessflow = require("../e2e/businessflow/omsbusinessflow.js");
var using = require("jasmine-data-provider");

describe('login oms',function(){
it('login admin portal', function(){
    browser.get(browser.baseUrl);
    browser.manage().window().maximize();
    browser.sleep(2000);
    browser.waitForAngular();

//menu - supplier
    oms_businessflow.menuSection_clickMenu('Procurement');
    oms_businessflow.menuSection_clickMenu('Procurement Request');

//add supplier
using(testdata.addproc_request,function(data_procurementrequest){
    oms_businessflow.procurementrequestpage_reqflow(data_procurementrequest.supplies,data_procurementrequest.supplier,data_procurementrequest.procedure_count,data_procurementrequest.clinic,data_procurementrequest.location);
})




});
});