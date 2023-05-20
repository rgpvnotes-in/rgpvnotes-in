<script setup>

import rgpvRoundLogo from '../../assets/img/rgpv-round-logo-about.png'
import ContactComponent from '../homePage/contactComponent/contactComponent.vue';

import '@assets/vendor/boxicons/css/boxicons.min.css';

const props = defineProps({
    isInnerPage: Boolean,
});
</script>

<template>
  <ContactComponent v-if="props.isInnerPage"/>
  <div>
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-3 footer-contact text-center">
              <img
                :src="rgpvRoundLogo"
                class="img-fluid footer-rgpv-logo"
                alt=""
              />
              <h3 class="mt-3 mb-2">RGPV Notes</h3>
              <strong>Phone:</strong> +91 8989595022<br />
              <strong>Email:</strong> hey@rgpvnotes.in<br />
            </div>


            <div class="col-12 col-sm-6 col-md-6 col-lg-2 footer-links">
              <h4>Study Material</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/diploma">Diploma</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/me">Master of Engineering (M.E)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/phd">Doctor of Philosophy (Ph.D)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/be">Bachelor of Engineering (BE)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mpharma">Master of Pharmacy (M.Pharm)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mtech">Master of Technology (M.Tech)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/pharma-d">Diploma in Pharmacy (Pharm D)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/bpharma">Bachelor of Pharmacy (B.Pharm)</a>
                </li>
              </ul>
            </div>

            <div class="col-12 col-sm-6 col-md-6 col-lg-3 footer-links">
              <h4>Study Material</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/march">Master of Architecture (M.Arch)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/btech">Bachelor of Technology (B.Tech)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/barch">Bachelor Of Architecture (B.Arch)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mca">Master of Computer Applications (MCA)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mba">Master in Business Administration (MBA)</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/ddi-pg"
                    >Dual Degree Integrated Post Graduate (DDI-PG)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/phd-entrance"
                    >Doctor of Philosophy Entrance (Ph.D Entrance)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mca-2-year"
                    >Master of Computer Applications - 2 Year (MCA 2 Year)</a
                  >
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-6 col-lg-3 footer-links">
              <h4>Study Material</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mtech-part-time"
                    >Master of Technology (Part Time) - (M.Tech Part Time)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mpharm-pci"
                    >Master of Pharmacy - Pharmacy Council of India (M.Pharm
                    PCI)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/be-ptdc"
                    >Bachelor of Engineering - Part Time Diploma Courses
                    (BE-PTDC)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mba-integrated"
                    >Master in Business Administration Integrated (MBA
                    Integrated)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mca-dual-degree"
                    >Master of Computer Applications Dual Degree (MCA Dual
                    Degree)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/btech-ptdc"
                    >Bachelor of Technology - Part Time Diploma Courses
                    (B.Tech-PTDC)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/bpharma-pci"
                    >Bachelor of Pharmacy - Pharmacy Council of India (B.Pharm
                    PCI)</a
                  >
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/pgcpmb"
                    >Post Graduate Certificate Programme in Medical
                    Biotechnology (PGCPMB)</a
                  >
                </li>
              </ul>
            </div>

            <!-- <div class="col-12 col-md-6 col-lg-2 footer-links d-lg-none">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="/#hero">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/#contact">Contact</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/helper">Helpers</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/#services">Why Us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/#about">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/whatsapp">Whatsapp</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/mobile-application">Mobile App</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/our-journey">Our Journey</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/hall-of-fame">Hall of Fame</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="/support-us">Support Us</a>
                </li>
              </ul>
            </div> -->


          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright-wrap d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="credits">
              Made With ❤ By
              <a
                title="Aditya Jain Developer Indore Official Website"
                href="https://www.aadityajain.dev/"
                ref="dofollow"
                target="_blank"
                >Aditya Jain</a
              >.
            </div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a
              href="https://twitter.com/rgpvnotes_in"
              target="_blank"
              class="twitter"
              ><i class="bx bxl-twitter"></i
            ></a>
            <a
              href="https://www.facebook.com/rgpvnotes.in"
              target="_blank"
              class="facebook"
              ><i class="bx bxl-facebook"></i
            ></a>
            <a
              href="https://www.instagram.com/rgpvnotes.in/"
              target="_blank"
              class="instagram"
              ><i class="bx bxl-instagram"></i
            ></a>
            <a
              href="https://api.whatsapp.com/send?phone=918989595022&amp;text=Hey%20RGPV%20Notes%20Team%20I%20have%20some%20inquiry"
              target="_blank"
              class="whatsapp"
              ><i class="bx bxl-whatsapp"></i
            ></a>
            <a
              href="mailto:hey@rgpvnotes.in?Subject=Hello%20RGPV%20Notes"
              target="_blank"
              class="e-mail"
              ><i class="bx bx-mail-send"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/aadityajain-dev/"
              target="_blank"
              class="linkedin"
              ><i class="bx bxl-github"></i
            ></a>
            <a
              href="https://in.linkedin.com/company/rgpvnotes-in"
              target="_blank"
              class="linkedin"
              ><i class="bx bxl-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
        <div class="pb-4 d-flex justify-content-center container">
                  <p class="mx-4 text-center">
                      <span class="fw-bold">Disclaimer</span> : This is not an
                      RGPV official site. We do not take any liability for the
                      correctness of material we provide or host. For any <span class="fw-bold">legal</span> or
                      <span class="fw-bold">business</span> queries please contact
                      us on <span class="fw-bold">contact@rgpvnotes.in</span> with your official email.Any
                      messages sent by contact form regarding business or legal
                      inquiry will not be taken seriously.
                  </p>
              </div>
    </footer>
    <!-- End Footer -->

    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
    <div id="preloader"></div>
  </div>
</template>

<style scoped>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  color: #fff;
  font-size: 14px;
  background: linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%), url("/assets/img/hero-bg.jpg") center center no-repeat;
  background-size: cover;
}

#footer .footer-top {
  padding: 60px 0 30px 0;
  position: relative;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact h3 {
  font-size: 28px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;
}

#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Poppins", sans-serif;
}

#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #fff;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: rgba(255, 255, 255, 0.8);
  transition: 0.3s;
  display: inline-block;
  line-height: 1.3;
}

#footer .footer-top .footer-links ul a:hover {
  text-decoration: underline;
  color: #fff;
}

#footer .footer-newsletter {
  font-size: 15px;
}

#footer .footer-newsletter h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 5px;
  text-align: left;
  border: 1px solid white;
}

#footer .footer-newsletter form input[type=email] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}

#footer .footer-newsletter form input[type=submit] {
  position: absolute;
  top: -1px;
  right: -2px;
  bottom: -1px;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: rgba(123, 39, 216, 0.8);
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#footer .footer-newsletter form input[type=submit]:hover {
  background: #5846f9;
}

#footer .copyright-wrap {
  border-top: 1px solid #8577fb;
}

#footer .credits {
  padding-top: 5px;
  font-size: 13px;
  color: #fff;
}

#footer .credits a {
  color: #fff;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
}

.footer-rgpv-logo {
  max-width: 200px;
}
</style>

<style scoped>
/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #5846f9;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #7b27d8;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
</style>