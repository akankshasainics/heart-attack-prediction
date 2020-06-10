<template>
    <div id="RER">
        <h2 id="heading"> Please Select Resting ElectroCardiographics result </h2>
         <select class="drop-down" @click = "updateRER" v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="(item, key) in a" :value="key">
            {{item}}
          </option>
        </select>
         <div class="error" v-if="$store.state.arr[6] != -1">
            <h2> Selected: {{a[arr[6]]}} </h2>
        </div>
    </div>
</template>

<script>
    import store from "../store";
    export default {
        name: 'RER',
        data: function () {
            return {
                selected: '',
                a: {
                    '0' : 'Normal',
                    '1' : 'Having ST-T wave abnormality',
                    '2' : "Showing probable or definite left ventricular hypertrophy by Estes' criteria",
                }
            }
        },
        computed: {
            arr: function () {
                return this.$store.state['arr'];
            }
        },
        methods: {
            updateRER () {
                store.commit('changeValue', {
                    value: this.selected,
                    index: 6,
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#RER{
    background-color: #EDE1E5 ;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
}
.drop-down{
    @extend .md-btn, .md-btn-raised;
    background: #55545B;
    margin: 10px;
    &:focus {
    background: darken(#55545B , 12%)
  }
}
#heading{
    margin: 45px;
}

</style>


