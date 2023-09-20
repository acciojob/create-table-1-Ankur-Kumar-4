function insert_Row() {

	const newRow = document.createElement("tr");

	newRow.innerHTML=`<td>New Cell1</td>
					<td>New Cell2</td>
 `;
	sampleTable.prepend(newRow);
  
  
}
