exports.config = {   //json structure

	baseUrl: "http://202.61.120.46:8080/oms/#/login",
	capabilities: {

		browserName : "chrome"		
	},

	specs : ["../testsuite/test/e2e/supplier.js"],
	
	framework:"jasmine2",
	directConnect:true,
	seleniumAddress:"http://localhost:4444/wd/hub",
	jasmineNodeOpts:{
	   defaultTimeoutInterval:200000
	
	}


}
