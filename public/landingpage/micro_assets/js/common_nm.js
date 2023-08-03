function set_country_code(value)
{
	$("#hidden_country_code").val(value);
}

//var url_set = 'http://www.praa.in';
var url_set = 'https://www.addressofchoice.com/landingpage';
function mobile_no_enquiry(field_id,succss_msg,form_source)
{
	$('.loading').show();
	var mobile=$("#"+field_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	
	$.ajax({
				async: false,
		        type: "POST",
		        url: url_set+"/common/mobile_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'form_source':form_source,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();
		          	if(result.st==202)
		          	{
		          		$("#"+field_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		/*gtag_report_conversion(request_url+"/thanks");
		          		setTimeout(function () 
    					{
							$(".modal").modal('hide');
    					}, 3000);*/
		          	}
		        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        //mobile_no_enquiry(field_id,succss_msg,form_source);
    }  
    		});
}

function mobile_no_enquiry_with_thanks(field_id,succss_msg,form_source)
{
	$('.loading').show();
	var mobile=$("#"+field_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var enquiry_type=$("#enquiry_type").val();
	var mic_id=$("#mic_id").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();
	
	$.ajax({
				async: false,
		        type: "POST",
		        url: url_set+"/common/mobile_enquiry_validate_thanks",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'form_source':form_source, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();
		          	if(result.st==202)
		          	{
		          		$("#"+field_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		window.location = "/thanks?enqKDIEKDK="+enquiry_type+"&mc_id="+mic_id;
		          		/*gtag_report_conversion(request_url+"/thanks");
		          		setTimeout(function () 
    					{
							$(".modal").modal('hide');
    					}, 3000);*/
		          	}
		        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        //mobile_no_enquiry(field_id,succss_msg,form_source);
    }  
    		});
}


function complete_enquiry_form(name_id,email_id,mobile_id,succss_msg,form_source)
{
	$('.loading').show();
	var name=$("#"+name_id).val();
	var email=$("#"+email_id).val();
	var mobile=$("#"+mobile_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();
	var comment = "";
	//alert(ga_event_tracking_code);

	$.ajax({
		        type: "POST",
		        url: url_set+"/index.php/common/complete_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser, 'name':name, 'email':email,'form_source':form_source ,'comment':comment,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak },
		        success: function(result) 
		        {   
		        	$('.loading').hide();

		          	if(result.st==202)
		          	{
		          		$("#"+name_id+"_error").html(result.name);
		          		$("#"+email_id+"_error").html(result.email);
		          		$("#"+mobile_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		//gtag_report_conversion(request_url+"/thanks");
		          		//setTimeout(function () 
    					//{
						//	$(".modal").modal('hide');
    					//}, 3000);

		          	}
		          	
		        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        //complete_enquiry_form(name_id,email_id,mobile_id,succss_msg,form_source);
    }  
    		});
}

function complete_enquiry_form_seo(name_id,email_id,mobile_id,schedule_time,message,succss_msg,form_source)
{
	$('.loading').show();
	var name=$("#"+name_id).val();
	var email=$("#"+email_id).val();
	var mobile=$("#"+mobile_id).val();
	var schedule_time=$("#"+schedule_time).val();
	var message=$("#"+message).val();
	var comment = "";
	if(schedule_time!="Best Time To Call You")
	comment = "Best Time To Call You at "+schedule_time;
	comment = comment+" - "+message;

	
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();
	//alert(ga_event_tracking_code);

	$.ajax({
		        type: "POST",
		        url: url_set+"/index.php/common/complete_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser, 'name':name, 'email':email,'form_source':form_source ,'comment':comment, 'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak },
		        success: function(result) 
		        {   
		        	$('.loading').hide();

		          	if(result.st==202)
		          	{
		          		$("#"+name_id+"_error").html(result.name);
		          		$("#"+email_id+"_error").html(result.email);
		          		$("#"+mobile_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		//gtag_report_conversion(request_url+"/thanks");
		          		//setTimeout(function () 
    					//{
						//	$(".modal").modal('hide');
    					//}, 3000);

		          	}
		          	
		        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        //complete_enquiry_form(name_id,email_id,mobile_id,succss_msg,form_source);
    }  
    		});
}

function complete_enquiry_form_with_thanks(name_id,email_id,mobile_id,succss_msg,form_source)
{
	$('.loading').show();
	var name=$("#"+name_id).val();
	var email=$("#"+email_id).val();
	var mobile=$("#"+mobile_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var enquiry_type=$("#enquiry_type").val();
	var mic_id=$("#mic_id").val();
	var browser=$("#browser").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();

	$.ajax({
		        type: "POST",
		        url: url_set+"/index.php/common/complete_enquiry_validate_thanks",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser, 'name':name, 'email':email,'form_source':form_source,'ga_event_tracking_code':ga_event_tracking_code,'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();

		          	if(result.st==202)
		          	{
		          		$("#"+name_id+"_error").html(result.name);
		          		$("#"+email_id+"_error").html(result.email);
		          		$("#"+mobile_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		//var parameter = $(this).val();
    					window.location = "/thanks?enqKDIEKDK="+enquiry_type+"&mc_id="+mic_id;

		          		//gtag_report_conversion(request_url+"/thanks");
		          		//setTimeout(function () 
    					//{
							//$(".modal").modal('hide');
    					//}, 3000);

		          	}
		          	
		        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
       
    }  
    		});
}


function enquiry_form(title,form_source)
{
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();

	$.ajax({
        type: "POST",
        url: url_set+"/Enquiryform/get_enquiry_form",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#popupModal").html(result);
			$("#popupModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        //enquiry_form(title,form_source);
    }  
	});
}


function multi_enquiry_form(title,form_source,property_id,city_id)
{
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();
	$.ajax({
        type: "POST",
        url: url_set+"/Enquiryform/get_multiple_template_enquiry",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#popupModal").html(result);
			$("#popupModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
       // multi_enquiry_form(title,form_source,property_id,city_id);
    }  
	});
}

function get_a_call_back(title,form_source)
{
	$("#popupModal").html('');
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();

	$.ajax({
        type: "POST",
        url: url_set+"/Enquiryform/get_a_call_back",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url ,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak}, 
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#callbackModal").html(result);
			$("#callbackModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
       // get_a_call_back(title,form_source);
    }  
	});
}
function gtag_report_conversion(url) 
{
 /* var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-987629693/egrVCO-F638Q_ZD41gM',
      'event_callback': callback
  });
  return false;*/
}



function complete_enquiry_form_mutipro(name_id,email_id,mobile_id,succss_msg,form_source,pro_id)
{
	$('.loading').show();
	var name=$("#"+name_id).val();
	var email=$("#"+email_id).val();
	var mobile=$("#"+mobile_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var property_id=pro_id;
	var city_id=$("#city_id_"+pro_id).val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();

	$.ajax({
		        type: "POST",
		        url: url_set+"common/complete_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser, 'name':name, 'email':email,'form_source':form_source,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();
		          	if(result.st==202)
		          	{
		          		$("#"+name_id+"_error").html(result.name);
		          		$("#"+email_id+"_error").html(result.email);
		          		$("#"+mobile_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		/*gtag_report_conversion(request_url+"/thanks");
		          		setTimeout(function () 
    					{
							$(".modal").modal('hide');
    					}, 3000);*/

		          	}
		        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        //complete_enquiry_form_mutipro(name_id,email_id,mobile_id,succss_msg,form_source,pro_id);
    }  
    		});
}

function download_brochure(title,form_source)
{
	$("#popupModal").html('');
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var property_id=$("#property_id").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();


	$.ajax({
        type: "POST",
        url: url_set+"/Enquiryform/download_brochure",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#callbackModal").html(result);
			$("#callbackModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
       // download_brochure(title,form_source);
    }  
	});
}

function download_brochure_multi(title,form_source, property_id)
{
	$("#popupModal").html('');
	$('.loading').show();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var template_id=$("#template_id").val();
	var lead_source=$("#lead_source").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();


	$.ajax({
        type: "POST",
        url: url_set+"/Enquiryform/download_brochure",
        data:{'template_id':template_id,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'title':title,'form_source':form_source,'domain_url':domain_url,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak },
        success: function(result) 
        {   
        	$('.loading').hide();
          	$("#callbackModal").html(result);
			$("#callbackModal").modal('show');
			$(".ajax_ct_code").niceSelect();
        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
       // download_brochure_multi(title,form_source, property_id);
    }  
	});
}

function mobile_no_enquiry_multi(field_id,succss_msg,form_source, property_id)
{
	$('.loading').show();
	var mobile=$("#"+field_id).val();
	var country_code=$("#hidden_country_code").val();
	var template=$("#template").val();
	var lead_source=$("#lead_source").val();
	var city_id=$("#city_id").val();
	var lead_method=$("#lead_method").val();
	var refer_url=$("#refer_url").val();
	var lead_origin=$("#lead_origin").val();
	var request_url=$("#request_url").val();
	var domain_url=$("#domain_url").val();
	var browser=$("#browser").val();
	var ga_event_tracking_code=$("#ga_event_tracking_code").val();
	var xidfkfkfasdikfakfak = $("#xidfkfkfasdikfakfak").val();
	//alert("mobile--"+mobile+"country_code--"+country_code+"template--"+template+"lead_source--"+lead_source+"property_id--"+property_id+"city_id--"+city_id+"lead_method--"+lead_method+"refer_url--"+refer_url+"lead_origin--"+lead_origin+"request_url--"+request_url+"domain_url--"+domain_url+"browser--"+browser)
	$.ajax({
				async: false,
		        type: "POST",
		        url: url_set+"/common/mobile_enquiry_validate",
		        dataType:'json',
		        data:{'mobile':mobile,'country_code':country_code,'template':template,'lead_source':lead_source,'property_id':property_id,'city_id':city_id,'lead_method':lead_method,'refer_url':refer_url,'lead_origin':lead_origin,'request_url':request_url,'browser':browser,'form_source':form_source,'ga_event_tracking_code':ga_event_tracking_code, 'xidfkfkfasdikfakfak':xidfkfkfasdikfakfak  },
		        success: function(result) 
		        {   
		        	$('.loading').hide();
		          	if(result.st==202)
		          	{
		          		$("#"+field_id+"_error").html(result.mobile);
		          	}
		          	else if(result.st==200)
		          	{
		          		$("#"+succss_msg).html(result.msg);
		          		gtag_report_conversion(request_url+"/thanks");
		          		setTimeout(function () 
    					{
							$(".modal").modal('hide');
    					}, 3000);
		          	}
		        },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
       // mobile_no_enquiry_multi(field_id,succss_msg,form_source, property_id);
    }  
    		});
}