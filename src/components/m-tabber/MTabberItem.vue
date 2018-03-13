<template>
    <a class="mint-tab-item" :class="{'is-selected':isSelect}" @click="goToRouter">
      <div class="mint-tab-item-icon"><img src="(unknow)"></div>
      <div class="mint-tab-item-label"><slot></slot></div>
    </a>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  props: {
    id: {
      type: String
    },
    isRouter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSelect() {
      if (this.$parent.value === this.id) {
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    ...mapActions([
      'indexTabbarHide'
    ]),
    goToRouter() {
      if(this.$parent.value !== this.id){
        if(this.id == 'choose'){
          this.$router.push(this.id);  
          this.indexTabbarHide();        
        }else{
          this.$router.replace(this.id);
        }
      }
    }
  }
};
</script>