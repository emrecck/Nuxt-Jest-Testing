<template>
  <div class="main">
    <div class="container py-5">
      <div class="row">
        <div class="col-xs-12 col-md-5 pt-5">
          <div class="uye-olun">
            <h2 class="uye-olun-baslik-1">Üye Olun</h2>
            <h4 class="uye-olun-baslik-2 py-3">Kişisel Bilgilerim</h4>

            <div class="uye-olun-kart">
              <form id="myform" @submit.prevent="pressed">
                <div class="inputlar">
                  <label for="FirstName">Adı:</label>
                  <input type="text" name="f-name" id="f-nameID" required />
                  <span class="required-1">*</span>
                </div>

                <div class="inputlar">
                  <label for="LastName">Soyadı:</label>
                  <input type="text" required />
                  <span class="required-1">*</span>
                </div>

                <div class="inputlar" id="myform">
                  <label for="Email">E-Posta Adresi:</label>
                  <input type="Email" required />
                  <span class="required-1">*</span>
                </div>

                <div class="sifre">
                  <div class="inputlar">
                    <label for="Password">Şifre:</label>
                    <input type="password" required />
                    <span class="required-1">*</span>
                  </div>

                  <div class="inputlar">
                    <label for="ConfirmPassword">Şifre (tekrar):</label>
                    <input type="password" required />
                    <span class="required-1">*</span>
                  </div>

                  <div
                    class="g-recaptcha"
                    data-sitekey="6LerlNkZAAAAAGPceTJZN6bVeXvUo4rLF0o7emU-"
                    style="margin-top: 20px"
                  >
                    <div style="width: 304px; height: 78px">
                      <div>
                        <iframe
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LerlNkZAAAAAGPceTJZN6bVeXvUo4rLF0o7emU-&amp;co=aHR0cHM6Ly93d3cuaGFzYW5iZXkuY29tOjQ0Mw..&amp;hl=tr&amp;v=UFwvoDBMjc8LiYc1DKXiAomK&amp;size=normal&amp;cb=k9j6j6ddcw8"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-qnts3ews59dv"
                          frameborder="0"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                        ></iframe>
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        class="g-recaptcha-response"
                        style="
                          width: 250px;
                          height: 40px;
                          border: 1px solid rgb(193, 193, 193);
                          margin: 10px 25px;
                          padding: 0px;
                          resize: none;
                          display: none;
                        "
                      ></textarea>
                    </div>
                    <iframe style="display: none"></iframe>
                  </div>
                </div>

                <div class="en-alt text-left pt-5">
                  <div>
                    <input type="checkbox" required />
                    <label for="Newsletter">Beni haber grubuna ekle</label>
                  </div>
                  <div>
                    <input type="checkbox" required />
                    <span>
                      Kişisel Verilerin Korunması -
                      <span style="text-decoration: underline"
                        >Aydınlatma Metnini</span
                      >
                    </span>
                    <span>Onaylıyorum</span>
                  </div>
                  <div class="pt-5">
                    <input type="checkbox" required />
                    <label for="accept-privacy-policy"
                      >Gizlilik koşullarını okudum.</label
                    >
                    <span>Kabul ediyorum.</span>
                  </div>
                  <div class="text-center py-5">
                    <input
                      type="submit"
                      id="register-button"
                      class="uye-olun-buton col-sm-9"
                      value="Kaydet"
                      name="register-button"
                      form="myform"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-7 pt-5">
          <div class="zaten-uye-misin">
            <div class="zaten-uye-misin-kart">
              <div class="zaten-uye-misin-bilgi">
                <h2>Hasanbey.com'a üye olduğunuzda;</h2>
                <p>
                  Siparişlerinizin durumunu takip edebilir,<br />
                  üyelerimize özel kampanya ve indirimlerden
                  yararlanabilirsiniz.
                </p>
                <p>
                  Ayrıca indirim, yeni sezon mahsulleri ve kampanyalardan
                  e-bülten<br />
                  yoluyla öncelikli olarak haberdar olabilirsiniz.
                </p>
              </div>

              <div class="zaten-uye-misin-img">
                <img src="../assets/images/uye-olun/register_icons.png" />
              </div>

              <div class="zaten-uye-misin-buton text-center py-5">
                <h4>Zaten üye misiniz?</h4>
                <a href="uye-girisi-page.html">
                  <input
                    class="giris-yap col-md-4 col-sm-4"
                    type="button"
                    value="Giriş Yap >"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: "SignUp",
  props: {},
  data() {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },
  methods:{
    pressed(){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user =>{

        console.log(user);
      }).catch(error =>{
        this.errors = error;
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding-top: 100px;
  background: url(../assets/images/uye-olun/login_bg.jpg) no-repeat center;
  background-size: cover;
}
.uye-olun {
  background-color: #fff;
  position: relative;
}

.zaten-uye-misin {
  padding: 0 30px;
}

.zaten-uye-misin-kart {
  background-color: #fff;
  position: relative;
  padding: 50px 70px;
}

.zaten-uye-misin-bilgi h2 {
  font-size: 2.5rem;
  color: #d53235;
  text-align: left;
  font-weight: bold;
}

.zaten-uye-misin-bilgi p {
  font-family: Georgia, sans-serif;
  color: #886f5d;
  text-align: left;
  font-size: 1.4rem;
  margin: 25px 0;
}

.zaten-uye-misin-img img {
  width: 100%;
}

.zaten-uye-misin-buton h4 {
  font-size: 1.8rem;
  color: #b76f3b;
}

.giris-yap {
  cursor: pointer;
  background: #de454b;
  border: 0px;
  height: 50px;
  color: #fff !important;
  font-size: 2rem;
  font-weight: 500;
}

.giris-yap:hover {
  background: #bf3b3f;
  transition: background-color 0.3s ease-out 0s;
}

.uye-olun-baslik-1 {
  color: #b76f3b;
  position: absolute;
  top: -43px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
}
.uye-olun-baslik-1::after {
  content: "";
  background: url(../assets/images/uye-olun/brown_line.png) no-repeat;
  widows: 204px;
  height: 4px;
  display: block;
  margin-top: 10px;
  margin-left: 170px;
}
.uye-olun-baslik-2 {
  color: #b76f3b;
  font-weight: bold;
}

.uye-olun-kart {
  padding: 0 50px 0 50px;
}
.inputlar {
  position: relative;
}
.inputlar label {
  display: block;
  color: rgb(213, 50, 53);
  text-align: left;
  font-weight: bold;
  font-size: 1.8rem;
  max-width: 100%;
  margin-top: 18px;
  margin-bottom: 10px;
}

.inputlar input {
  background-color: rgb(234, 230, 220);
  box-shadow: rgba(0, 0, 0, 0.03) 2px 3.464px 0px 0px inset;
  width: 100%;
  height: 42px;
  color: #836957;
  font-family: Georgia, "Times New Roman", Times, serif;
  border-radius: 2px;
  border: 0px;
  padding: 8px;
  font-size: 1.4rem;
}

.required-1 {
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 0px;
  right: 0px;
  color: rgb(0, 0, 0);
}
.en-alt label {
  font-weight: 100;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #886f5d !important;
  font-size: 1.3rem;
}

.en-alt span {
  font-weight: 100;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #886f5d !important;
  font-size: 1.3rem;
}
.en-alt div input {
  margin-right: 10px;
}
.uye-olun-buton {
  cursor: pointer;
  background: #73a12e;
  border: 0;
  height: 46px;
  color: #fff;
  font-size: 1.8rem;
}

.uye-olun-buton:hover {
  background: #62802a;
  transition: background-color 0.3s ease-out;
}
</style>
