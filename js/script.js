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
    if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0 || berat <= 0 ) {
        document.getElementById("resultBMI").innerHTML= "<h4> Silahkan masukkan nilai berat dan tinggi yang valid.</h4>";
        document.getElementById("adviceBMI").textContent = "";
        return;
    }



    // Perhitungan BMI
    const bmi = berat / (tinggi * tinggi);
    const roundedBMI = bmi.toFixed(1); // hasil dibulatkan ke 1 desimal

    // Menentukan kategori BMI
    let category ;
    let advice ; 
    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
        advice = "Anda berada dalam kategori berat badan kurang. Pertimbangkan untuk makan makanan bergizi dan menambah asupan kalori.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal (Sehat)";
        advice = "Anda memiliki berat badan yang sehat. Pertahankan pola makan yang seimbang dan rutin berolahraga.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan Berat Badan"
        advice ="Anda memiliki sedikit kelebihan berat badan. Cobalah berolahraga secara teratur dan jaga pola makan untuk mencapai berat badan ideal.";
    } else {
        category = "Obesitas";
        advice ="Hasil BMI Anda menunjukan obesitas. Sebaiknya Anda menjaga pola makan sehat dan berkonsultasi dengan profesional untuk bimbingan lebih lanjut.";
    }

    // Menampilkan hasil
    // document.getElementById("resultBMI").innerText = `BMI Anda: ${bmi.toFixed(1)} (${category})`;

    const header = document.createElement("h3");
    header.textContent = `Hasil Perhitungan BMI (${gender})`;

    const resultBMIText = document.createElement("p");
    resultBMIText.innerHTML = `Hasil BMI Anda ${roundedBMI} <br> Anda memiliki berat badan ${category}`;

     // Temukan elemen div hasil
     const resultBMIDiv = document.getElementById("resultBMI");

     // Kosongkan isi dari resultBMIDiv untuk menghindari penumpukan hasil
     resultBMIDiv.innerHTML = "";
 
     // Tambahkan header, hasil, dan pesan gender ke resultBMIDiv
     resultBMIDiv.appendChild(header);
     resultBMIDiv.appendChild(resultBMIText);
     document.getElementById("adviceBMI").textContent = advice;
     
    // const resultBMIDiv = document.getElementById("resultBMI");
    // resultBMIDiv.innerHTML = `Hasil BMI ${roundedBMI} <br> Anda memiliki berat badan ${category}`;
}
