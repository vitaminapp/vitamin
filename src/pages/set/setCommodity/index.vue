<template>
  <div class="chart-container">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="content-action">
      <div class="products-set-title size-16">商品设置</div>
      <el-form ref="form" :model="forms" label-width="80px" class="form-line">
        <el-form-item label="库存件数">
          <el-radio-group v-model="forms.resource" class="form-line">
            <el-radio v-model="radio" label="1">不显示</el-radio>
            <div style="marginTop:25px">
               <el-radio v-model="radio" label="2">显示</el-radio>
            </div>
          </el-radio-group>
          
          <div style="marginLeft:25px">商品详情页将展示“库存x件”的说明</div>
        </el-form-item>
         
          
        <el-form-item label="剩余件数">
          <el-radio-group v-model="forms.residue" class="form-line">
            <el-radio label="不显示" />
            <div class="inventory">
              <el-radio label="当库存少于">
                <span>当库存少于</span>
                <el-input v-model="forms.residue_numbers" style="width:180px; margin: 0 10px" />
                <span>件时显示剩余件数</span>
              </el-radio>
            </div>
          </el-radio-group>
          <div style="marginLeft:25px">商品详情页将展示“仅剩x件”的说明</div>
        </el-form-item>
        <el-form-item label="最新到店">
          <el-radio-group v-model="forms.newest" class="form-line">
            <el-radio label="不显示" />
            <div class="inventory">
              <el-radio label="当库存少于">
                <span>当商品上架少于</span>
                <el-input v-model="forms.new_shop_day" style="width:180px; margin: 0 10px" />
                <span>天时显示“最新到店”标签</span>
              </el-radio>
            </div>
          </el-radio-group>
          <div style="marginLeft:25px">商品列表页将展示“最新到店”标签</div>
        </el-form-item>
        <el-form-item label="分享描述">
          <el-input v-model="forms.describe" style="width:500px; margin: 0 10px" />
          <div style="marginLeft:25px">微信分享给好友时会显示，建议36个字以内</div>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button type="primary" >保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import './index.scss'
import Breadcrumb from '@/components/Breadcrumb'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SetCommodity',
  components: {
    Breadcrumb
  },
  data() {
    return {
      forms: {
        resource: '',
        inventory: '',
        residue: '',
        newest: '',
        describe:'',
        new_shop_day:'',
        residue_numbers:'',
      },
      radio:"1"
    }
  },
  computed: {
    ...mapState('set', ['detailList'])
  },
  mounted() {
    this.getDetail()
    this.forms.describe=this.detailList.value.describe
    this.forms.new_shop_day=this.detailList.value.new_shop_day
    this.forms.residue_numbers=this.detailList.value.residue_numbers
  },
  methods: {
    ...mapActions('set', ['getDetail'])
  }

}
</script>

<style scoped>
</style>
