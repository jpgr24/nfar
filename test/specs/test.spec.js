const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[
{path:"replicated/account/logon/", element:'#rememberMe',text: 'Login 12'},
{path:"replicated/account/logon/", element:'.mT15 .buttonLink',text: 'Login16'},
{path:"replicated/Account/ForgotPassword", element:'#forgotPasswordEmail',text: 'Login18'},
{path:"replicated/Account/ForgotPassword", element:'.mT32 a',text: 'Login25'},
{path:"replicated/account/logon/", element:'.buttonFacebook',text: 'Login27'},
{path:"replicated/account/logon/", element:'span=Login With Facebook',text: 'Login27 text'},
{path:"replicated/account/logon/", element:'.buttonGoogle',text: 'Login29'},
{path:"replicated/account/logon/", element:'span=Login With Google',text: 'Login29 text'},
{path:"replicated/account/logon/", element:"a=Don't have an account? Register here.",text: 'Login31'}

]


describe('Elements exists', () => {
    
    
    
    for(var i=0;i<test.length;i++){
    	  DynamicLoadingPage.exist(test[i]);}
          
          
          
		
   
	
    
            
		  
});

describe('Remember me', () => {
    
    


        
       
               
        
        
        DynamicLoadingPage.attribute({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login16 second step',attr:"href",value:"/replicated/Account/ForgotPassword"});  
        DynamicLoadingPage.forgotfull({path:"replicated/Account/ForgotPassword",username:'jgroening@yahoo.com' ,element:'.mT9',text: 'Login19',elementexpected:'.formSubmitMsg',inputus:'#forgotPasswordEmail'})  
		
   
	
    
            
		  
});
describe('Forgot', () => {
    
    


        
       
               
        
       //
        DynamicLoadingPage.golink({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login17', elementexpected: '.actforgotpassword'});  

        
    //Dy
    
    
            
          
});

describe('Don`t have account', () => {
    
    


        
       
               
        DynamicLoadingPage.golink({path:"replicated/Account/ForgotPassword", element:'.mT32 a',text: 'Login26', elementexpected: '.actregister'});
        DynamicLoadingPage.golink({path:"replicated/account/logon", element:'.txtCenter .buttonLink',text: 'Login 32', elementexpected: '.actregister'});
       
    
    
            
          
});

describe('Logout', () => {
    
            
DynamicLoadingPage.logout({path:'replicated/account/logon',inputus:'#userName',inputpass:'#userPassword',but:["#btnFormSubmit",'.profilePopButton img' ], username:"jgroening@yahoo.com", password:" ",text:'Logout1', elementexpected:"button=Log Out"} )
DynamicLoadingPage.logoutclick({path:'replicated/account/logon',inputus:'#userName',inputpass:'#userPassword',but:["#btnFormSubmit",'.profilePopButton img',"button=Log Out"], username:"jgroening@yahoo.com", password:"Surfingyoga24-",text:'Logout2', elementexpected:".actindex"} )
    
    
            
          
});