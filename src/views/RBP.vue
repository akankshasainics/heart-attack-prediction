<template>
    <div id="RBP">
    <div class="form-group" :class="{ 'form-group--error': $v.RBP.$error }">
        <h2> Please enter your resting blood pressure in mm Hg </h2>
          <fieldset class="material">
          <input class="form_input" v-on:keyup.enter="setRBP($event.target.value)" placeholder="94-200 mm Hg"/>
        </fieldset>
    </div>
    <div class="error valid" v-if="!$v.RBP.between">Must be between {{$v.RBP.$params.between.min}} and {{$v.RBP.$params.between.max}}.</div>
    <div class="error" v-if="$v.RBP.between && $store.state.arr[3] != -1">
        <h2> Entered: {{rbp[3]}} mm Hg</h2>
    </div>
</div>
</template>

<script>
    import store from "../store";
    import { required, between} from 'vuelidate/lib/validators';
    export default {
        name: 'RBP',
        data: function () {
            return {
                RBP: '',
            }
        },
        computed: {
            rbp: function () {
                return this.$store.state['arr'];
            }
        },
        methods: {
            updateRBP () {
                store.commit('changeValue', {
                    value: this.RBP,
                    index: 3,
                });
            },
            setRBP(value){
                this.RBP = value
                this.$v.RBP.$touch()
                console.log(this.RBP)
                if(this.RBP >= 94 && this.RBP <= 200){
                    this.updateRBP()
                }

            }
        },
        validations: {
            RBP: {
                required,
                between: between(94,200)
            }
        }
    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#RBP{
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
