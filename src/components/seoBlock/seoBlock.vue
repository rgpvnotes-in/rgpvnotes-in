<script setup>

const placeHolder = {
    pageTitle: '',
    canonicalUrl: '',
    description: '',
    imageUrl: 'https://cdn.rgpvnotes.in/www/media/header-bg.jpg',
    keywords: '',
}

const props = defineProps({
    seoDetails: {
        required: true,
        type: Object,
    },
});
</script>

<template>

    <!-- basic -->
    <meta name="robots" content="index, follow" />
    <link rel="manifest" href="/manifest.json" />
    <title> {{ props.seoDetails.pageTitle + ' - www.rgpvnotes.in' ?? placeHolder.pageTitle }} </title>
    <link :href="props.seoDetails.canonicalUrl ?? placeHolder.canonicalUrl" rel="canonical" />
    <meta :content="props.seoDetails.keywords ?? placeHolder.keywords " name="keywords" />


    <!-- basic meta tags -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta :content="props.seoDetails.description ?? placeHolder.description" name="description" />


    <!-- twitter -->
    <meta content="@rgpvnotes_in" name="twitter:site" />
    <meta content="@rgpvnotes_in" name="twitter:creator" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta :content="props.seoDetails.pageTitle + ' - www.rgpvnotes.in' ?? placeHolder.pageTitle" name="twitter:title" />
    <meta :content="props.seoDetails.imageUrl ?? placeHolder.imageUrl" property="twitter:image" />
    <meta :content="props.seoDetails.description ?? placeHolder.description " name="twitter:description" />

    <!-- open graph -->
    <meta content="en_IN" property="og:locale" />
    <meta content="website" property="og:type" />
    <meta content="RGPV Notes" property="og:site_name" />
    <meta content="https://www.aadityajain.dev/" property="article:author" />
    <meta :content="props.seoDetails.pageTitle + ' - www.rgpvnotes.in' ?? placeHolder.pageTitle " property="og:title" />
    <meta :content="props.seoDetails.canonicalUrl ?? placeHolder.canonicalUrl" property="og:url" />
    <meta :content="props.seoDetails.imageUrl ?? placeHolder.imageUrl" property="og:image" />
    <meta :content="props.seoDetails.description ?? placeHolder.description " property="og:description" />

    <!-- Author -->
    <meta content="Aditya Jain" name="Author" />
    <link href="https://www.aadityajain.dev/" rel="me" />
    <link href="https://www.aadityajain.dev/" rel="author" />
    <link href="https://www.aadityajain.dev/" rel="publisher" />


    <!-- Other tags-->
    <link rel="prefetch" />
    <meta content="all" name="audience" />
    <meta content="general" name="rating" />
    <meta content="site" name="generator" />
    <meta content="translate" name="google" />
    <meta name="theme-color" content="#4DBA87" />
    <meta content="India" name="geo.placename" />
    <meta content="1 days" name="revisit-after" />
    <meta content="100012765211323" property="fb:admins" />
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="msapplication-TileColor" content="#000000" />
    <link content="https://www.rgpvnotes.in/" rel="pingback" />
    <link href="https:/www.rgpvnotes.in/" rel="openid.delegate" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="apple-mobile-web-app-title" content="www.rgpvnotes.in" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <link rel="apple-touch-icon" href="/img/icons/apple-touch-icon-152x152.png" />
    <link rel="mask-icon" href="/img/icons/safari-pinned-tab.svg" color="#4DBA87" />
    <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
    <link href="https://cdn.rgpvnotes.in/www/media/favicon.ico" rel="apple-touch-icon" />
    <meta name="msapplication-TileImage" content="/img/icons/msapplication-icon-144x144.png" />
    <link href="https://cdn.rgpvnotes.in/www/media/favicon.ico" rel="icon" type="image/x-icon" />
    <meta content="Aeiwi, Alexa, AllTheWeb, AltaVista, AOL Netfind, Anzwers, Canada, DirectHit, EuroSeek, Excite, Overture, Go, Google, HotBot. InfoMak, Kanoodle, Lycos, MasterSite, National Directory, Northern Light, SearchIt, SimpleSearch, WebsMostLinked, WebTop, What-U-Seek, AOL, Yahoo, WebCrawler, Infoseek, Excite, Magellan, LookSmart, CNET, Googlebot" name="search engines" />

</template>
