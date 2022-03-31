const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[
{path:"replicated/account/logon/", element:'.headerRightSide',text: 'Login 5'},
{path:"replicated/account/logon/", element:'span=Login With Facebook',text: 'Login27'},

{path:"replicated/account/logon/", element:'span=Login With Google',text: 'Login29'},
{path:"replicated/account/logon/", element:"a=Don't have an account? Register here.",text: 'Login31'}

]


var click=[{path:"replicated/account/logon/", element:'.kbdContent a img',text: 'Login 2 and login 3', elementexpected: '.actindex'},
{path:"replicated/account/logon/", element:'a=Forgot Password?',text: 'Login17', elementexpected: '.actforgotpassword'},
{path:"replicated/account/logon/", element:"a=Don't have an account? Register here.",text: 'Login 25 and Login 26', elementexpected: '.actregister'},
{path:"replicated/account/logon/", element:"a=Don't have an account? Register here.",text: 'Login 31 and Login 32', elementexpected: '.actregister'}
]


describe('Elements exists', () => {
    
    
    
    for(var i=0;i<test.length;i++){
    	  DynamicLoadingPage.exist(test[i]);}
          
          
          
		
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
	//DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
	
    
            
		  
});

describe('Click element', () => {
    
    
    
    for(var i=0;i<click.length;i++){
          DynamicLoadingPage.golink(click[i]);}
          
          
          
        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});
describe('Forgot', () => {
    
    DynamicLoadingPage.forgotfull({path:"replicated/Account/ForgotPassword",username:'jgroening@yahoo.com' ,element:'.mT9',text: 'Login18 and Login 19',elementexpected:'.formSubmitMsg',inputus:'#forgotPasswordEmail'})  


        
       
               
        
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Checking login and sign',"#rememberMe","#profileImg")  
   //     DynamicLoadingPage.golink({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login17', elementexpected: '.actforgotpassword'});  

        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});


describe('Login and logout', () => {
    
    DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroenin@yahoo.com", "Testing24-",'Login 8', '.errorDv')
    DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", " ", "Testing24-",'Login 9', '.errorDv')
    DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Testing24",'Login 10', '.errorDv')
    DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Login 11', '.errorDv')
    DynamicLoadingPage.logout({path:'replicated/account/logon',inputus:'#userName',inputpass:'#userPassword',but:["#btnFormSubmit",'.profilePopButton img' ], username:"jgroening@yahoo.com", password:"Testing24-",text:'Login 7 and Logout 1', elementexpected:"button=Log Out"} )
    
     DynamicLoadingPage.logoutclick({but:"button=Log Out", text:'Logout 2', elementexpected:".actindex"})   
          
        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});


describe('Remember me', () => {
    
    DynamicLoadingPage.checkinglogin({path:'replicated/account/logon',inputus:'#userName',inputpass:'#userPassword',element:'#rememberMe', username:"jgroening@yahoo.com", password:"Testing24-",text:'Login 12 and Login 13'})
    DynamicLoadingPage.checkingloginsign({inputus:'#userName',inputpass:'#userPassword',but:"#btnFormSubmit", username:"jgroening@yahoo.com", password:"Testing24-",text:'Login 14', elementexpected:"#profileImg"})
          
        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});

/* describe('Remember me', () => {
    
    


        
       
               
        
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Login 13')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Login 14',"#rememberMe","#profileImg")  
        DynamicLoadingPage.attribute({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login16 second step',attr:"href",value:"/replicated/Account/ForgotPassword"});  
        
		
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
	//DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Login 11', '.errorDv')
	
    
            
		  
});*/


/*describe('Don`t have account', () => {
    
    


        
       
               
        DynamicLoadingPage.golink({path:"replicated/Account/ForgotPassword", element:'.mT32 a',text: 'Login26', elementexpected: '.actregister'});
        DynamicLoadingPage.golink({path:"replicated/account/logon", element:'.txtCenter .buttonLink',text: 'Login 32', elementexpected: '.actregister'});
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Checking login and sign',"#rememberMe","#profileImg")  
      //  DynamicLoadingPage.golink({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login17', elementexpected: '.actforgotpassword'});  
      //  DynamicLoadingPage.exist({path:"replicated/Account/ResetPassword/049895fd-1a6d-4b7f-aa2d-fe86586df746?h=vMFTx60saf24aN7QMVjl9A%3d%3d",element:"#loginFormContainer", text:'Login 19'}); 
      //  DynamicLoadingPage.exist({path:"replicated/Account/ResetPassword/049895fd-1a6d-4b7f-aa2d-fe86586df746?h=vMFTx60saf24aN7QMVjl9A%3d%3d",element:"#newPass", text:'Login 22 new Password'}); 
      //  DynamicLoadingPage.exist({path:"replicated/Account/ResetPassword/049895fd-1a6d-4b7f-aa2d-fe86586df746?h=vMFTx60saf24aN7QMVjl9A%3d%3d",element:"#newPassConfirm", text:'Login 22 new Password Confirm'}); 
        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});

describe('Logout', () => {
    
            
DynamicLoadingPage.logout({path:'replicated/account/logon',inputus:'#userName',inputpass:'#userPassword',but:["#btnFormSubmit",'.profilePopButton img' ], username:"jgroening@yahoo.com", password:"Surfingyoga24-",text:'Logout1', elementexpected:"button=Log Out"} )
DynamicLoadingPage.logoutclick({path:'replicated/account/logon',inputus:'#userName',inputpass:'#userPassword',but:["#btnFormSubmit",'.profilePopButton img',"button=Log Out"], username:"jgroening@yahoo.com", password:"Surfingyoga24-",text:'Logout2', elementexpected:".actindex"} )
    
    
            
          
});*/