var personelDetails;
var photo;
var body = document.querySelector("body");
var container = document.createElement("div");
container.className = "container";
var formdis = document.createElement("div");
formdis.className = "formdis";
var form = document.createElement("form");
form.className = "form";
form.setAttribute("id", "formid");
var title = document.createElement("div");
title.className = "title";
title.innerHTML = "Kişisel Bilgiler";
var hr = document.createElement("hr");
hr.className = "hr";
var avatarContainer = document.createElement("div");
avatarContainer.className = "avatarContainer";
var avatarupload = document.createElement("div");
avatarupload.className = "avatar-upload";
avatarupload.setAttribute("id", "avatar");
avatarupload.addEventListener("click", function () {
  document.getElementById("imageUpload").click();
});
var avataredit = document.createElement("div");
var input = document.createElement("input");
input.setAttribute("type", "file");
input.setAttribute("id", "imageUpload");
input.setAttribute("accept", ".png, .jpg, .jpeg");
input.setAttribute("name", "base64");

var label = document.createElement("label");
label.setAttribute("for", "imageUpload");
input.style.display = "none";
var avatarpreview = document.createElement("div");
avatarpreview.className = "avatar-preview";
avatarpreview.setAttribute("id", "avatarpreview");
var clock = document.createElement("div");
clock.setAttribute("id", "clock");
clock.setAttribute(
  "style",
  "background-image: url('33-336751_facebook-camera-icon-png-transparent-png.png');",
  "width: 60px;"
);

clock.style.width = "30px";
clock.style.height = "30px";
clock.style.opacity = "0.7";
clock.style.marginTop = "25px";
clock.style.marginLeft = "25px";
clock.className = "clock";
var yazi = document.createElement("p");
yazi.innerHTML = "Fotoğraf Ekle";
yazi.className = "yaziclass";
var bilgiler = document.createElement("div");
bilgiler.className = "bilgilerclass";
var isimlabel = document.createElement("label");
isimlabel.className = "isimlabel";
isimlabel.innerHTML = "İsim*";
var isiminput = document.createElement("input");
isiminput.className = "isiminput";
isiminput.id = "isimid";
isiminput.onkeypress = function () {
  Harf(event);
};
isiminput.setAttribute("name", "isimname");
var soylabel = document.createElement("label");
soylabel.className = "soylabel";
soylabel.innerHTML = "Soy isim*";
var soyinput = document.createElement("input");
soyinput.className = "soyinput";
soyinput.onkeypress = function () {
  Harf(event);
};
soyinput.setAttribute("name", "soyname");
var postatel = document.createElement("div");
postatel.className = "postatelclass";
var posta = document.createElement("div");
posta.className = "postaclass";
var epostalabel = document.createElement("label");
epostalabel.className = "epostalabel";
epostalabel.innerHTML = "E-posta adresi*";
var epostainput = document.createElement("input");
epostainput.className = "epostainput";
epostainput.setAttribute("id", "epostaid");
epostainput.onkeyup = function () {
  Validation();
};
epostainput.setAttribute("name", "epostaname");
var text = document.createElement("p");
text.setAttribute("id", "Text");
text.className = "p";
var telefon = document.createElement("div");
telefon.className = "telefonclass";
var telefonlabel = document.createElement("label");
telefonlabel.className = "telefonlabel";
telefonlabel.innerHTML = "Telefon numarası";
var telefoninput = document.createElement("input");
telefoninput.className = "telefoninput";
telefoninput.setAttribute("id", "telefonid");
telefoninput.onkeyup = function () {
  TelefonValidation();
};
telefoninput.setAttribute("name", "telefonname");
var textTelefon = document.createElement("p");
textTelefon.setAttribute("id", "texttelefon");
textTelefon.className = "textp";
var adreslabel = document.createElement("label");
adreslabel.className = "adreslabel";
adreslabel.innerHTML = "Adres";
var adresinput = document.createElement("input");
adresinput.className = "adresinput";
adresinput.setAttribute("id", "adresid");
var adresp = document.createElement("p");
adresp.setAttribute("id", "adrespid");
adresinput.onkeypress = function () {
  Harf(event);
};
adresinput.onkeyup = function () {
  checkChar();
};
adresinput.setAttribute("name", "adresname");
var postasehir = document.createElement("div");
postasehir.className = "postasehirclass";
var postadiv = document.createElement("div");
postadiv.className = "postadivclass";
var postalabel = document.createElement("label");
postalabel.className = "postalabel";
postalabel.innerHTML = "Posta kodu";

