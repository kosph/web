function selectOnchange(id){
	let s1 = document.getElementById(id).value;
	switch(s1){
		case '1':div1.innerHTML = '<input id = "table" type = "text" placeholder = "Table Name"/>'+
		'<input id = "column" type="number" min = "1" placeholder="Columns Numbers" onblur="addcolumns(this.value)"/>';
		div2.innerHTML="";
		break;
		case '2':div1.innerHTML = "";div2.innerHTML = "";
		addrows();
		break;
		case '3':div1.innerHTML = "";div2.innerHTML = "";
		deleterows();
		break;
		case '4':
		div1.innerHTML = '';
		div1.innerHTML = "WARNING: You cannot undo this action!";
		div2.innerHTML = "";
		div2.innerHTML = '<button onclick = "deletetables();">commit</button>';
		
		break;
				
		default:div1.innerHTML = "";div2.innerHTML="";break;
	}

}
function deletetables(){
	if(tables.length == 0||select2.value == "")
		return;
		if(select2.options.length==2){
			select2.options.remove(1);
		select2.children[0].selected = true;

		}
	else {
		for(i = 0;i<select2.options.length;i++){
		if(select2.options[i].selected){
			alert(i);
		select2.options.remove(i);
		break;
		}
		}
		select2.children[1].selected = true;
	}
	
	delete tables[select2.value-1];
	console.log(tables.length);
	
	
}
function deleterows(){
	if(tables.length == 0)
		return;
	temp1 = tables[select2.value-1].column.length;
	temp2 = '';
	for(i=1;i<=temp1;i++){
		temp2 += '<input id = "attr'+i+'"type="text" placeholder="'+tables[select2.value-1].column[i-1].name+'"/>';
	}
	temp2 += '<br/><button onclick = "deleterowCommit();">commit</button>';
	div2.innerHTML = temp2;
}
function deleterowCommit(){
	
	temp1 = tables[select2.value-1].column[0].row.length;
	temp2 = tables[select2.value-1].column.length;
	temp4 = new Array();
	for(i = 0;i<temp2;i++){
		temp4.push(document.getElementById('attr'+(i+1)).value);
	}
	for(i=0;i<temp1;i++){
		temp3 = 0;
		for(j=0;j<temp2;j++){
			if(temp4[j]==tables[select2.value-1].column[j].row[i])
				temp3++;
			else if(temp4[j]=='')
				temp3++;
		
		}
		if(temp3==3){
			for(j=0;j<temp2;j++){
				tables[select2.value-1].column[j].row.splice(i,1);
			}
		}
	}
	drawtables2();
}

function addrows(){
	if(tables.length == 0)
		return;
	temp1 = tables[select2.value-1].column.length;
	temp2 = '';
	for(i=1;i<=temp1;i++){
		temp2 += '<input id = "attr'+i+'"type="text" placeholder="'+tables[select2.value-1].column[i-1].name+'"/>';
	}
	temp2 += '<br/><button onclick = "rowCommit();">commit</button>';
	div2.innerHTML = temp2;
}
function rowCommit(){
	temp1 = tables[select2.value-1].column.length;
	temp3 = '<tr>'
	for(i=1;i<=temp1;i++){
		temp2 =document.getElementById('attr'+i).value;
		tables[select2.value-1].column[i-1].row.push(temp2);
		temp3 +=('<td>' + temp2 +'</td>');
	}	
	htables[select2.value-1] += (temp3+'</tr>');
	drawtables();	
		
	
}
function addcolumns(ncol){
	colNumber = ncol;
	temp1 = "";
	div2.innerHTML="";
	for(i=1;i<=ncol;i++){
		temp1 += '<input id = "attr'+i+'"type="text" placeholder="Attribute"/>';
	}
	temp1 += '<br/><button onclick = "columnCommit();">commit</button>';
	div2.innerHTML = temp1;
}
function columnCommit(){
	tabNumber++;
	temp2 = "";
	temp2 = document.getElementById("table").value;
	temp1 = new Array();
	temp4 = "";
	temp4 += '<tr>';
	for(i=1;i<=colNumber;i++){
		temp3 = document.getElementById('attr'+i).value;
		temp1.push({name:temp3,row:new Array()});
		temp4 += '<th>'+temp3+'</th>';
	}
	temp4 += '</tr>';
	tables.push ({name:temp2,column:temp1});
	temp1 = document.createElement('option');
	temp1.value = tabNumber;
	temp1.innerHTML = temp2;
	select2.appendChild(temp1);
	select2.value = tabNumber;
	
	htables.push(temp4);
	drawtables();
}
function drawtables(){
	if (select2.value == ""){
	div3.innerHTML = '';
	return;}
	div3.innerHTML = '<table>'+htables[select2.value-1]+'</table>';

}
function drawtables2(){
	temp1 = '<tr>';
	temp2 = tables[select2.value-1].column[0].row.length;
	temp3 = tables[select2.value-1].column.length;
	
	for(i = 0;i<temp3;i++){
		temp1+='<th>'+tables[select2.value-1].column[i].name+'</th>';
	}
	temp1+='</tr>';
	for(i=0;i<temp2;i++){
		temp1+='<tr>';
		for(j=0;j<temp3;j++){
		temp1+='<td>'+tables[select2.value-1].column[j].row[i]+'</td>'
		
	}
	temp1+='</tr>';
	}
	htables[select2.value-1] = temp1;
	drawtables();
}
let i = 0;
let j = 0;
let temp1 = "";
let temp2;
let temp3;
let temp4;
let div1 = document.getElementById('d-input1');
let div2 = document.getElementById('d-input2');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let div3 = document.getElementById("d-table");

let colNumber = 0;
let tables = [];
let htables = new Array();
let tabNumber = 0;