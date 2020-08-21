$(function() {

	// create year

	for (var i = 1900; i <= 2100; i++) {
		var $option = $("<option></option>")
		$option.text(i);
		$option.attr("value",i);
		$(".parter1_list_year").append($option);
	}
	//  create month
	for (var i =1; i<=12;i++) {
		var $option = $("<option></option>")
		$option.text(i);
		$option.attr("value",i);
		$(".parter1_list_month").append($option);
	}
	
	
	
	//  create day
		
	 
	 $(".parter1_list_month").click(function(){
		 
		 var d_year = $(".parter1_list_year option:selected").val();
		 var d_month = $(".parter1_list_month option:selected").val();
		 var d =new Date(d_year,d_month,0);
		 console.log(d);
		 console.log(d.getDate());
		 $(".parter1_list_day").empty();
		 for (var i =1; i<=d.getDate();i++) {
		 	var $option = $("<option></option>")
		 	$option.text(i);
			$option.attr("value",i);
		 	$(".parter1_list_day").append($option);
		 }
		 
		 
	 })
	 
	 

	 
	 
	 
	 
	 // create star
	 
	 	 $(".parter1_list_day").click(function(){
			 
			 var idx = getStar();

			 $(".parter1_list_star>div").eq(idx).addClass("star_active").siblings().removeClass("star_active");
			 
		 })
	 
	 
	 
	 
	 
	 
	 function getStar(){

		 var g_momth = $(".parter1_list_month option:selected").val();
		 var g_day = $(".parter1_list_day option:selected").val();
		 
		 if(g_day<10){
			 g_day =0.0+g_day;
		 }
		 var birthday = g_momth+'.'+g_day;
		 console.log(birthday);
		 
		 switch (true){
		 	case birthday >=3.21 && birthday <= 4.19:
			console.log("白羊座");
			return 0;
			case birthday >=4.20 && birthday <= 5.20:
			console.log("金牛座");
			return 1;
			case birthday >=5.21 && birthday <= 6.21:
			console.log("双子座");
			return 2;
			case birthday >=6.22 && birthday <= 7.22:
			console.log("巨蟹座");
			return 3;
			case birthday >=7.23 && birthday <= 8.22:
			console.log("狮子座");
			return 4;
			case birthday >=8.23 && birthday <= 9.22:
			console.log("处女座");
			return 5;
			case birthday >=9.23 && birthday <= 10.23:
			console.log("天秤座");
			return 6;
			case birthday >=10.24 && birthday <= 11.22:
			console.log("天蝎座");
			return 7;
			case birthday >=11.23 && birthday <=12.21:
			console.log("射手座");
			return 8;
			case birthday >=12.22 || birthday <= 1.19:
			console.log("摩羯座");
			return 9;
			case birthday >=1.20 && birthday <= 2.18:
			console.log("水瓶座");
			return 10;
			case birthday >=2.19 && birthday <= 3.20:
			console.log("双鱼座");
			return 11;

		 }

		 
		 
		 
		 
		 
		 
		 
	 }
	 
	 
	 

	 













})
