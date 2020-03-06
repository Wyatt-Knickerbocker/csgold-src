document.getElementById("edit_GENERAL").click();
document.getElementsByClassName("sec_head2")[0].firstElementChild.click();
document.getElementById("edit_LOCAL").click();

var class_field = document.getElementsByClassName("fieldlist")[0].rows[4].cells[1].firstElementChild;
var exp_date = document.getElementsByClassName("fieldlist")[0].rows[7].cells[1].firstElementChild;

var dept_field = document.getElementsByClassName("fieldlist2")[0].rows[1].cells[1].firstElementChild;
var job_field = document.getElementsByClassName("fieldlist2")[0].rows[2].cells[1].firstElementChild;
var banner_id = document.getElementsByClassName("fieldlist2")[0].rows[3].cells[1].firstElementChild;
var v_num = "V" + document.getElementById("tEditMediaVals").firstElementChild.children[1].cells[2].firstElementChild.value.slice(1);

class_field.value = "SRC";
exp_date.value = "";

//This whole section requires direct manipulation, sadly.
document.getElementById("tEditMediaVals").firstElementChild.children[1].cells[3].firstElementChild.value = "0";
document.getElementById("tEditMediaVals").firstElementChild.children[2].cells[1].firstElementChild.value = "020";
document.getElementById("tEditMediaVals").firstElementChild.children[2].cells[3].firstElementChild.value = "0";

dept_field.value = "RECREATION & WELLBEING";
job_field.value = "STUDENT RECREATION CENTER";
banner_id.value = v_num;
