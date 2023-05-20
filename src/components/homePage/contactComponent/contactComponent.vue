<script setup>
import { ref } from 'vue';

const contactName = ref('');
const contactEmail = ref('');
const contactSubject = ref('');
const contactMessage = ref('');

const submitContactForm = () => {

    const custom_form_name = contactName.value;
    const custom_form_email = contactEmail.value;
    const custom_form_message = `Subject: ${contactSubject.value} %0d%0a%0d%0a%0d%0a%0d%0a%0d%0a Message: ${contactMessage.value}`;
    const currentUrl = window.location.href;
    const email_msg = `${custom_form_message} %0d%0a%0d%0a%0d%0a%0d%0a%0d%0a Name: ${custom_form_name} %0d%0a%0d%0a Email: ${custom_form_email} %0d%0a%0d%0a URL:  ${currentUrl.value}`;
    var link = `mailto:hey@rgpvnotes.in?subject=Hello Team RGPV Notes&body=${email_msg}`;

    window.location.href = link;

    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
};

</script>

<template>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact section-bg">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Contact Us</h2>
                <!-- <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p> -->
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <form
                        @submit.prevent="submitContactForm"
                        role="form"
                        class="php-email-form"
                    >
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    v-model="contactName"
                                    required
                                />
                            </div>
                            <div class="col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    v-model="contactEmail"
                                    required
                                />
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <input
                                type="text"
                                class="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                v-model="contactSubject"
                                required
                            />
                        </div>
                        <div class="form-group mt-3">
                            <textarea
                                class="form-control"
                                name="message"
                                rows="4"
                                placeholder="Message"
                                v-model="contactMessage"
                                required
                            ></textarea>
                        </div>
                        <div class="text-center my-3">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>

                <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
                    <div class="info-box mb-4">
                        <a
                            href="mailto:hey@rgpvnotes.in?Subject=Hello%20RGPV%20Notes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p class="text-dark">hey@rgpvnotes.in</p>
                        </a>
                    </div>
                    <div class="info-box mb-4">
                        <a
                            href="https://api.whatsapp.com/send?phone=918989595022&text=Hey%20RGPV%20Notes%20Team%20I%20have%20some%20inquiry"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bi bi-whatsapp"></i>
                            <h3>Whatsapp</h3>
                            <p class="text-dark">+91 8989595022</p></a
                        >
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-2 mt-sm-0 mt-md-4 mt-lg-0">
                    <div class="info-box mb-4">
                        <a
                            href="tel:+918989595022"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bx bx-phone-call"></i>
                            <h3>Call Us</h3>
                            <p class="text-dark">+91 8989595022</p>
                        </a>
                    </div>
                    <div class="info-box mb-4">
                        <a
                            href="tg://resolve?domain=rgpvnotes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bi bi-telegram"></i>
                            <h3>Telegram</h3>
                            <p class="text-dark">+91 8989595022</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Contact Section -->
</template>

<style scoped>
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info-box {
    color: #444444;
    text-align: center;
    box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
    padding: 20px 0 30px 0;
    background: #fff;
}

.contact .info-box i {
    font-size: 32px;
    color: #5846f9;
    border-radius: 50%;
    padding: 8px;
}

.contact .info-box h3 {
    font-size: 20px;
    color: #2c4964;
    font-weight: 700;
    margin: 10px 0;
}

.contact .info-box p {
    padding: 0;
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
}

.contact .php-email-form {
    box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
    padding: 30px;
    background: #fff;
}

.contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
}

.contact .php-email-form .error-message br + br {
    margin-top: 25px;
}

.contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

.contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
}

.contact .php-email-form .loading:before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
    border-radius: 5px;
    box-shadow: none;
    font-size: 14px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
    border-color: #5846f9;
}

.contact .php-email-form input {
    padding: 10px 15px;
}

.contact .php-email-form textarea {
    padding: 12px 15px;
}

.contact .php-email-form button[type='submit'] {
    background: #5846f9;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 5px;
}

.contact .php-email-form button[type='submit']:hover {
    background: #7b27d8;
}

@keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
