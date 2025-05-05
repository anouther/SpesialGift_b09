
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Happy mensive, Mikael.).split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
    // Setelah teks utama selesai, tambahkan subtitle kecil sebagai link
    const subtitle = document.createElement('p');

    const link = document.createElement('a');
    link.href = "https://drive.google.com/folderview?id=1dNYvibzRsMWirJZOuxqTgS2vvmIw2chQ";
    link.innerText = "Coba buka link ini";
    link.style.color = '#fff'; // Warna teks link
    link.style.textDecoration = 'underline'; // Supaya kelihatan seperti link
    link.target = "_blank"; // Biar link terbuka di tab baru

    subtitle.appendChild(link);
    subtitle.style.fontSize = '20px';
    subtitle.style.marginTop = '2px';

    // Menambahkan subtitle di bawah #title
    titleElement.appendChild(subtitle);
}

        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
