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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-plus" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            <path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"/>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                            </svg>
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

.contact .info-box svg {
    width: 3rem;
    height: auto;
    color: #5846f9;
    /* border-radius: 50%; */
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
