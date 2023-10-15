<!--
  FILEPATH: ..\FrontEnd\src\components\Entrada.vue

  This component represents the login page of the application. It contains a form with fields for the user's email, password, and captcha answer. The user can submit the form to log in to the application.

  Props:
  None

  Events:
  None

  Methods:
  - submitForm: This method is called when the user submits the login form. It prevents the default form submission behavior and emits a 'login' event with the user's email and password as arguments.

  Data:
  - UserName: The user's email address.
  - Password: The user's password.
  - captchaQuestion: The question to be answered by the user to verify that they are not a robot.
  - captchaAnswer: The user's answer to the captcha question.
  - errorText: The error message to be displayed if there is an error with the login form.

  Slots:
  None
-->
<template>
  <div id="fullPage" class="fullPage">
    <div id="brandingWrapper" class="float">
      <div id="branding" class="illustrationClass"></div>
    </div>
    <div id="contentWrapper" class="float">
      <div id="content">
        <div id="header">
          <img
            class="logoImage"
            src="../assets/login/logo.jpg"
            alt="Universidad de Guanajuato"
          />
        </div>
        <div id="workArea">
          <div id="authArea" class="groupMargin">
            <div id="loginArea">
              <div id="loginMessage" class="groupMargin">Inicie sesión</div>
              <form
                @submit.prevent="submitForm"
                id="loginForm"
                autocomplete="off"
                novalidate
              >
                <div id="error" class="fieldMargin error smallText">
                  <label id="errorText" for="">{{ errorText }}</label>
                </div>
                <div id="formsAuthenticationArea">
                  <div id="userNameArea">
                    <input
                      v-model="UserName"
                      id="userNameInput"
                      name="UserName"
                      type="email"
                      tabindex="1"
                      class="text fullWidth"
                      spellcheck="false"
                      placeholder="alguien@example.com"
                      autocomplete="off"
                    />
                  </div>
                  <div id="passwordArea">
                    <input
                      v-model="Password"
                      id="passwordInput"
                      name="Password"
                      type="password"
                      tabindex="2"
                      class="text fullWidth"
                      placeholder="Contraseña"
                      autocomplete="off"
                    />
                  </div>
                  <div id="captchaArea">
                    <div>{{ captchaQuestion }}</div>
                    <input
                      v-model="captchaAnswer"
                      type="text"
                      placeholder="Respuesta"
                      autocomplete="off"
                    />
                  </div>
                  <div id="submissionArea" class="submitMargin">
                    <input
                      type="submit"
                      id="submitButton"
                      value="Iniciar sesión"
                      tabindex="4"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="footer">
          <div id="footerLinks" class="floatReverse">
            <div>
              <span id="copyright"> &#169; 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--
  FILEPATH: ..\FrontEnd\src\components\Entrada.vue
  DESCRIPTION: This component is responsible for rendering the login form and handling user authentication.
-->

<script>
import { useStore } from "vuex";

export default {
  data() {
    return {
      UserName: "", // The username entered by the user.
      Password: "", // The password entered by the user.
      errorText: "", // The error message to be displayed to the user.
      captchaQuestion: "", // The math question to be displayed as a CAPTCHA.
      captchaCorrectAnswer: null, // The correct answer to the CAPTCHA.
      captchaAnswer: "", // The user's answer to the CAPTCHA.
    };
  },
  methods: {
    /*
      Generates a math CAPTCHA by generating two random numbers between 0 and 15 and setting
      the captchaQuestion to a string representation of the math problem and captchaCorrectAnswer
      to the sum of the two numbers.
    */
    generateMathCaptcha() {
      const num1 = Math.floor(Math.random() * 15);
      const num2 = Math.floor(Math.random() * 15);
      this.captchaCorrectAnswer = num1 + num2;
      this.captchaQuestion = `¿Cuánto es ${num1} + ${num2}?`;
    },

    /*
      Submits the login form by dispatching the "auth/logIn" action to the Vuex store with the
      username and password entered by the user. If the CAPTCHA answer is incorrect, generates
      a new CAPTCHA and displays an error message. If there is an error during authentication,
      displays an error message and generates a new CAPTCHA.
    */
    async submitForm() {
      if (this.captchaAnswer != this.captchaCorrectAnswer) {
        this.errorText = "Respuesta del CAPTCHA incorrecta.";
        this.generateMathCaptcha();
        return;
      }

      try {
        await this.$store.dispatch("auth/logIn", {
          Usuario: this.UserName,
          Password: this.Password,
        });
        this.$router.push("/").then(() => {
          //window.location.reload();
        });
      } catch (error) {
        this.errorText = error.response
          ? error.response.data.body
          : "Error desconocido";
        this.generateMathCaptcha();
      }
    },
  },
  /*
    Generates a math CAPTCHA when the component is created.
  */
  created() {
    this.generateMathCaptcha();
  },
};
</script>

