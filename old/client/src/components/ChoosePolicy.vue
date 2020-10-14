<template>
<div style="padding-top:8em !important;">
    <div class="d-flex flex-column">
        <div class="h2-tag-policy align-self-center">איך לבחור פוליסה</div>
        <div class="d-flex justify-content-center">
            <div class="padding-icons">
                <div class="d-flex flex-column align-items-center">
                    <div>
                        <moneyIcon />
                    </div>
                    <div class="mt-3">
                        <h3 style="font-size:25px;color:#1569ac">מחיר הפוליסה</h3>
                    </div>
                </div>
            </div>
            <div class="padding-icons">
                <div class="d-flex flex-column align-items-center">
                    <div>
                        <Coverege />
                    </div>
                    <div class="mt-3">
                        <h3 style="font-size:25px;color:#1569ac">כיסויים והרחבות</h3>
                    </div>
                </div>
            </div>
            <div class="padding-icons">
                <div class="d-flex flex-column align-items-center">
                    <div>
                        <PolicyHolder />
                    </div>
                    <div class="mt-3">
                        <h3 style="font-size:25px;color:#1569ac">השתתפות עצמית</h3>
                    </div>
                </div>
            </div>
            <div class="padding-icons">
                <div class="d-flex flex-column align-items-center">
                    <div>
                        <CustomerService />
                    </div>
                    <div class="mt-3">
                        <h3 style="font-size:25px;color:#1569ac">מדד השירות</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moneyIcon from "@/assets/svg/money";
import PolicyHolder from "@/assets/svg/PolicyHolder";
import Coverege from "@/assets/svg/Coverege";
import CustomerService from "@/assets/svg/CustomerService";

export default {
    components: {
        moneyIcon,
        PolicyHolder,
        Coverege,
        CustomerService
    },
};
</script>

<style>
.h2-tag-policy {
    font-size: 50px;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    font-weight: 300;
    text-transform: uppercase;
}

.h2-tag-policy:after {
    display: block;
    height: 2px;
    background-color: #1569ac;
    content: " ";
    width: 350px;
    margin: 0 auto;
    margin-top: 15px;
}

.padding-icons {
    padding: 70px;
}
</style>
