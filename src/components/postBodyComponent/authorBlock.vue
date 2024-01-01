<script setup></script>

<template>
    <div class="author-block-bg py-3 px-4 my-2">
        <div class="row">
            <div class="col-12 col-md-3">
                <img
                    src="https://1.bp.blogspot.com/-GspVWYBYfyE/Wfi8WFXMbQI/AAAAAAAABBI/i5VB100O5E0zaX2vTQ_VT_gtVngAk4CrQCLcBGAs/s1600/rgpv%2Bnotes%2Blogo.png"
                    alt="author image"
                    srcset=""
                    class="author-image"
                />
            </div>
            <div
                class="col-12 col-md-9 d-flex flex-column justify-content-center text-white"
            >
                <h4>RGPV Notes</h4>
                <p>Follow Author here:</p>
                <p></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.author-block-bg {
    background: linear-gradient(
            90deg,
            rgba(88, 70, 249, 0.5) 0%,
            rgba(123, 39, 216, 0.5) 100%
        ),
        url(/assets/img/counts-bg.png) center center no-repeat;
}
.author-image {
    height: auto;
    width: 100%;
    max-width: 150px;
    background-color: #fff;
    border-radius: 50%;
    padding: 0.5rem;
}
</style>
