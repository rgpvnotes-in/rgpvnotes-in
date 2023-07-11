<script setup>
import StaticTitleCard from './blackBackground.vue';

import '@assets/css/blogger-post.css';

/*
 for most subject we only have 5 units, so we are conditionally rendering buttons for 6 th unit & above.
*/
const shouldShow = (unitName = '', notesData = {}) => {
    const unitNumber = parseInt(unitName.split('_')[1], 10);
    if (unitNumber > 5) {
        if (
            notesData.view_server_1 !== 'https://www.rgpvnotes.in/not-available/' &&
            notesData.view_server_2 !== 'https://www.rgpvnotes.in/not-available/' &&
            notesData.download_server_1 !== 'https://www.rgpvnotes.in/not-available/' &&
            notesData.download_server_1 !== 'https://www.rgpvnotes.in/not-available/'
        ) {
            return true;
        }
        return false;
    }
    return true;
};

const updateNotesUrl = (notesUrl = '') => {
    if (notesUrl !== 'https://www.rgpvnotes.in/not-available/') {
        return `https://www.rgpvnotes.in/notes-redirect.html?redirectToUrl=${notesUrl}`
    }
    return notesUrl;

}

const props = defineProps({
    notesDataObject: {
        required: true,
        type: Object,
    },
    affiliateBooksList: {
        required: true,
        type: Array,
    },
    subjectName: {
        required: true,
        type: String,
    },
    previousYearQP: {
        required: true,
        type: Boolean,
    },
});
</script>

<template>
    <div>
        <hr class="cool-line" />

        <StaticTitleCard> Notes </StaticTitleCard>

        <div class="d-flex justify-content-center  mb-3">
            <span class="Tooltip">
                <button class="Tooltip-btn click-btn click-btn--book">
                    Click Here For Books
                </button>
                <span class="Tooltip-box">
                    <ul class="d-flex flex-column justify-content-start" v-if="props.affiliateBooksList.length > 0">
                        <li v-for="bookData in props.affiliateBooksList" :key="bookData">
                            <a target="_blank" rel="external nofollow" :href="bookData">Server 1</a>
                        </li>
                    </ul>
                    <ul v-else>
                        <li>
                            <a target="_blank" rel="external nofollow"
                                :href="'https://www.amazon.in/s?k=' + props.subjectName + '&i=stripbooks&crid=1L2MEIGT2WNIK&sprefix=' + props.subjectName + '%2Cstripbooks%2C286&tag=rgpvnotes06-21'">Server
                                1</a>
                        </li>
                        <li>
                            <a target="_blank" rel="external nofollow"
                                :href="'https://www.flipkart.com/books/pr?q=' + props.subjectName + '&affid=rgpvnotes&sid=bks'">Server
                                2</a>
                        </li>
                    </ul>
                </span></span>
        </div>


        <ul class="d-flex flex-column justify-content-start remove-li-bullets">
            <li v-for="(notesData, unitName) in props.notesDataObject" :key="unitName">
                <div v-if="shouldShow(unitName, notesData)">
                    <span class="text-uppercase-maybe h5 fw-bold me-3">{{
                        unitName.replace('_', ' ').replace('unit', 'Unit')
                    }}</span>
                    <span class="Tooltip me-2">
                        <button class="Tooltip-btn click-btn click-btn--view">
                            View
                        </button>
                        <span class="Tooltip-box">
                            <ul class="d-flex flex-column justify-content-start">
                                <li>
                                    <a target="_blank" rel="external nofollow noreferrer"
                                        :href="updateNotesUrl(notesData.view_server_1)">Server 1</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="external nofollow noreferrer"
                                        :href="updateNotesUrl(notesData.view_server_2)">Server 2</a>
                                </li>
                            </ul>
                        </span></span>
                    <span class="Tooltip">
                        <button class="Tooltip-btn click-btn click-btn--download">
                            Download
                        </button>
                        <span class="Tooltip-box">
                            <ul class="d-flex flex-column justify-content-start">
                                <li>
                                    <a target="_blank" rel="external nofollow noreferrer"
                                        :href="updateNotesUrl(notesData.download_server_1)">Server 1</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="external nofollow noreferrer"
                                        :href="updateNotesUrl(notesData.download_server_2)">Server 2</a>
                                </li>
                            </ul>
                        </span></span>
                </div>
            </li>
        </ul>

        <div class="d-flex justify-content-center mt-3" v-if="previousYearQP">
            <a href="#questionPapers"><button class="Tooltip-btn click-btn click-btn--other">
                    Previous Year Question Paper Here
                </button></a>
        </div>
    </div>
