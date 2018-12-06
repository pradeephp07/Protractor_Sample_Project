var login = function(){
this.enteremail = element(by.id('inputEmail'));
this.enterpassword = element(by.id('inputPassword'));
this.clicklogin = element(by.xpath("//button[@class ='btn SaveBtn subBtns']"));
}
module.exports = new login();