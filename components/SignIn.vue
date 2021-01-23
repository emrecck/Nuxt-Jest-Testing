<template>
  <div class="main-uye-girisi col-sm-12">
    <div class="container">
      <div class="hosgeldiniz">
        <h1 class="login-text">HOŞ GELDİNİZ. LÜTFEN GİRİŞ YAPINIZ !</h1>
        <div class="page-body">
          <form id="myform2" @submit.prevent="login">
            <div class="email">
              <label for="Email">E-Posta:</label>
              <input id="Email" type="text" v:model="account.email" required />
              <!-- <span class="required-3">*</span> -->
            </div>
            <div class="sifre">
              <label for="Password">Şifre:</label>
              <input id="Password" type="password" v:model="account.password" required />
            </div>
            <div class="beni-hatırla clearfix py-5">
              <input
                class="float-left"
                id="BeniHatırla"
                name="BeniHatırla"
                type="checkbox"
                value="true"
              />
              <label class="float-left pl-3" for="BeniHatırla"
                >Beni Hatırla</label
              >
              <span class="forgot-password float-right">
                <a href="#">Şifremi Unuttum</a>
              </span>
            </div>
            <div class="giris">
              <input
                class="giris-buton"
                type="submit"
                value="GİRİŞ YAP"
                form="myform2"
              />
            </div>
            <div class="uye-olun col-sm-12">
              <span class="px-5">Henüz Üye Değilim?</span>
              <a href="uye-olun-page.html">
                <input type="submit" class="uye-olun-buton" value="Üye Olun" />
              </a>
            </div>
          </form>
        </div>
        <div v-if="isError" class="alert alert-danger">
          <p class="">{{ errMsg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  props: {},
  data() {
    return {
      account : {
        email: "",
        password: "",
      },
      isError:false,
      errMsg: ''
    };
  },
  methods: {
    login(){
      this.$store.dispatch('users/login',this.account).catch(error => {
        this.isError = true;
        this.errMsg = error.code;
        setTimeout(() => {
          this.isError = false;
        },5000)
      });

      //this.$router.push("/admin");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-uye-girisi {
  background: url(../assets/images/uye-olun/login_bg.jpg) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
}

.hosgeldiniz {
  width: 500px;
  padding: 50px 80px 160px 80px;
  margin: 150px 0 180px 0;
  background-color: #fff;
  display: inline-block;
  position: relative;
}

.login-text {
  color: #b76f3b;
  font-size: 2.5rem;
  font-weight: 600;
  position: absolute;
  top: -50px;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
}
.login-text::after {
  content: "";
  background: url(../assets/images/uye-olun/brown_line.png) no-repeat;
  widows: 204px;
  height: 4px;
  display: block;
  margin: 10px auto;
  margin-left: 150px;
}
.uye-girisi-img {
  position: relative;
}
.email label {
  display: block;
  color: rgb(213, 50, 53);
  text-align: left;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 10px;
  font-size: 2rem;
  max-width: 100%;
}

.email input {
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
.sifre label {
  display: block;
  color: rgb(213, 50, 53);
  text-align: left;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 10px;
  font-size: 2rem;
  max-width: 100%;
}

.sifre input {
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
.beni-hatırla span a {
  color: #1e4689;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.4rem;
  font-style: italic;
  text-decoration: underline;
  text-align: right;
}

.beni-hatırla label {
  font-size: 1.4rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #886f5d;
}
.giris-buton {
  cursor: pointer;
  border: 0;
  background: #73a12e;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  width: 187px;
  height: 46px;
  float: left;
}

.giris-buton:hover {
  background: #62802a;
  transition: background-color 0.3s ease-in-out;
}
.uye-olun {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #f3eee8;
  padding: 15px 0;
  text-align: center;
}

.uye-olun span {
  color: #b76f3b;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 20px;
}

.uye-olun-buton {
  background: #dc4249;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  padding: 10px 40px;
}

.uye-olun-buton:hover {
  opacity: 0.7;
  transition: opacity 0.3s ease-in;
}
</style>
