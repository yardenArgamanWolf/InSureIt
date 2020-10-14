<template>
<div style="padding-top:8em!important;">
    <div class="d-flex flex-column align-items-center">
        <div class="h2-tag-cancel"> ביטול פוליסה קיימת </div>
        <div class="d-flex justify-content-center">
            <div class="margin-btn">
                <button type="button" class="btn2 btn btn-dark"> הדפסת טופס ביטול</button>
            </div>
            <div class="margin-btn">
                <button type="button" class="btn2 btn btn-dark"> העלאת טופס ביטול</button>
            </div>
            <div class="margin-btn">
                <button type="button" class="btn2 btn btn-dark"> מילוי טופס ביטול און ליין</button>
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
.h2-tag-cancel {
    font-size: 50px;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    font-weight: 300;
    text-transform: uppercase;
}

.h2-tag-cancel:after {
    display: block;
    height: 2px;
    background-color: #1569ac;
    content: " ";
    width: 400px;
    margin: 0 auto;
    margin-top: 15px;
}

.btn2 {
    margin-right: 30px;
    margin-top: 50px;
    height: 50px;
    width: auto;
    font-size: 20px;
}

.margin-btn {
    margin-left: 80px;
}
</style>
