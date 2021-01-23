<template>
  <div class="container">
    <div>
      <h4 class="">Fatura Adresi</h4>

      <div class="personel-info-inner-container">
        <div class="personal-informations">
          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">Adı:</label>
            <input class="col-sm-11" title="Adınızı yazınız" type="text" />
            <span class="col-sm-1">*</span>
          </div>

          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">Soyadınız:</label>
            <input class="col-sm-11" title="Soyadınızı yazınız" type="text" />
            <span class="col-sm-1">*</span>
          </div>

          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">E-posta:</label>
            <input
              class="col-sm-11"
              title="Geçerli bir email adresi yazınız"
              type="text"
            />
            <span class="col-sm-1">*</span>
          </div>

          <div class="inputs row">
            <input type="checkbox" value="true" />
            <input type="hidden" value="false" />
            <label class="kurumsal-label">Kurumsal bir satıştır</label>
          </div>
        </div>

        <div class="delivery-address">
          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">Şehir:</label>
            <select title="İl seçiniz">
              <option>Şehir seçiniz</option>
              <option>Adana</option>
              <option>Adıyaman</option>
              <option>Afyonkarahisar</option>
              <option>Ağrı</option>
              <option>Aksaray</option>
              <option>Amasya</option>
              <option>Ankara</option>
              <option>Antalya</option>
              <option>Ardahan</option>
              <option>Artvin</option>
              <option>Aydın</option>
              <option>Balıkesir</option>
              <option>Bartın</option>
              <option>Batman</option>
              <option>Bayburt</option>
              <option>Bilecik</option>
              <option>Bingöl</option>
              <option>Bitlis</option>
              <option>Bolu</option>
              <option>Burdur</option>
              <option>Bursa</option>
              <option>Çanakkale</option>
              <option>Çankırı</option>
              <option>Çorum</option>
              <option>Denizli</option>
              <option>Diyarbakır</option>
              <option>Düzce</option>
              <option>Edirne</option>
              <option>Elazığ</option>
              <option>Erzincan</option>
              <option>Erzurum</option>
              <option>Eskişehir</option>
              <option>Gaziantep</option>
              <option>Giresun</option>
              <option>Gümüşhane</option>
              <option>Hakkari</option>
              <option>Hatay</option>
              <option>Iğdır</option>
              <option>Isparta</option>
              <option>İstanbul (Asya)</option>
              <option>İstanbul (Avr)</option>
              <option>İzmir</option>
              <option>Kahramanmaraş</option>
              <option>Karabük</option>
              <option>Karaman</option>
              <option>Kars</option>
              <option>Kastamonu</option>
              <option>Kayseri</option>
              <option>Kırıkkale</option>
              <option>Kırklareli</option>
              <option>Kırşehir</option>
              <option>Kilis</option>
              <option>Kocaeli</option>
              <option>Konya</option>
              <option>Kütahya</option>
              <option>Malatya</option>
              <option>Manisa</option>
              <option>Mardin</option>
              <option>Mersin</option>
              <option>Muğla</option>
              <option>Muş</option>
              <option>Nevşehir</option>
              <option>Niğde</option>
              <option>Ordu</option>
              <option>Osmaniye</option>
              <option>Rize</option>
              <option>Sakarya</option>
              <option>Samsun</option>
              <option>Siirt</option>
              <option>Sinop</option>
              <option>Sivas</option>
              <option>Şanlıurfa</option>
              <option>Şırnak</option>
              <option>Tekirdağ</option>
              <option>Tokat</option>
              <option>Trabzon</option>
              <option>Tunceli</option>
              <option>Uşak</option>
              <option>Van</option>
              <option>Yalova</option>
              <option>Yozgat</option>
              <option>Zonguldak</option>
            </select>
            <span class="col-sm-1">*</span>
          </div>

          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">İlçe:</label>
            <select title="İlçe seçiniz">
              <option>İlçe seçiniz</option>
            </select>
            <span class="col-sm-1">*</span>
          </div>

          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">Mahalle:</label>
            <select title="Mahalle seçiniz">
              <option>Mahalle seçiniz</option>
            </select>
            <span class="col-sm-1">*</span>
          </div>

          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">Adres 1:</label>
            <input
              class="col-sm-11"
              title="Adresinizi yazınız"
              type="text"
              value=""
            />
            <span class="col-sm-1">*</span>
          </div>

          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">Adres 2:</label>
            <input class="col-sm-11" type="text" />
          </div>

          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">Posta Kodu:</label>
            <input class="col-sm-11" type="text" />
          </div>

          <div class="inputs row">
            <label class="text-left col-sm-12 px-0">Telefon Numarası:</label>
            <input
              class="col-sm-11"
              title="Telefon numaranızı yazınız"
              type="text"
            />
            <span class="col-sm-1">*</span>
          </div>
        </div>

        <div class="inputs row">
          <input type="checkbox" />
          <label>Beni üye yap</label>
        </div>

        <div class="inputs row">
          <input type="checkbox" value="true" />
          <input type="hidden" value="false" />
          <label>Fatura adresim ile sevk adresim aynı</label>
        </div>
      </div>
    </div>
    <div>
      <input
        type="submit"
        name="checkout"
        value="SATIN ALIYORUM"
        class="satin-al-input"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "Bill",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 500px;
}

h4 {
  color: #a0885a;
  text-align: left;
  padding: 20px 0;
  font-size: 16px;
  font-weight: bold;
  font-family: kg_turning_tablesregular, sans-serif;
  width: 100%;
}

h4:after {
  content: "";
  width: 100%;
  height: 12px;
  background: url(../assets/images/bill/olive_border.png) no-repeat;
  display: block;
  margin-top: 10px;
}

.inputs {
  padding: 8px;
}

.inputs label {
  padding: 0px 5px;
  font-family: kg_turning_tablesregular, sans-serif;
  color: #515151;
  text-align: left;
  font-weight: bold;
  font-size: 11px;
}

.inputs span {
  margin-top: 15px;
  margin-left: -10px;
  color: #d53235;
  font-size: 15px;
}

.personal-informations input[type="text"] {
  border-radius: 2px;
  background-color: #f5f5f5;
  -webkit-box-shadow: inset 2px 3.464px 0 0 rgba(0, 0, 0, 0.03);
  box-shadow: inset 2px 3.464px 0 0 rgba(0, 0, 0, 0.03);
  width: 100%;
  height: 40px;
  border: 0;
  color: #836957;
  padding: 8px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.delivery-address input[type="text"] {
  border-radius: 2px;
  background-color: #f5f5f5;
  -webkit-box-shadow: inset 2px 3.464px 0 0 rgba(0, 0, 0, 0.03);
  box-shadow: inset 2px 3.464px 0 0 rgba(0, 0, 0, 0.03);
  width: 100%;
  height: 40px;
  border: 0;
  color: #836957;
  padding: 8px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.delivery-address select {
  background: #f5f5f5;
  border: #dcdcdc 1px solid;
  border-radius: 2px;
  padding: 10px 7px;
  width: 92%;
  height: 40px;
  color: #636262;
}
.satin-al-input {
  cursor: pointer;
  height: 48px;
  border: none;
  background: #73a12e;
  width: 100% !important;
  float: left;
  margin-top: 25px;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  outline: none;
}
.satin-al-input:hover {
  background-color: #62802a;
  transition: background-color 0.4s ease-in 0s;
  outline: none;
}
</style>

