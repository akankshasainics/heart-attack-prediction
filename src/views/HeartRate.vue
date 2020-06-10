<template>
    <div id="HeartRate">
        <div class="form-group" :class="{ 'form-group--error': $v.selected.$error }">
        <h2> Maximum Heart Rate achieved (in BPM)</h2>
         <fieldset class="material">
          <input class="form_input" v-on:keyup.enter="setHeartRate($event.target.value)" placeholder="71-202"/>
      </fieldset>
        </div>
        <div class="error valid" v-if="!$v.selected.between">Must be between {{$v.selected.$params.between.min}} and {{$v.selected.$params.between.max}}.</div>
        <div class="error" v-if="$v.selected.between && $store.state.arr[7] != -1">
            <h2> Entered: {{arr[7]}} BPM </h2>
        </div>
    </div>
</template>

<script>
    import store from "../store";
    import { required, between} from 'vuelidate/lib/validators';
    export default {
        name: 'HeartRate',
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
            updateHeartRate () {
                store.commit('changeValue', {
                    value: this.selected,
                    index: 7,
                });
            },
            setHeartRate(value){
                this.selected = value
                this.$v.selected.$touch()
                console.log(this.selected)
                if(this.selected >= 71 && this.selected <= 202){
                    this.updateHeartRate()
                }
            }
        },
        validations: {
            selected: {
                between: between(71,202)
            }
        }


    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#HeartRate{
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


