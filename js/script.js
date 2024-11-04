// Javascript


function calculateBMI() {

    // Mencegah halaman reload ketika submit form
    //event.preventDefault();

    // Mengambil nilai dari input form
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // Konversi cm ke meter

    // Dapatkan nilai gender
    const gender = document.querySelector('input[name="jenkel"]:checked').value;

    // Validasi input
    if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0 || berat <= 0) {
        document.getElementById("result").innerText = "Silakan masukkan nilai berat dan tinggi yang valid.";
        return;
    }

    // Perhitungan BMI
    const bmi = berat / (tinggi * tinggi);
    const roundedBMI = bmi.toFixed(1); // hasil dibulatkan ke 1 desimal

    // Menentukan kategori BMI
    let category ;
    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal (Sehat)";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Obesitas";
    }

    // Menampilkan hasil
    // document.getElementById("result").innerText = `BMI Anda: ${bmi.toFixed(1)} (${category})`;

    const header = document.createElement("h3");
    header.textContent = `Hasil Perhitungan BMI (${gender})`;

    const resultText = document.createElement("p");
    resultText.innerHTML = `Hasil BMI Anda ${roundedBMI} <br> Anda memiliki berat badan ${category}`;

     // Temukan elemen div hasil
     const resultDiv = document.getElementById("result");

     // Kosongkan isi dari resultDiv untuk menghindari penumpukan hasil
     resultDiv.innerHTML = "";
 
     // Tambahkan header, hasil, dan pesan gender ke resultDiv
     resultDiv.appendChild(header);
     resultDiv.appendChild(resultText);
     
    // const resultDiv = document.getElementById("result");
    // resultDiv.innerHTML = `Hasil BMI ${roundedBMI} <br> Anda memiliki berat badan ${category}`;
}