<style>
#captchaArea {
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#captchaArea input {
  width: 50%;
}

@-o-viewport {
  width: device-width;
}

@-ms-viewport {
  width: device-width;
}

@viewport {
  width: device-width;
}

* {
  margin: 0px;
  padding: 0px;
}

html,
body {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  color: #000000;
  font-weight: normal;
  font-family: "Segoe UI", "Segoe", "SegoeUI-Regular-final", Tahoma, Helvetica,
    Arial, sans-serif;
  min-width: 500px;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

body {
  font-size: 0.9em;
}

#noScript {
  margin: 16px;
  color: Black;
}

:lang(en-GB) {
  quotes: "\2018""\2019""\201C""\201D";
}

:lang(zh) {
  font-family: å¾®è½¯é›…é»‘;
}

#fullPage,
#brandingWrapper {
  width: 100%;
  height: 100%;
  background-color: inherit;
}

#brandingWrapper {
  background-color: #4488dd;
}

#branding {
  height: 100%;
  margin-right: 500px;
  margin-left: 0px;
  background-color: inherit;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

#contentWrapper {
  position: relative;
  width: 500px;
  height: 100%;
  overflow: auto;
  background-color: #ffffff;
  margin-left: -500px;
  margin-right: 0px;
}

#content {
  min-height: 100%;
  height: auto !important;
  margin: 0 auto -55px auto;
  padding: 0px 150px 0px 50px;
}

#header {
  font-size: 2em;
  font-weight: lighter;
  font-family: "Segoe UI Light", "Segoe", "SegoeUI-Light-final", Tahoma,
    Helvetica, Arial, sans-serif;
  padding-top: 90px;
  margin-bottom: 60px;
  min-height: 100px;
  overflow: hidden;
}

#header img {
  width: auto;
  height: auto;
}

#workArea,
#header {
  word-wrap: break-word;
  width: 350px;
}

#workArea {
  margin-bottom: 90px;
}

#footerPlaceholder {
  height: 40px;
}

#footer {
  height: 40px;
  padding: 10px 50px 0px 50px;
  position: relative;
  color: #666666;
  font-size: 0.78em;
}

#footerLinks {
  float: none;
  padding-top: 10px;
}

#copyright {
  color: #696969;
}

.pageLink {
  color: #000000;
  padding-left: 16px;
}

.clear {
  clear: both;
}

.float {
  float: left;
}

.floatReverse {
  float: right;
}

.indent {
  margin-left: 16px;
}

.indentNonCollapsible {
  padding-left: 16px;
}

.hidden {
  display: none;
}

.notHidden {
  display: inherit;
}

.error {
  color: #c85305;
}

.actionLink {
  margin-bottom: 8px;
  display: block;
}

a {
  color: #2672ec;
  text-decoration: none;
  background-color: transparent;
}

ul {
  list-style-type: disc;
}

h1,
h2,
h3,
h4,
h5,
label {
  margin-bottom: 8px;
}

.submitMargin {
  margin-top: 38px;
  margin-bottom: 30px;
}

.topFieldMargin {
  margin-top: 8px;
}

.fieldMargin {
  margin-bottom: 8px;
}

.groupMargin {
  margin-bottom: 30px;
}

.sectionMargin {
  margin-bottom: 64px;
}

.block {
  display: block;
}

