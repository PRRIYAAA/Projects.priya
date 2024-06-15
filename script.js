function check() 
{ 
	const word1 = document.getElementById("a").value.trim().toLowerCase().replace(/[^a-z]/g, ""); 
	const word2 = document.getElementById("b").value.trim().toLowerCase().replace(/[^a-z]/g, ""); 
    
    console.log(word1,word2);

	if (word1 === "" || word2 === "") { 
		alert("Please enter both words."); 
		return;
	} 

	if (word1.length !== word2.length) 
        { 
		document.getElementById("result").textContent = "Not anagrams"; 
		return; 
	} 

	const sortedWord1 = word1.split("").sort().join(""); 
	const sortedWord2 = word2.split("").sort().join(""); 

	if (sortedWord1 === sortedWord2) 
    { 
		document.getElementById("result").textContent = "🎇Anagrams🎊 "; 
	}

    else 
    { 
		document.getElementById("result").textContent = "Not anagrams"; 
	} 
}


function again(){
	location.reload()
}

function disableInputs(event) {
    event.preventDefault(); // Prevent the form from submitting
    var inputField1 = document.getElementById('a');
	var inputField2 = document.getElementById('b');
            if (inputField1.value && inputField2.value) {
                inputField1.disabled = true;
                inputField2.disabled = true;
            }
        }




