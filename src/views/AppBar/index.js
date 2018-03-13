import Appbar from './src/Appbar.vue'

Appbar.install = function (Vue) {
    Vue.component(Appbar.name, Appbar)
}

export default Appbar