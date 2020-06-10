<template>
    <div id="thal">
        <h2 id="heading"> Thal </h2>
         <select class="drop-down" @click = "updateThal" v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="(item, key) in a" :value="key">
            {{item}}
          </option>
        </select>
          <div class="error" v-if="$store.state.arr[12] != -1">
            <h2> Selected: {{a[arr[12]]}} </h2>
        </div>
    </div>
</template>

<script>
    import store from "../store";
    export default {
        name: 'Thal',
        data: function () {
            return {
                selected: '',
                a: {
                    '3' : 'Normal',
                    '6' : 'Fixed defect',
                    '7' : 'Reversable defect',

                }
            }
        },
        computed: {
            arr: function () {
                return this.$store.state['arr'];
            }
        },
        methods: {
            updateThal () {
                store.commit('changeValue', {
                    value: this.selected,
                    index: 12,
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#thal{
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
