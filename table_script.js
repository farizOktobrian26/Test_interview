function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var gender=document.getElementById("gender_row"+no);
 var pos=document.getElementById("pos_row"+no);
 var address=document.getElementById("address_row"+no);
 var rel=document.getElementById("rel_row"+no);
 var phone=document.getElementById("phone_row"+no);
 var email=document.getElementById("email_row"+no);
 var statusN=document.getElementById("statusN_row"+no);
 var sallary=document.getElementById("sallary_row"+no);
	
 var name_data=name.innerHTML;
 var gender_data=gender.innerHTML;
 var pos_data=pos.innerHTML;
 var address_data=address.innerHTML;
 var rel_data=rel.innerHTML;
 var phone_data=phone.innerHTML;
 var email_data=email.innerHTML;
 var statusN_data=statusN.innerHTML;
 var sallary_data=sallary.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 gender.innerHTML="<input type='text' id='gender_text"+no+"' value='"+gender_data+"'>";
 pos.innerHTML="<input type='text' id='pos_text"+no+"' value='"+pos_data+"'>";
 address.innerHTML="<input type='text' id='address_text"+no+"' value='"+address_data+"'>";
 rel.innerHTML="<input type='text' id='rel_text"+no+"' value='"+rel_data+"'>";
 phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
 statusN.innerHTML="<input type='text' id='statusN_text"+no+"' value='"+statusN_data+"'>";
 sallary.innerHTML="<input type='text' id='sallary_text"+no+"' value='"+sallary_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var gender_val=document.getElementById("gender_text"+no).value;
 var pos_val=document.getElementById("pos_text"+no).value;
 var address_val=document.getElementById("address_text"+no).value;
 var rel_val=document.getElementById("rel_text"+no).value;
 var phone_val=document.getElementById("phone_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var statusN_val=document.getElementById("statusN_text"+no).value;
 var sallary_val=document.getElementById("sallary_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("gender_row"+no).innerHTML=gender_val;
 document.getElementById("pos_row"+no).innerHTML=pos_val;
 document.getElementById("address_row"+no).innerHTML=address_val;
 document.getElementById("rel_row"+no).innerHTML=rel_val;
 document.getElementById("phone_row"+no).innerHTML=phone_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("statusN_row"+no).innerHTML=statusN_val;
 document.getElementById("sallary_row"+no).innerHTML=sallary_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_gender=document.getElementById("new_gender").value;
 var new_pos=document.getElementById("new_pos").value;
 var new_address=document.getElementById("new_address").value;
 var new_rel=document.getElementById("new_rel").value;
 var new_phone=document.getElementById("new_phone").value;
 var new_email=document.getElementById("new_email").value;
 var new_statusN=document.getElementById("new_statusN").value;
 var new_sallary=document.getElementById("new_sallary").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='gender_row"+table_len+"'>"+new_gender+"</td><td id='pos_row"+table_len+"'>"+new_pos+"</td><td id='address_row"+table_len+"'>"+new_address+"</td><td id='rel_row"+table_len+"'>"+new_rel+"</td><td id='phone_row"+table_len+"'>"+new_phone+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='statusN_row"+table_len+"'>"+new_statusN+"</td><td id='sallary_row"+table_len+"'>"+new_sallary+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_gender").value="";
 document.getElementById("new_pos").value="";
 document.getElementById("new_address").value="";
 document.getElementById("new_rel").value="";
 document.getElementById("new_phone").value="";
 document.getElementById("new_email").value="";
 document.getElementById("new_statusN").value="";
 document.getElementById("new_sallary").value="";
}