const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
    /**
     * define selectors using getter methods
     */
     get startButton() {
        return $('#start button'); //uses Element with certain text selector
   }
  /**
   * overwrite specific options to adapt it to page object
   */
  get remember(){return $('#rememberMe')}
   async Click(path,element) {
     await this.open(path);

      await $(element).click();
      //await $(element).waitForDisplayed({ timeout: 5000, reverse : true });
  }
  async checkinglogin(path,element,inputus,inputpass,username, password,text) {
    it(text, async () => {

      await this.open(path,element)
      await browser.pause(2000);
      await $(inputus).setValue(username);
    await browser.pause(2000)
    await $(inputpass).setValue(password);
    await browser.pause(2000)
      await $(element).click();
      await browser.pause(2000);
      await expect($(element)).toBeChecked()
             
  });

 }
async checkingloginsign(path,inputus,inputpass,but,username, password,text,element,elementexpected) {
    it(text, async () => {

      await this.open(path,element)
      await browser.pause(2000);
      await $(inputus).setValue(username);
    await browser.pause(2000)
    await $(inputpass).setValue(password);
    await browser.pause(2000)
      await $(element).click();
      await browser.pause(2000);
      await $(but).click();
    await browser.pause(2000)
    await expect($(elementexpected)).toBeExisting();
             
  });

 }
async attribute(testing) {
        it(testing.text, async () => {
        await this.open(testing.path);
        //await browser.pause(2000)
        await expect($(testing.element)).toHaveAttr(testing.attr, testing.value)
        //await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });
  } 


  async forgotfull(testing){
      it(testing.text, async () => {
        await this.open(testing.path);
        await $(testing.inputus).setValue(testing.username);
        //await browser.pause(2000)
        await $(testing.element).click();
        await browser.pause(5000)
        await expect($(testing.elementexpected)).toBeExisting();
        //await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });

  }
  async forgot(testing){
        it(testing.text, async () => {
        await this.open(testing.path);
        //await browser.pause(2000)
        await expect($(testing.element)).toHaveAttr(testing.attr, testing.value)
        //await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });
  } 
async golink(testing){
    it(testing.text, async () => {
      this.open(testing.path)
     
    
    await $(testing.element).click();
    await browser.pause(2000)
    await expect($(testing.elementexpected)).toBeExisting();});

}

async hastext(test){
  it(test.text, async () => {
      this.open(test.path)
      await expect(test.element).toHaveText(test.textinside)
    
   });

}

  async login (path,inputus,inputpass,but,username, password,text,elementexpected) {
    it(text, async () => {
      this.open(path)
      await expect(browser).toHaveUrl(`https://nfar.rallybound.org/${path}`)
    await $(inputus).setValue(username);
    await browser.pause(2000)
    await $(inputpass).setValue(password);
    await browser.pause(2000)
    await $(but).click();
    await browser.pause(2000)
    await expect($(elementexpected)).toBeExisting();});
    
  
  }

async logout (test) {
    it(test.text, async () => {
      this.open(test.path)
     
    await $(test.inputus).setValue(test.username);
    await browser.pause(2000)
    await $(test.inputpass).setValue(test.password);
    await browser.pause(2000)
    await $(test.but[0]).click();
    await browser.pause(2000)
    await $(test.but[1]).click();
     await browser.pause(5000)
    await expect($(test.elementexpected)).toBeExisting();});
    
  
  }


  async logoutclick (test) {
    it(test.text, async () => {
      this.open(test.path)
     
   
    await $(test.but[1]).click();
     await browser.pause(5000)
    await $(test.but[2]).click();
    await browser.pause(5000)
    await expect($(test.elementexpected)).toBeExisting();
  });
    
  
  }

  async exist(testing) {
        it(testing.text, async () => {
        await this.open(testing.path);
        //await browser.pause(2000)
        await expect($(testing.element)).toBeExisting();
        //await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });
  }
  get htest(){
      return $('#finish h4');
  }
  open(path) {
      return super.open(path);
  }
}

module.exports = new DynamicLoadingPage();