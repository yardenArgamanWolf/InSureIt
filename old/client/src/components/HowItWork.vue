<template>
<div style="padding-top:8em !important;">
    <div class="d-flex flex-column">
        <div class="h2-tag-work">איך זה עובד</div>
        <div class="align-self-center">
            <div class="d-flex justify-content-end mt-3">
                <div style="font-size:18px;" class="align-self-center mr-3">בוחרים בביטוח הרלוונטי עבורכם</div>
                <div>
                    <Success />
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <div style="font-size:18px;" class="align-self-center mr-3">עונים על השאלות הקשורות לביטוח שבחרתם ומשווים</div>
                <div>
                    <Success />
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <div style="font-size:18px;" class="align-self-center mr-3">מקימים פוליסה חדשה ואם צריך מבטלים את הישנה</div>
                <div>
                    <Success />
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn2 btn btn-dark">ביטוח מבנה</button>
                <button type="button" class="btn2 btn btn-dark">ביטוח תכולה</button>
                <button type="button" class="btn2 btn btn-dark">ביטוח מבנה ותכולה</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Success from "@/assets/svg/Success";
export default {
    components: {
        Success,
    },
};
</script>

<style>
.h2-tag-work {
    font-size: 50px;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    font-weight: 300;
    text-transform: uppercase;
}

.h2-tag-work:after {
    display: block;
    height: 2px;
    background-color: #1569ac;
    content: " ";
    width: 230px;
    margin: 0 auto;
    margin-top: 15px;
}

.margin-col {}

.btn2 {
    margin-right: 30px;
    margin-top: 50px;
    height: 50px;
    width: auto;
    font-size: 20px;
}
</style>
