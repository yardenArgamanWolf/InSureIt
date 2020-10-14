<template>
<div id="app">
    <div class="background-image">
        <nav class="navbar navbar-expand-lg sticky-top navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto d-flex align-items-center">
                    <li class="nav-item" @click="setShowContact()">
                        <div v-scroll-to="'#contact'" class="items">צור קשר</div>
                    </li>
                    <li class="nav-item" @click="setShowCancel()">
                        <div v-scroll-to="'#cancel'" class="items">ביטול פוליסה</div>
                    </li>
                    <li class="nav-item" @click="setShowHowItWork()">
                        <div v-scroll-to="'#how-it-work'" class="items">הקמת פוליסה</div>
                    </li>
                    <li class="nav-item" @click="setShowChoosePolicy()">
                        <div v-scroll-to="'#choose-policy'" class="items">השוואת ביטוח</div>
                    </li>
                    <li class="nav-item" @click="setShowAbout()">
                        <div v-scroll-to="'#about'" class="items">אודות</div>
                    </li>

                    <li class="nav-item" @click="setShowUnderHeader()">
                        <a class="navbar-brand ml-auto" href="javascript:void(0)" v-scroll-to="'#app'">
                            <img class="img-logo" src="@/assets/logo-ins.png" height="70" width="210" alt />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>

        <!--
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      -->
    </div>
</div>
</template>

<script>
export default {
    methods: {
        setShowUnderHeader() {
            this.$store.commit('set_underHeaderTransition', true);
        },
        setShowAbout() {
            this.$store.commit('set_aboutTransition', true);
        },
        setShowChoosePolicy() {
            this.$store.commit('set_choosePolicyTransition', true);
        },
        setShowHowItWork() {
            this.$store.commit('set_howItWorkTransition', true);
        },
        setShowCancel() {
            this.$store.commit('set_cancelTransition', true);
        },
        setShowContact() {
            this.$store.commit('set_contactTransition', true);
        }
    }
};
</script>

<style lang="scss">
body {
    //background-image: require("@/assets/slide001.jpg") ;
    background: url("assets/slide001.jpg") no-repeat;
    //background-position: center center;
    //background-attachment: fixed;
    //background-size: cover;
    margin: 0
}

nav {
    background-color: white;
    opacity: 90%;

}

.items {
    color: #809c9d;
    cursor: pointer;
    font-size: 1.2em;
    padding: 40px;
}

.items:hover {
    color: #1569ac;
    cursor: pointer;
    //border-bottom: 3px solid #1569ac;
    transition: 0.3s;
    border-spacing: 15px;
    text-decoration: none;
}

.img-logo {
    margin-left: 40px;

}

.margin-top-image {
    margin-top: 550px;
}

a {
    text-decoration: none;
}
</style>