var postainput = document.createElement("input");
postainput.className = "postainput";
postainput.onkeypress = function () {
  Sayi(event);
};
postainput.setAttribute("name", "postaname");
var sehirdiv = document.createElement("div");
sehirdiv.className = "sehirdivclass";
var sehirlabel = document.createElement("label");
sehirlabel.className = "sehirlabel";
sehirlabel.innerHTML = "Şehir/ilçe";
var sehirinput = document.createElement("select");
sehirinput.className = "sehirinput";
let yazdir = "";
[...sehirler].forEach((sehir) => {
  yazdir += `<option>${sehir.name}</option>`;
});
sehirinput.innerHTML = yazdir;
sehirinput.setAttribute("id", "sehirler");
var buton = document.createElement("button");
buton.className = "buton";
buton.innerHTML = "KAYDET";
buton.setAttribute("id", "btn");
buton.onclick = function () {
  testResults(this.form);
};
buton.type = "button";
form.appendChild(title);
form.appendChild(hr);
avataredit.appendChild(input);
avataredit.appendChild(label);
avatarpreview.appendChild(clock);
avatarpreview.appendChild(yazi);
avatarupload.appendChild(avataredit);
avatarupload.appendChild(avatarpreview);
avatarContainer.appendChild(avatarupload);
form.appendChild(avatarContainer);
bilgiler.appendChild(isimlabel);
bilgiler.appendChild(isiminput);
bilgiler.appendChild(soylabel);
bilgiler.appendChild(soyinput);
form.appendChild(bilgiler);
posta.appendChild(epostalabel);
posta.appendChild(epostainput);
telefon.appendChild(telefonlabel);
telefon.appendChild(telefoninput);
postatel.appendChild(posta);
postatel.appendChild(telefon);
form.appendChild(postatel);
form.appendChild(text);
form.appendChild(textTelefon);
form.appendChild(adreslabel);
form.appendChild(adresinput);
form.appendChild(adresp);
postadiv.appendChild(postalabel);
postadiv.appendChild(postainput);
sehirdiv.appendChild(sehirlabel);
sehirdiv.appendChild(sehirinput);
postasehir.appendChild(postadiv);
postasehir.appendChild(sehirdiv);
form.appendChild(postasehir);
form.appendChild(buton);
formdis.appendChild(form);
container.appendChild(formdis);
body.appendChild(container);
//sadece harf girsine izin verir
function Harf(e) {
  islem = document.all ? window.event : e;

  karakter = document.all ? islem.keyCode : islem.which;

  if (karakter >= 48 && karakter <= 57) {
    if (document.all) {
      islem.returnValue = false;
    } else {
      islem.preventDefault();
    }
  }
}
//sadece sayi girisine izin veirir
function Sayi(e) {
  islem = document.all ? window.event : e;

  karakter = document.all ? islem.keyCode : islem.which;

  if (karakter < 48 || karakter > 57) {
    if (document.all) {
      islem.returnValue = false;
    } else {
      islem.preventDefault();
    }
  }
}
//e posta validayson islem
function Validation() {
  var Email = document.getElementById("epostaid").value;
  //   var textp = document.getElementById("Text");
  var Kontrol = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (Email.match(Kontrol)) {
    epostainput.style.cssText = "border-color: green;";
    text.innerHTML = "Eposta adresi geçerlidir.";
  } else {
    epostainput.style.cssText = "border-color: red;";
    text.innerHTML = "Geçersiz eposta adresi.";
  }
}

//telefon validasyon
function TelefonValidation() {
  var Telefon = document.getElementById("telefonid").value;
  //   var textp = document.getElementById("Text");
  var Kontrol = /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (Telefon.match(Kontrol)) {
    telefoninput.style.cssText = "border-color: green;";
    textTelefon.innerHTML = "Telefon numarası geçerlidir.";
  } else {
    telefoninput.style.cssText = "border-color: red;";
    textTelefon.innerHTML = "Geçersiz telefon numarası.";
  }
}
//adres alani kontrolu
function checkChar() {
  var allowedChar = 100;
  var adres = document.getElementById("adresid");
  var adresLength = adres.value.length;
  if (adresLength > allowedChar) {
    adres.value = adres.value.substring(0, allowedChar);
    document.getElementById("adrespid").innerHTML =
      "<span style='color:red;'>UYARI: En fazla " +
      allowedChar +
      " karakter girebilirsiniz</span>";
    adresinput.style.cssText = "border-color:red;";
  }
}

//fotoğraf ekle alani
document
  .getElementById("imageUpload")
  .addEventListener("change", readURL, true); //imageupload change olduğunda

function readURL() {
  const file = document.getElementById("imageUpload").files[0]; //seçilen resim objesini tanımladı
  const reader = new FileReader(); //fileReader apisini başlattıık
  reader.onloadend = function (a, b, c) {
    //okuma işlemi başarılı ise onload ile gelen değeri istediğimiz yere bastrıyoruz
    if (reader.result) {
      document.getElementById("avatarpreview").style.backgroundImage =
        "url(" + reader.result + ")";
    }
    photo = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file); //resmi okuyoruz ve parametre olarak file objesini verdik
    //giriş dosyasının içeriğini okur. result özelliği, dosyanın verilerini temsil eden bir URL içerir.
    clock.style.visibility = "hidden"; //kamera resmini ekrandan kaldırdık
  }
}
//kaydete basınca değerleri console a yazdrma
function testResults(form) {
  var images = photo;
  var name = form.isimname.value;
  var surname = form.soyname.value;
  var eposta = form.epostaname.value;
  var telefon = form.telefonname.value;
  var adres = form.adresname.value;
  var posta = form.postaname.value;
  var sehir = form.sehirler.value;

  var personelDetails = {
    personelDetails: {
      Photo: images,
      Name: name,
      Surname: surname,
      Eposta: eposta,
      Telephone: telefon,
      Adress: adres,
      Posta: posta,
      Cities: sehir,
    },
  };
  console.log(personelDetails);
}
