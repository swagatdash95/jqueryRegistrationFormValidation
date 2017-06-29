$(document).ready(function() 
{ 
			$('.w3_play_icon,.w3_play_icon1,.w3_play_icon2').magnificPopup({
				type: 'inline',
				fixedContentPos: false,
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: true,
				preloader: false,
				midClick: true,
				removalDelay: 300,
				mainClass: 'my-mfp-zoom-in'
			});  
			$("#password1").keyup(function(){
				var x= $("#password1").val();
			
				if($.trim(x)==="")
				{
					$("#spnpw").css("color","red");
					$("#spnpw").text("cant Enter just spaces");
				}
				else
				if(x.length < 8 || x.length > 25)
				{
					$("#spnpw").css("color","red");
					$("#spnpw").text("No. of characters must be between 8-25");
				}
				else
				{
					$("#spnpw").text(" ");
				}
				if(x ===""){
					$("#spnpw").text(" ");
				}	
			});
		    $("#password2").keyup(function() {
				var x= $("#password1").val();
				var y= $("#password2").val();
				if($.trim(y)==="")
				{
					$("#spnpw").css("color","red");
					$("#spnpw").text("cant Enter just spaces");
				} 
				else if(y.length < 8 || y.length > 25)
				{
					$("#spnpw").css("color","red");
					$("#spnpw").text("No. of characters must be between 8-25");
				}
				else if(x!=y)
				{
					$("#spnpw").css("color","red");
					$("#spnpw").text("Passwords Don't Match!");
				}
				else if(x == y)
				{
					$("#spnpw").text("");
				}
				if(y===""){
					$("#spnpw").text("");
				}
			});
			$("#gender").keyup(function(){
				var x= $("#gender").val();
				 x = x.toLowerCase();
				
				if(x!='m'&&x!='f'&& x!="other")
				{
					$("#spngen").css({"color":"red"});
					$("#spngen").text("Invalid Entry ! Enter (m/f/other)");
				}
				if(x==="")
				{
					$("#spngen").text("");
				}
			});
			$("#phone_no").keyup(function(event){
				var x = $("#phone_no").val();
				var keypressed= event.which;
				if($.trim(x)==="")
				{
					$("#spnphn").css("color","red");
					$("#spnphn").text("cant Enter just spaces");
				}
				else
				if(keypressed<48 || keypressed>57 || x.length <10 || x.length >15)
				{
					$("#spnphn").css({"color":"red"});
					$("#spnphn").text("Invalid Number! Enter numbers having 10-15 Digits ");
				}
				else
				{
					$("#spnphn").text("");
				}
				
				if(x==="")
				{
					$("#spnphn").text("");
				}
				
			});
			$("#fname").keyup(function(event){
				var k = $("#fname").val();
				var keypressed=event.which;
				if(k.length>25)
				{
					alert("Can not enter more than 25 characters");
				}
				else
				if($.trim(k)==="")
				{
					$("#spnfname").css("color","red");
					$("#spnfname").text("cant Enter just spaces");
				}
				else
				if(!(keypressed>=65 && keypressed<=90 || keypressed>=97 && keypressed<=122 || keypressed===32 || keypressed===8))
				{	
					$("#spnfname").css("color","red");
					$("#spnfname").text("Enter only alphabets");
				}
				else
				{
					$("#spnfname").text("");
					
				}
				if(k==="")
				{
					$("#spnfname").text("");
				}
				
			});
			$("#lname").keyup(function(event){
				var k = $(this).val();
				var keypressed=event.which;
				if(k.length>25)
				{
					alert("Can not enter more than 25 characters");
				}
				else
				if($.trim(k)==="")
				{
					$("#spnlname").css("color","red");
					$("#spnlname").text("cant Enter just spaces");
				}
				else
				if(!(keypressed>=65 && keypressed<=90 || keypressed>=97 && keypressed<=122 || keypressed===32 || keypressed===8))
				{	
					$("#spnlname").css("color","red");
					$("#spnlname").text("Enter only alphabets");
				}
				else
				{
					$("#spnlname").text("");
					
				}
				if(k==="")
				{
					$("#spnlname").text("");
				}
				
			});
			var flag1=0, flag2=0;
			$("#email").keyup(function(event){
				var k = $(this).val();
				var keypressed=(event.which);
				var msg1="", msg2="";
				
				if(k.length>25)
				{
					alert("Can not enter more than 25 characters");
				}
				else
				if($.trim(k)==="")
				{
					alert("can not Enter spaces in email!");
				}
				
				if(flag1===0)
				{
					if(keypressed!==16)
						msg1+= "Email must have a '@'!";
					else
					{
						flag1 = 1;
						msg1="";
					}
					$("#spnemail").css("color","red");
					$("#spnemail").text(msg1+msg2);
						
				}
				if(flag2===0)
				{
					if(keypressed!==190)
						msg2+= "Email must have a '.'";
					else
					{
						flag2 = 1;
						msg2="";
					
					}
					$("#spnemail").css("color","red");
					$("#spnemail").text(msg1+msg2);
					
				}
				if(k==="")
				{
					flag1=0;flag2=0;
					$("#spnemail").text("");
				}
				
			});
			$("#address").keyup(function(){
				var k = $(this).val();
				if(k.length>75)
				{
					alert("Can not enter more than 75 characters");
				}else
				if($.trim(k)==="")
				{
					$("#spnadd").css("color","red");
					$("#spnadd").text("cant Enter just spaces");
				}
				if(k==="")
				{
					$("#spnadd").text("");
				}
					
				
			});
			
			$(".dec").focus(function(){
				$("h2").animate({fontSize:'35px'},"slow");
				$("h2").css({"color":"red"});
				$(this).animate({width:'107%'},"slow");
				$(this).css({"border-bottom-color":"red"});
				$(".form-w3-agile ").css({"background":"rgba(4, 4, 4, 0.70)"});
			});
			
			
			$(".dec").focusout(function(){
				$(this).animate({width:'87%'},"slow");
				$(this).css({"border-bottom-color":"white"});
				$(".form-w3-agile ").css({"background":"rgba(4, 4, 4, 0.40)"});
			});
			
});