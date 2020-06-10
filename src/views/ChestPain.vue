<template>
    <div id="ChestPain">
        <h2 id="heading"> Please Select your chest pain type </h2>
         <select class="drop-down" @click="updateChestPain" v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="(item, key) in a" :value="key">
            {{item}}
          </option>
        </select>
        <div class="error" v-if="$store.state.arr[2]!= -1">
            <h2> ChestPain type: {{a[arr[2]]}} </h2>
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
                    '1' : 'Typical angina',
                    '2' : 'Atypical angina',
                    '3' : 'Non-anginal pain',
                    '4' : 'asymptomatic'
                }
            }
        },
        computed: {
            arr: function () {
                return this.$store.state['arr'];
            }
        },
        methods: {
            updateChestPain () {
                store.commit('changeValue', {
                    value: this.selected,
                    index: 2,
                });
            }
        }

    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#ChestPain{
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


