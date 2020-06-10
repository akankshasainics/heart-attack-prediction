<template>
    <div id="exercise">
        <h2 id="heading"> Exercise based angina?</h2>
        <div class="ig-control">
          <input @change = "updateExercise" type="radio" class="ig-control__radio" id="unchecked" value="1" v-model="picked">
          <label for="unchecked"> Yes </label>
      </div>
            <br>
            <div class="ig-control">
           <input @change = "updateExercise" type="radio" class="ig-control__radio" id="checked" value="0" v-model="picked">
            <label for="checked"> No </label>
        </div>
            <br>
            <div v-if="$store.state.arr[8] != -1">
                 <h2> Selected: {{a[arr[8]]}} </h2>
            </div>
    </div>
</template>

<script>
    import store from "../store";
    export default {
        name: 'Exercise',
        data: function () {
            return {
                picked: '',
                a : {
                    '1' : 'Yes',
                    '0' : 'No'
                }
            }
        },
        computed: {
            arr: function () {
                console.log(this.$store.state['arr'])
                return this.$store.state['arr'];
            },
        },
        methods: {
            updateExercise () {
                store.commit('changeValue', {
                    value: this.picked,
                    index: 8,
                });
            }
        }

    }
</script>
<style lang="scss" scoped>
@import "@/assets/sytles/Home.scss";
#exercise{
    background-color: #C4D99B ;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
}
#heading{
    margin: 45px;
}
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-size: 100%;
  font-size-adjust: 0.58;
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
}

$secondary-color: #3A4B1A  !default;
$radio-fill-color: $secondary-color !default;
$radio-empty-color: #757575 !default;
$radio-border: 2px solid $radio-fill-color !default;
$input-disabled-color: #D1D1D1 !default;
$input-background: #FFF !default;
$input-disabled-solid-color: $input-disabled-color !default;
.cntr {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ig-control {
  margin: 10px 0;
  -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.ig-control__radio:not(:checked),
.ig-control__radio:checked {
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  left: 0;
  pointer-events: none;
}

.ig-control__radio {
  ~ label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 20px;
    line-height: 20px;
    font-size: 1rem;
    color: #484848;
    padding-left: 36px;
  }
  ~ label:before,
  ~ label:after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    left: 0;
    border: 2px solid transparent;
    border-radius: 50% 50%;
  }
  ~ label:before {
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all .2s ease-in;
  }
  &:not(:checked) ~ label:before {
    transform: scale(0);
  }
  &:not(:checked) ~ label:after {
    border: 2px solid $radio-empty-color;
  }
  &:checked ~ label:before {
    border: 2px solid $secondary-color;
    background-color: $secondary-color;
    transform: scale(.5);
  }
  &:checked ~ label:after {
    border: 2px solid $radio-fill-color;
  }
}
</style>
