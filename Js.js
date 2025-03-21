function showInputs() {
    let nama = document.getElementById("nama").value.trim();
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let formSection = document.getElementById("formSection");
    let inputSection = document.getElementById("inputSection");
    let inputList = document.getElementById("inputList");
    
    if (nama === "" || isNaN(jumlah) || jumlah < 1 || jumlah > 10) {
        alert("Harap isi Nama dan pilih jumlah antara 1-10.");
        return;
    }
    
    inputList.innerHTML = "";
    for (let i = 1; i <= jumlah; i++) {
        let div = document.createElement("div");
        div.innerHTML = `Pilihan ${i}: <input type='text' id='pilihan${i}' class='choice-input' required>`;
        inputList.appendChild(div);
    }
    
    formSection.classList.add("disabled");
    inputSection.classList.remove("hidden");
}

function showSelection() {
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let inputSection = document.getElementById("inputSection");
    let selectionSection = document.getElementById("selectionSection");
    let radioList = document.getElementById("radioList");
    
    radioList.innerHTML = "";
    
    for (let i = 1; i <= jumlah; i++) {
        let inputField = document.getElementById(`pilihan${i}`);
        let text = inputField.value.trim();
        if (text === "") {
            alert("Harap isi semua pilihan sebelum melanjutkan.");
            return;
        }
        
        let div = document.createElement("div");
        div.classList.add("radio-group");
        div.innerHTML = `<input type='radio' name='pilihan' value='${text}'> ${text}`;
        radioList.appendChild(div);
    }
    
    inputSection.classList.add("disabled");
    selectionSection.classList.remove("hidden");
}

function showResult() {
    let nama = document.getElementById("nama").value;
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let selectedRadio = document.querySelector("input[name='pilihan']:checked");
    let resultSection = document.getElementById("resultSection");
    let resultText = document.getElementById("resultText");
    
    let pilihanList = [];
    for (let i = 1; i <= jumlah; i++) {
        pilihanList.push(document.getElementById(`pilihan${i}`).value);
    }
    
    if (!selectedRadio) {
        alert("Harap pilih salah satu pilihan.");
        return;
    }
    
    let selectedChoice = selectedRadio.value;
    
    resultText.innerHTML = `Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlah} pilihan yaitu ${pilihanList.join(", ")}, dan saya memilih ${selectedChoice}.`;
    
    formSection.classList.add("hidden"); 
    inputSection.classList.add("hidden");
    selectionSection.classList.add("hidden");
}