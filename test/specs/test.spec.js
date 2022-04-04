const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[
{path:"replicated/account/logon/", element:'.headerRightSide',text: 'Login 5'},
{path:"N/A", element:'span=Login With Facebook',text: 'Login27'},

{path:"N/A", element:'span=Login With Google',text: 'Login29'},


]


var click=[{path:"replicated/account/logon/", element:'.kbdContent a img',text: 'Login 2 and login 3', elementexpected: '.actindex'},
{path:"replicated/account/logon/", element:'a=Forgot Password?',text: 'Login17', elementexpected: '.actforgotpassword'},
{path:"replicated/Account/ForgotPassword", element:"a=Don't have an account? Register here.",text: 'Login 25 and Login 26', elementexpected: '.actregister'},
{path:"replicated/account/logon/", element:"a=Don't have an account? Register here.",text: 'Login 31 and Login 32', elementexpected: '.actregister'}
]
var login_exist=[{path:'N/A',element:'.actmypage .kbdContent a img',text: 'Dashboard 6'},
{path:"N/A", element:'.actmypage .headerRightSide',text: 'Dashboard 7'},
{path:"N/A", element:'a=Share',text: 'Dashboard 15'},{path:"N/A", element:'span=Donate',text: 'Dashboard 15'},
{path:"N/A", element:'.hqMainNav',text: 'Dashboard 25'},{path:"N/A", element:'.goal-panel-inner',text: 'Dashboard 27'},
{path:"N/A", element:'.chart-box',text: 'Dashboard 30'},
{path:"N/A", element:'#statBoxes',text: 'Dashboard 31'},
{path:"N/A", element:'#reportsChart',text: 'Dashboard 49'}
]

var clickdashboard=[{path:"N/A",element:'span=Donate', text:"Dashboard 24", elementexpected:".contdonate"}]

describe('Elements exists', () => {
 for(var i=0;i<test.length;i++){
    	  DynamicLoadingPage.exist(test[i]);}
		  
});

describe('Click element', () => {
    
    
    
    for(var i=0;i<click.length;i++){
          DynamicLoadingPage.golink(click[i]);}
          
         
});
describe('Forgot', () => {
    
    DynamicLoadingPage.forgotfull({path:"replicated/Account/ForgotPassword",username:'jgroening@yahoo.com' ,element:'.mT9',text: 'Login18 and Login 19',elementexpected:'.formSubmitMsg',inputus:'#forgotPasswordEmail'})  


        
       
               
        
      
    
            
          
});


describe('Login and logout', () => {
    
    DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroenin@yahoo.com", "Testing24-",'Login 8', '.errorDv')
    DynamicLoadingPage.login('N/A','#userName','#userPassword',"#btnFormSubmit", " ", "Testing24-",'Login 9', '.errorDv')
    DynamicLoadingPage.login('N/A','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Testing24",'Login 10', '.errorDv')
    DynamicLoadingPage.login('N/A','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Login 11', '.errorDv')
    DynamicLoadingPage.logout({path:'N/A',inputus:'#userName',inputpass:'#userPassword',but:["#btnFormSubmit",'.profilePopButton img' ], username:"jgroening@yahoo.com", password:"Testing24-",text:'Login 7 and Logout 1', elementexpected:"button=Log Out"} )
    
    DynamicLoadingPage.logoutclick({but:"button=Log Out", text:'Logout 2', elementexpected:".actindex"})   
          
        
   
    
            
          
});


describe('Remember me', () => {
    
    DynamicLoadingPage.checkinglogin({path:'replicated/account/logon',inputus:'#userName',inputpass:'#userPassword',element:'#rememberMe', username:"jgroening@yahoo.com", password:"Testing24-",text:'Login 12 and Login 13'})
    DynamicLoadingPage.checkingloginsign({inputus:'#userName',inputpass:'#userPassword',but:"#btnFormSubmit", username:"jgroening@yahoo.com", password:"Testing24-",text:'Login 14', elementexpected:"#profileImg"})
          
        
   
    
    
            
          
});

describe('Dashboard exist', () => {
    
    DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Testing24-",'Dashboard 14', 'h1=My NFARTech_TestSite Fundraising Page')
    for(var i=0;i<login_exist.length;i++){
          DynamicLoadingPage.exist(login_exist[i]);}    
   
    
    
            
          
});

describe('Dashboard click element', () => {
    
    
    
    for(var i=0;i<clickdashboard.length;i++){
          DynamicLoadingPage.golink(clickdashboard[i]);}
          
         
});

