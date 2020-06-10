<template>
    <div id="vessel">
        <h2 id="heading"> No of major vessels colored by floursocopy </h2>
         <select class="drop-down" @click = "updateVessels" v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="(item, index) in a" :value="item">
            {{item}}
          </option>
        </select>
         <div class="error" v-if="$store.state.arr[11] != -1">
            <h2> Selected: {{arr[11]}} </h2>
        </div>
    </div>
</template>

<script>
  import store from "../store";
    export default {
        name: 'Vessels',
        data: function () {
            return {
                selected: '',
                a: ['0', '1', '2', '3']
            }
        },
        computed: {
            arr: function () {
                return this.$store.state['arr'];
            }
        },
        methods: {
            updateVessels () {
                store.commit('changeValue', {
                    value: this.selected,
                    index: 11,
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#vessel{
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