.autoWidth {
  width: auto;
}

.fullWidth {
  width: 342px;
}

.fullWidthIndent {
  width: 326px;
}

input {
  max-width: 100%;
  font-family: inherit;
  margin-bottom: 8px;
}

input[type="radio"],
input[type="checkbox"] {
  vertical-align: middle;
  margin-bottom: 0px;
}

span.submit,
input[type="submit"] {
  border: none;
  background-color: rgb(38, 114, 236);
  min-width: 80px;
  width: auto;
  height: 30px;
  padding: 4px 20px 6px 20px;
  border-style: solid;
  border-width: 1px;
  transition: background 0s;
  color: rgb(255, 255, 255);
  cursor: pointer;
  margin-bottom: 8px;

  -ms-user-select: none;
  -moz-transition: background 0s;
  -webkit-transition: background 0s;
  -o-transition: background 0s;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

input[type="submit"]:hover,
span.submit:hover {
  background: rgb(212, 227, 251);
}

input.text {
  height: 28px;
  padding: 0px 3px 0px 3px;
  border: solid 1px #bababa;
}

input.text:focus {
  border: 1px solid #6b6b6b;
}

select {
  height: 28px;
  min-width: 60px;
  max-width: 100%;
  margin-bottom: 8px;

  white-space: nowrap;
  overflow: hidden;
  box-shadow: none;
  padding: 2px;
  font-family: inherit;
}

h1,
.giantText {
  font-size: 2em;
  font-weight: lighter;
}

h2,
.bigText {
  font-size: 1.33em;
  font-weight: lighter;
}

h3,
.normalText {
  font-size: 1em;
  font-weight: normal;
}

h4,
.smallText {
  font-size: 0.9em;
  font-weight: normal;
}

h5,
.tinyText {
  font-size: 0.8em;
  font-weight: normal;
}

.hint {
  color: #999999;
}

.emphasis {
  font-weight: 700;
  color: #2f2f2f;
}

.smallIcon {
  height: 20px;
  padding-right: 12px;
  vertical-align: middle;
}

.largeIcon {
  height: 48px;
  vertical-align: middle;
}

.largeTextNoWrap {
  height: 48px;
  display: table-cell;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 1.2em;
}

.idp {
  height: 48px;
  clear: both;
  padding: 8px;
  overflow: hidden;
}

.idp:hover {
  background-color: #cccccc;
}

.idpDescription {
  width: 80%;
}

@media only screen and (max-height: 820px) {
  #header {
    padding-top: 40px;
    min-height: 0px;
    overflow: hidden;
  }

  #workArea {
    margin-bottom: 60px;
  }
}

@media only screen and (max-height: 500px) {
  #header {
    padding-top: 30px;
    margin-bottom: 30px;
  }

  #workArea {
    margin-bottom: 40px;
  }
}

@media only screen and (max-width: 600px) {
  html,
  body {
    min-width: 260px;
  }

  #brandingWrapper {
    display: none;
  }

  #contentWrapper {
    float: none;
    width: 100%;
    margin: 0px auto;
  }

  #content,
  #footer,
  #header {
    width: 400px;
    padding-left: 0px;
    padding-right: 0px;
    margin-left: auto;
    margin-right: auto;
  }

  #workArea {
    width: 100%;
  }

  .fullWidth {
    width: 392px;
  }

  .fullWidthIndent {
    width: 376px;
  }
}

@media only screen and (max-width: 450px) {
  body {
    font-size: 0.8em;
  }

  #content,
  #footer {
    width: auto;
    margin-right: 33px;
    margin-left: 25px;
  }

  #header {
    width: auto;
  }

  span.submit,
  input[type="submit"] {
    font-size: 0.9em;
  }

  .fullWidth {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .fullWidthIndent {
    width: 85%;
  }

  .idpDescription {
    width: 70%;
  }
}

@media only screen and (max-width: 280px) {
  #contentWrapper {
    width: 260px;
  }

  .idpDescription {
    max-width: 160px;
    min-width: 100px;
  }
}

.illustrationClass {
  background-image: url(../assets/login/illustration.png);
}
</style>
