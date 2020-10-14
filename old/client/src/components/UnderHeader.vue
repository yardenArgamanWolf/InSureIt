<template>
<div>
    <div class="d-flex flex-column">
        <div class="text marg align-self-end">ללכת על בטוח</div>
        <div class="text2 align-self-end">לחסוך בביטוח</div>
        <div class="align-self-end">

            <button type="button" class="btn2 btn btn-dark">?לא בטוחים מה אתם רוצים</button>
            <button type="button" class="btn btn-dark" style="margin-right: 290px;"> להשוות ולחסוך</button>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@media screen and (min-width: 1750px) {
    .text {
        font-size: 80px;
        font-weight: bolder;
    }

    .text2 {
        font-size: 70px;
        margin-right: 290px
    }

    .marg {
        margin-right: 100px;
        margin-top: 70px
    }
}

@media screen and (max-width: 1749px) {
    .text {
        font-size: 60px;

    }

    .text2 {
        font-size: 50px;
        margin-right: 270px
    }

    .marg {
        margin-right: 80px;
        margin-top: 70px
    }
}

.btn {
    margin-right: 30px;
    margin-top: 50px;
    height: 50px;
    width: auto;
    font-size: 20px;
    opacity: 80%;

}

.btn:hover {
    margin-right: 30px;
    margin-top: 50px;
    height: 50px;
    width: auto;
    font-size: 20px;
    opacity: 100%;

}
</style>
