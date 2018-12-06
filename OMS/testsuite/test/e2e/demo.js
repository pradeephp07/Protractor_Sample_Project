
describe('open browser',function(){       //describe -- describes the test

	it('open browser success',function(){     //it -- contains test(actual text)

	browser.get(browser.baseUrl);
	browser.manage().window().maximize();
	browser.sleep(2000);
	
//Add procedure
		/*element(by.xpath("//span[text()='Procedure']")).click();
		browser.sleep(2000);

		element(by.model('Procedure')).sendKeys('test');
		browser.sleep(2000);*/
                
//Add supplier
		element(by.xpath("//span[text()='Suppliers']")).click();
		element(by.linkText('Add Suppliers')).click();		
		element(by.id('SupplierName')).sendKeys('supplier 1');
		

   

		
            });
	})
