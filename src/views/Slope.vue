<template>
    <div id="slope">
        <h2 id="heading"> Slope of the peak exercise ST segment: </h2>
         <select class="drop-down" @click="updateSlope" v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="(item, key) in a" :value="key">
            {{item}}
          </option>
        </select>
          <div class="error" v-if="$store.state.arr[10] != -1">
            <h2> Slope: {{a[arr[10]]}} </h2>
        </div>
    </div>
</template>

<script>
    import store from "../store";
    export default {
        name: 'ChestPain',
        data: function () {
            return {
                selected: '',
                a: {
                    '1' : 'Upsloping',
                    '2' : 'Flat',
                    '3' : 'Downsloping',
                }
            }
        },
        computed: {
            arr: function () {
                return this.$store.state['arr'];
            }
        },
        methods: {
            updateSlope () {
                store.commit('changeValue', {
                    value: this.selected,
                    index: 10,
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#slope{
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







