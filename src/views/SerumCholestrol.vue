<template>
    <div id="serum">
         <div class="form-group" :class="{ 'form-group--error': $v.selected.$error }">
          <h2> Please enter Serum cholestrol in mg/dl </h2>
          <fieldset class="material">
          <input v-on:keyup.enter="setSerumCholestrol($event.target.value)" v-model.lazy="selected"  placeholder="in mm/dl">
      </fieldset>
        </div>
        <div class="error valid" v-if="!$v.selected.between">Must be a number.</div>
        <div class="error" v-if="$v.selected.between && $store.state.arr[4] != -1">
            <h2> Entered: {{arr[4]}} </h2>
        </div>
    </div>
</template>

<script>
    import store from "../store";
    import { required, between} from 'vuelidate/lib/validators';
    export default {
        name: 'SerumCholestrol',
        data: function () {
            return {
                selected: '',
            }
        },
        computed: {
            arr: function () {
                return this.$store.state['arr'];
            }
        },
        methods: {
            updateSerumChol () {
                store.commit('changeValue', {
                    value: this.selected,
                    index: 4,
                });
            },
            setSerumCholestrol(value){
                this.selected = value
                this.$v.selected.$touch()
                console.log(this.selected)
                if(this.selected >= 1 && this.selected <= 2147483645){
                    this.updateSerumChol()
                }
            }
        },
        validations: {
            selected: {
                required,
                between: between(1,2147483645)
            }
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#serum{
    background-color: #EDE1E5 ;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
}
html, body {
    font: 14px/1.21 Roboto, 'Helvetica Neue', arial, helvetica, sans-serif;
    background: #EEE;
}
form {
    margin: 20px;
    padding: 20px;
    background: #FFF;
}
.valid{
    color: red;
}
.material {
    position: relative;
    padding: 0;
    margin: 5px;
    border: none;
    overflow: visible;

    input {
        box-sizing: border-box;
        width: 25%;
        padding: 12px 10px 8px;
        border: none;
        border-radius: 0;
        box-shadow: none;
        border-bottom: 1px solid #DDD;
        font-size: 120%;
        outline: none;
        cursor: text;

        &::-webkit-input-placeholder {
            transition: color 300ms ease;
        }
        &:not(:focus)::-webkit-input-placeholder {
            color: transparent;
        }
    }

    hr {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 2px;
        border: none;
        background: #607D8B;
        font-size: 1px;
        will-change: transform, visibility;
        transition: all 200ms ease-out;
        transform: scaleX(0);
        visibility: hidden;
        z-index: 10;
    }
    input:focus ~ hr {
        transform: scaleX(1);
        visibility: visible;
    }

    label {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 120%;
        color: #607D8B;
        transform-origin: 0 -150%;
        transition: transform 300ms ease;
        pointer-events: none;
    }
    input:focus ~ label,
    input:valid ~ label {
        transform: scale(0.6);
    }
}

</style>

