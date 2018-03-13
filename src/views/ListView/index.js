import Listview from './src/Listview.vue'

Listview.install = function (Vue) {
    Vue.component(Listview.name, Listview)
}

export default Listview