<template>
  <div id="DeliveryAddress">
    <Appbar title="管理收货地址" type="1"/>
    <div class="content">
      <ul v-for="(item,index) in addressList" :key="index">
        <li>
          <div class="top">
            <div class="part1">
              <h2>{{item.userName}}</h2>
              <h3>{{item.userPhone}}</h3>
            </div>
            <div class="part2">
              <h2>{{item.userCity+item.userTown+item.userAddress}}</h2>
            </div>
          </div>
          <div class="bottom">
            <input type="radio" name="aa" :id="item.id" :checked="item.isDefault == 1?'checked':''"  @change="checkDefault(index)">
            <label :for="item.id"></label>
            <h2 v-if="item.isDefault" style="color: #f73a50;">默认地址</h2>
            <h2 v-else>设为默认</h2>
            <span @click="edit(item.id)"><img src="../../../assets/mine/deliveryaddress/edit.png" alt=""><h3>编辑</h3></span>
            <span @click="del(item.id,index)"><img src="../../../assets/mine/deliveryaddress/delete.png" alt=""><h3>删除</h3></span>
          </div>
        </li>
      </ul>
    </div>
    <mu-raised-button @click="toAddAddress">添加新地址</mu-raised-button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'DeliveryAddress',
  data() {
    return {
      addressList: [],
      userIsChecked: false,
    };
  },
  computed: {
    ...mapGetters(['userId']),
  },
  methods: {
    ...mapActions([
      'getaddress',
      'deladdress',
      'getaddressId',
      'setdefaultaddress',
    ]),
    toAddAddress() {
      this.$router.push('addaddress');
    },
    edit(id) {
      this.getaddressId({
        data: {
          addressId: id,
        },
        success: data => {
          this.$router.push({
            name: 'addaddress',
            params: data,
          });
        },
      });
    },
    del(id, index) {
      this.deladdress({
        data: {
          addressId: id,
        },
        success: () => {
          this.addressList.splice(index, 1);
        },
      });
    },
    checkDefault(i) {
      for (const index in this.addressList) {
        if (index == i) {
          this.addressList[index].isDefault = 1;
          this.setdefaultaddress({
            data: {
              userId: this.userId,
              addressId: this.addressList[index].id,
            },
            success: () => {},
          });
        } else {
          this.addressList[index].isDefault = 0;
        }
      }
    },
  },
  mounted() {},
  updated() {},
  created() {
    this.getaddress({
      data: {
        userId: this.userId,
      },
      success: data => {
        this.addressList = data;
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 0.88rem;
  margin-bottom: 0.98rem;
  ul {
    li {
      height: 2.42rem;
      border-bottom: 0.2rem solid #f4f4f4;
      .top {
        height: 1.34rem;
        border-bottom: 0.01rem solid #bfbfbf;
        padding: 0 0.2rem;
        .part1 {
          height: 0.67rem;
          width: 100%;
          h2,
          h3 {
            font-size: 0.28rem;
            line-height: 0.67rem;
            color: #333333;
            font-weight: 500;
          }
          h2 {
            float: left;
          }
          h3 {
            float: right;
          }
        }
        .part2 {
          h2 {
            font-weight: 500;
            font-size: 0.28rem;
            line-height: 0.5rem;
            color: #333333;
          }
        }
      }
      .bottom {
        padding: 0 0.2rem;
        height: 0.88rem;
        display: flex;
        position: relative;
        input[type='radio'] {
          opacity: 0;
        }
        label {
          position: absolute;
          left: 0.2rem;
          top: 0.25rem;
          width: 0.4rem;
          height: 0.4rem;
          border: 0.03rem solid #666666;
          border-radius: 0.2rem;
        }
        input:checked + label {
          background-color: #f73a50;
          border: none;
        }
        input:checked + label::after {
          position: absolute;
          content: '';
          width: 0.15rem;
          height: 0.25rem;
          top: 0.05rem;
          left: 0.12rem;
          border: 0.04rem solid #ffffff;
          border-top: none;
          border-left: none;
          transform: rotate(45deg);
        }
        h2 {
          font-size: 0.26rem;
          line-height: 0.88rem;
          color: #666666;
          margin-left: 0.18rem;
          width: 4.4rem;
          font-weight: 400;
        }
        span {
          display: flex;
        }
        h3 {
          font-size: 0.26rem;
          line-height: 0.88rem;
          color: #666666;
          font-weight: 400;
        }
        img {
          margin: 0.26rem 0.08rem;
          height: 0.36rem;
        }
        span:nth-of-type(2) {
          margin-left: 0.05rem;
        }
      }
    }
  }
}
.mu-raised-button {
  display: block;
  min-width: 7.5rem;
  height: 0.98rem;
  color: #ffffff;
  background-color: #f73a50;
  font-size: 0.38rem;
  position: fixed;
  bottom: 0;
}
</style>

