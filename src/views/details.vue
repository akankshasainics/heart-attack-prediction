<template>
    <div id="details">
        <h2 id="text">Please fill following details</h2>
        <table style="width:100vw">
            <tr>
                <td>  <button id="age1" class="button1"@click = "enterAge"> Age </button> </td>

                <td> <button class="button1"@click = "enterGender"> Gender </button> </td>
                <td> <button id="id2" class="button1"@click = "enterChestPain"> Chest Pain type </button> </td>
            </tr>
            <tr>
                <td> <button id="id3" class="button1"@click = "enterRBP"> Resting Blood Pressure </button> </td>
                <td> <button id="id4" class="button1"@click = "enterSeriumCholestrol"> Serium Cholestrol </button> </td>
                <td> <button class="button1"@click = "enterFastingBloodSuger"> Fastring Blood Sugar </button> </td>
            </tr>
            <tr>
                <td> <button class="button1"@click = "enterRER"> Resting ElectroCardiographics Result </button> </td>
                <td> <button id="id7" class="button1"@click = "enterHeartRate"> Maxinum Heart Rate Achived </button> </td>
                <td> <button class="button1"@click = "enterExercise"> Exercise Induced Angina </button> </td>
            </tr>
            <tr>
                <td> <button class="button1"@click = "enterSTdepression"> ST depression induced by relative to rest </button> </td>
                <td> <button class="button1"@click = "enterSTslope"> Slope of peak exercise ST segment </button> </td>
                <td> <button class="button1"@click = "enterVessel"> Number of major vessels colored by flourosopy </button> </td>
            </tr>
            <tr >
                <td class="button3" style="visibility: hidden;"></td>
                <td style="margin: auto; width: fit-content"> <button class="button1"@click = "enterThal"> Thal </button> </td>

            </tr>

        </table>
        <button class="button2" @click = "finalPage"> Get Result</button>

    </div>