</template>


<style scoped>
/*

This CSS file contains CSS classes for view button, download button, question paper button, books button, & tooltips button

*/

.click-btn {
    display: inline-block;
    margin: 8px 0;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.click-btn:focus,
.click-btn:active:focus,
.click-btn.active:focus,
.click-btn.focus,
.click-btn:active.focus,
.click-btn.active.focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.click-btn:hover,
.click-btn:focus,
.click-btn.focus {
    color: #333;
    text-decoration: none;
}

.click-btn:active,
.click-btn.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.click-btn.disabled,
.click-btn[disabled],
fieldset[disabled] .click-btn {
    cursor: not-allowed;
    filter: alpha(opacity=65);
    opacity: 0.65;
    -webkit-box-shadow: none;
    box-shadow: none;
}

a.click-btn.disabled,
fieldset[disabled] a.click-btn {
    pointer-events: none;
}

.click-btn--view-download {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.click-btn--view-download:focus,
.click-btn--view-download.focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
}

.click-btn--view-download:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.click-btn--view-download:active,
.click-btn--view-download.active,
.open > .dropdown-toggle.click-btn--view-download {
    color: #fff;
    background-color: #286090;
    background-image: none;
    border-color: #204d74;
}

.click-btn--view-download:active:hover,
.click-btn--view-download.active:hover,
.open > .dropdown-toggle.click-btn--view-download:hover,
.click-btn--view-download:active:focus,
.click-btn--view-download.active:focus,
.open > .dropdown-toggle.click-btn--view-download:focus,
.click-btn--view-download:active.focus,
.click-btn--view-download.active.focus,
.open > .dropdown-toggle.click-btn--view-download.focus {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
}

.click-btn--view-download.disabled:hover,
.click-btn--view-download[disabled]:hover,
fieldset[disabled] .click-btn--view-download:hover,
.click-btn--view-download.disabled:focus,
.click-btn--view-download[disabled]:focus,
fieldset[disabled] .click-btn--view-download:focus,
.click-btn--view-download.disabled.focus,
.click-btn--view-download[disabled].focus,
fieldset[disabled] .click-btn--view-download.focus {
    background-color: #337ab7;
    border-color: #2e6da4;
}

.click-btn--view-download .badge {
    color: #337ab7;
    background-color: #fff;
}

.click-btn--view {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.click-btn--view:focus,
.click-btn--view.focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
}

.click-btn--view:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.click-btn--view:active,
.click-btn--view.active,
.open > .dropdown-toggle.click-btn--view {
    color: #fff;
    background-color: #286090;
    background-image: none;
    border-color: #204d74;
}

.click-btn--view:active:hover,
.click-btn--view.active:hover,
.open > .dropdown-toggle.click-btn--view:hover,
.click-btn--view:active:focus,
.click-btn--view.active:focus,
.open > .dropdown-toggle.click-btn--view:focus,
.click-btn--view:active.focus,
.click-btn--view.active.focus,
.open > .dropdown-toggle.click-btn--view.focus {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
}

.click-btn--view.disabled:hover,
.click-btn--view[disabled]:hover,
fieldset[disabled] .click-btn--view:hover,
.click-btn--view.disabled:focus,
.click-btn--view[disabled]:focus,
fieldset[disabled] .click-btn--view:focus,
.click-btn--view.disabled.focus,
.click-btn--view[disabled].focus,
fieldset[disabled] .click-btn--view.focus {
    background-color: #337ab7;
    border-color: #2e6da4;
}

.click-btn--view .badge {
    color: #337ab7;
    background-color: #fff;
}

.click-btn--download {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}

.click-btn--download:focus,
.click-btn--download.focus {
    color: #fff;
    background-color: #c9302c;
    border-color: #761c19;
}

.click-btn--download:hover {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
}

.click-btn--download:active,
.click-btn--download.active,
.open > .dropdown-toggle.click-btn--download {
    color: #fff;
    background-color: #c9302c;
    background-image: none;
    border-color: #ac2925;
}

.click-btn--download:active:hover,
.click-btn--download.active:hover,
.open > .dropdown-toggle.click-btn--download:hover,
.click-btn--download:active:focus,
.click-btn--download.active:focus,
.open > .dropdown-toggle.click-btn--download:focus,
.click-btn--download:active.focus,
.click-btn--download.active.focus,
.open > .dropdown-toggle.click-btn--download.focus {
    color: #fff;
    background-color: #ac2925;
    border-color: #761c19;
}

.click-btn--download.disabled:hover,
.click-btn--download[disabled]:hover,
fieldset[disabled] .click-btn--download:hover,
.click-btn--download.disabled:focus,
.click-btn--download[disabled]:focus,
fieldset[disabled] .click-btn--download:focus,
.click-btn--download.disabled.focus,
.click-btn--download[disabled].focus,
fieldset[disabled] .click-btn--download.focus {
    background-color: #d9534f;
    border-color: #d43f3a;
}

.click-btn--download .badge {
    color: #d9534f;
    background-color: #fff;
}

.click-btn--book {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
    padding: 10px 50px;
}

.click-btn--book:focus,
.click-btn--book.focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625;
}

