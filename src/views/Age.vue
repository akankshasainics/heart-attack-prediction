<template>
    <div id="age">
        <div class="form-group " :class="{ 'form-group--error': $v.selected.$error }">
          <h2 id="heading"> How old are you? </h2>
          <select class="drop-down" @click="updateAge" v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="(item, index) in a" :value="item">
            {{item}} year
          </option>
        </select>
        </div>
         <div class="error" v-if="$store.state.arr[0]!= -1">
            <h2> Age: {{age[0]}} years </h2>
        </div>
    </div>
</template>

<script>
    import store from "../store";
    import {required, between} from 'vuelidate/lib/validators';
    import { mapState } from 'vuex';
    export default {
        name: 'Age',
        data: function () {
            var arr = [], a = [];
            var i;
            for (i = 1; i <= 105; i++) {
                arr.push(i);
            }
            a = arr;
            return {
                selected: '',
                update: 0,
                a
             }
        },
        computed: {
            age: function () {
                return this.$store.state['arr'];
            }
        },
        methods: {
            updateAge () {
                store.commit('changeValue', {
                    value: this.selected,
                    index: 0,
                });
            },
            setAge(value){
                this.selected = value
                this.$v.selected.$touch()
                if(this.selected != ''){
                    this.updateAge()
                }
            }
        },
        validations: {
            selected: {
                required,
            }
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#age{
    background-color: #DCCCEC ;
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



