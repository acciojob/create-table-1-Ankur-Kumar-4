function insert_Row() {

	const newRow = document.createElement("tr");

	newRow.innerHTML=`<td>New cell1</td>
					<td>New cell2</td>
 `;
	sampleTable.prepend(newRow);
  
  
}