.click-btn--book:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}

.click-btn--book:active,
.click-btn--book.active,
.open > .dropdown-toggle.click-btn--book {
    color: #fff;
    background-color: #449d44;
    background-image: none;
    border-color: #398439;
}

.click-btn--book:active:hover,
.click-btn--book.active:hover,
.open > .dropdown-toggle.click-btn--book:hover,
.click-btn--book:active:focus,
.click-btn--book.active:focus,
.open > .dropdown-toggle.click-btn--book:focus,
.click-btn--book:active.focus,
.click-btn--book.active.focus,
.open > .dropdown-toggle.click-btn--book.focus {
    color: #fff;
    background-color: #398439;
    border-color: #255625;
}

.click-btn--book.disabled:hover,
.click-btn--book[disabled]:hover,
fieldset[disabled] .click-btn--book:hover,
.click-btn--book.disabled:focus,
.click-btn--book[disabled]:focus,
fieldset[disabled] .click-btn--book:focus,
.click-btn--book.disabled.focus,
.click-btn--book[disabled].focus,
fieldset[disabled] .click-btn--book.focus {
    background-color: #5cb85c;
    border-color: #4cae4c;
}

.click-btn--book .badge {
    color: #5cb85c;
    background-color: #fff;
}

.click-btn--other {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
    padding: 10px 50px;
}

.click-btn--other:focus,
.click-btn--other.focus {
    color: #fff;
    background-color: #ec971f;
    border-color: #985f0d;
}

.click-btn--other:hover {
    color: #fff;
    background-color: #ec971f;
    border-color: #d58512;
}

.click-btn--other:active,
.click-btn--other.active,
.open > .dropdown-toggle.click-btn--other {
    color: #fff;
    background-color: #ec971f;
    background-image: none;
    border-color: #d58512;
}

.click-btn--other:active:hover,
.click-btn--other.active:hover,
.open > .dropdown-toggle.click-btn--other:hover,
.click-btn--other:active:focus,
.click-btn--other.active:focus,
.open > .dropdown-toggle.click-btn--other:focus,
.click-btn--other:active.focus,
.click-btn--other.active.focus,
.open > .dropdown-toggle.click-btn--other.focus {
    color: #fff;
    background-color: #d58512;
    border-color: #985f0d;
}

.click-btn--other.disabled:hover,
.click-btn--other[disabled]:hover,
fieldset[disabled] .click-btn--other:hover,
.click-btn--other.disabled:focus,
.click-btn--other[disabled]:focus,
fieldset[disabled] .click-btn--other:focus,
.click-btn--other.disabled.focus,
.click-btn--other[disabled].focus,
fieldset[disabled] .click-btn--other.focus {
    background-color: #f0ad4e;
    border-color: #eea236;
}

.click-btn--other .badge {
    color: #f0ad4e;
    background-color: #fff;
}

.Tooltip {
    display: inline-block;
    position: relative;
}

.Tooltip a {
    color: #000 !important;
}

.Tooltip-box {
    display: block;
    position: absolute;
    padding: 10px;
    z-index: 1;
    bottom: 100%;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s;
    transform: translateY(-1em);
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    width: 150px;
}

.Tooltip-box:after {
    content: '';
    position: absolute;
    left: 5px;
    bottom: -5px;
    border: 5px solid transparent;
    border-bottom: 0;
    border-top-color: #fff;
}

.Tooltip-btn:focus + .Tooltip-box,
.Tooltip-btn:hover + .Tooltip-box,
.Tooltip-box:hover {
    visibility: visible;
    opacity: 1;
    transform: translateY(0%);
    width: 150px;
}

.Tooltip-box ul {
    list-style-type: square;
}

/* remove bullets from li */

.remove-li-bullets {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>
