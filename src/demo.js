import React from 'react'

export default function Demo() {
  return (
    <div>
          <form method='POST' className="form-modal">
                  <div className="form-group"> 
                    <input type="text" pattern="[a-zA-Z ]+" className="form-control rounded-0 micro-form-field" required placeholder="Name" name="user_name_12" id="user_name_12" /> 
                    <span id="user_name_12_error" />
                  </div>
                  <div className="form-group form_number"> 
                    <select id="country_code" onchange="set_country_code(this.value);return false;"><option selected="selected" value={91} data-id={99}>+91 (IND)</option><option value={971} data-id={224}>+971 (UAE)</option><option value={44} data-id={225}>+44 (UK)</option><option value={1} data-id={226}>+1 (USA)</option></select>                                              <input type="tel" pattern="[0-9]+" className="intTelInput form-control rounded-0 micro-form-field" required placeholder="Mobile No" id="user_mobile_12" name="user_mobile_12" /> 
                    <span id="user_mobile_12_error" />
                  </div>
                  <div className="form-group form-md"> 
                    <input type="email" className="form-control rounded-0 micro-form-field" required placeholder="E-Mail Address" name="user_email_12" id="user_email_12" /> 
                    <span id="user_email_12_error" />
                  </div>
                  <button type="button" name="enq_formBtn" className="btn btn-info micro-form-btn effetGradient effectScale" onclick="complete_enquiry_form_with_thanks('user_name_12','user_email_12','user_mobile_12','suc_fm_msg_1','>Get_Instant_Call_Back');return false;">Get Instant Call Back</button> 
                </form>
    </div>
  )
}
