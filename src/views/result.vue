<template>
    <div id="result">
        <h2 id="heading">
            Your Percantage of having heart attck is  {{result}}
        </h2>
    </div>
</template>

<script>
    import store from "../store";
    export default {
        name: 'Result',
        computed: {
            result: function (){
                return Math.round(store.state.result * 10000) / 100

            }
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#result{
    background-color: #EDE1E5 ;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
}
#heading{
    margin: 45px;
}

</style>