</template>
<script>
    import store from "../store";
    import router from "../router/index.js"
    import {Tensor, InferenceSession} from "onnxjs";
    export default {
        name: 'Details',
         computed: {
            age: function (){
                return store.state.arr[0]
            },
            heartRate: function(){
                return store.state.arr[7]
            },
            Cholestrol: function(){
                return store.state.arr[4]
            },
            chestPainType: function(){
                return store.state.arr[2]
            },
            BloodPressure: function(){
                return store.state.arr[3]
            }
        },
        methods: {
            enterAge () {
                this.$router.push('/age')
            },
            enterGender () {
                this.$router.push('/gender')
            },
            enterChestPain () {
                this.$router.push('/chestPain')
            },
            enterRBP () {
                this.$router.push('/resting-blood-pressure')
            },
            enterSeriumCholestrol () {
                this.$router.push('/serum-cholestrol')
            },
            enterFastingBloodSuger () {
                this.$router.push('/fasting-blood-suger')
            },
            enterRER () {
                this.$router.push('/resting-electroCardiographics-result')
            },
            enterHeartRate () {
                this.$router.push('/maximum-heart-rate')
            },
            enterExercise () {
                this.$router.push('/exercise-induced-angina')
            },
            enterSTdepression () {
                this.$router.push('/ST-depression')
            },
            enterSTslope () {
                this.$router.push('/slope-ST segment')
            },
            enterVessel () {
                this.$router.push('/no-of-vessels')
            },
            enterThal () {
                this.$router.push('/thal')
            },
            changeColor (index, id) {
                if(store.state.arr[index] ==-1){
                        const e = document.getElementById(id);
                        if(null != e){
                            e.style.background = "#B2434D";
                        }
                    }

            },
            async calculate() {
                const session = new InferenceSession();
                await session.loadModel("/heart_attack.onnx")
                let inpar = new Float32Array(store.state.arr);

                const mean =  [4.7827e+01, 7.2449e-01, 2.9830e+00, 1.3258e+02, 2.5085e+02, 6.9930e-02,
         2.1843e-01, 1.3913e+02, 3.0375e-01, 5.8605e-01, 1.8942e+00, 1.0000e-10,
         5.6429e+00];
                const std = [7.8118e+00, 4.4753e-01, 9.6512e-01, 1.7596e+01, 6.4948e+01, 2.5196e-01,
         4.6008e-01, 2.3549e+01, 4.5988e-01, 9.0865e-01, 2.0099e-01, 1.0000e-10,
         4.9028e-01];

                for (var i = 0; i < 13; i++) {
                    if (inpar[i] != -1){
                        inpar[i] = (inpar[i] - mean[i])/std[i];
                    }
                    else{
                        inpar[i] = mean[i];
                    }
                    console.log(inpar[i]);
                }
                const inputs = [new Tensor(new Float32Array(inpar),"float32",[1,13]),];
                let inp = new Map();
                inp.set('input', inputs[0])
                const outputMap = await session.run(inp);
                console.log(outputMap);
                const outputTensor = outputMap.values().next();
                store.commit('setResult', outputTensor['value']['data'][0]);
                console.log(outputTensor['value']['data'][0]);
            },
            finalPage () {
                if(store.state.arr[0] ==-1 || store.state.arr[2] ==-1 || store.state.arr[3]==-1|| store.state.arr[4]==-1 || store.state.arr[7]==-1){
                    this.changeColor(0, "age1");
                    this.changeColor(2, "id2");
                    this.changeColor(3, "id3");
                    this.changeColor(4, "id4");
                    this.changeColor(7, "id7");
                    alert("Please fill the details in red boxes");
                    store.commit('isTried', true);
                }
                else{
                     this.calculate();
                     this.$router.push('/result')
                     console.log("final page")
                }
            },
        },
        mounted: function() {
                    console.log("heligfosegfos");
                    if(this.$store.state.tried == true){
                        this.changeColor(0, "age1");
                        this.changeColor(2, "id2");
                        this.changeColor(3, "id3");
                        this.changeColor(4, "id4");
                        this.changeColor(7, "id7");
                    }
            }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#details{
    background-color: #C3DEF1;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    overflow: auto;
}
.button1{
    @extend .md-btn, .md-btn-raised;
    background: #6983aa;
    font-size: 16px;
    letter-spacing: 0.05em;
    margin: 4px;
    font-family: 'Poppins', sans-serif;
    // color: grey;
    &:focus {
    background: darken(#5D645F  , 12%)
   }
   width: 90%;
   // box-shadow: 0px 0px 3px  #B9CFD8;
}
.button2{
    @extend .md-btn, .md-btn-raised;
    background: #355455 ;
    margin-right: 4.3%;
    margin-top: 5%;
    &:focus {
    background: darken(#355455  , 12%)
   }
}
#text{
    color: white;
}
.button3{
    @extend .md-btn, .md-btn-raised;
    background: #5D645F;
    width: fit-content;
    margin: auto;
    &:focus {
    background: darken(#5D645F, 12%)
   }
}
.alert {
  min-width: 150px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 3px;
  @extend .shadow-1;
  &:hover{
    @extend .shadow-2;
  }
  &-success{
    background-color: lighten(#5cb85c, 15%);
    border-color: lighten(#5cb85c, 10%);
    color: darken(#5cb85c, 15%);
  }
  &-warning{
    background-color: lighten(#E2A41F, 15%);
    border-color: lighten(#E2A41F, 10%);
    color: darken(#E2A41F, 15%);
  }
  &-danger{
    background-color: lighten(#d43f3a, 15%);
    border-color: lighten(#d43f3a, 10%);
    color: darken(#d43f3a, 15%);
  }
  p{
    padding: 0;
    margin: 0;
  }
  i{
    padding-right: 5px;
    vertical-align: middle;
    font-size: 24px;
  }
  .close-alert{
    -webkit-appearance: none;
    position: relative;
    float: right;
    padding: 0;
    border: 0;
    cursor: pointer;
    color: inherit;
    background: 0 0;
    font-size: 21px;
    line-height: 1;
    font-weight: bold;
    text-shadow: 0 1px 0 rgba(255,255,255,.7);
    filter: alpha(opacity=40);
    opacity: .4;
    &:hover{
      filter: alpha(opacity=70);
      opacity: .7;
    }
  }
}

.shadow-1{
  box-shadow: 0 1px 3px rgba(#000, .12), 0 1px 2px rgba(#000, .24) ;
}
.shadow-2{
  box-shadow: 0 3px 6px rgba(#000, .16), 0 3px 6px rgba(#000, .23) ;
}


</style>
