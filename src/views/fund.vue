<!-- 记录关注基金 -->
<template>
  <div class="fund" v-loading="loading">
    <el-radio-group size="mini" v-model="type" @change="getFundList">
      <el-radio-button size="mini" label="1">基金持仓股票</el-radio-button>
      <el-radio-button size="mini" label="2">关注基金</el-radio-button>
    </el-radio-group>
    <el-form :inline="true" size="mini" :model="form">
      <el-form-item required label="基金代码">
        <el-input v-model="form.code" placeholder="基金代码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">增加</el-button>
        <el-button type="success" @click="Refresh">刷新数据</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      size="mini"
      border
      style="width: 100%">
      <el-table-column
      label="id"
      type="index"
      width="50"></el-table-column>
      <template v-if="type == 1">
        <el-table-column
          prop="name"
          label="股票名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="code"
          label="股票代码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="fundName"
          label="持仓基金">
        </el-table-column>
        <el-table-column
          prop="fundCode"
          label="持仓基金">
        </el-table-column>
        <el-table-column
          prop="total"
          width="100"
          label="持仓基金数量">
        </el-table-column>
      </template>
      <template v-else>
        <el-table-column
          prop="fundName"
          label="基金名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="fundCode"
          label="基金代码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="stockName"
          label="持仓股票">
        </el-table-column>
        <el-table-column
          prop="stockCode"
          label="持仓股票代码">
        </el-table-column>
      </template>
      <el-table-column
        width="100"
        label="最后更新时间">
        <template slot-scope="scope">
        {{scope.row.time | date}}
      </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-sizes="[20, 50, 100, 300]"
      :page-size="page_size"
      layout="sizes, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      page: 1,
      page_size: 20,
      total:0,
      type: 1,
      form: {
        code: null
      },
      loading: false
    };
  },

  components: {},

  computed: {},

  created() {
    this.getFundList()
  },

  methods: {
    handleSizeChange(size) {
      this.page_size = size;
      this.getFundList()
    },
    handleCurrentChange(page) {
      this.page = page;
      this.getFundList()
    },
    // 增加关注基金
    async onSubmit() {
      try {
        if(this.loading) {
          return;
        }
        this.loading = true;
        const body = {
          code: this.form.code
        }
        const {code, msg } = await this.$http.addFundList({body});
        this.loading = false;
        if(code == 200) {
          this.$message.success(msg);
          this.getFundList()
        }else {
          this.$message.warning(msg)
        }
        
      } catch (error) {
        this.loading = false;
      }
    },
    // 刷新全部数据
    async Refresh() {
      try {
        if(this.loading) {
          return;
        }
        this.loading = true;
        const { code, msg } = await this.$http.upFundList({});
        this.loading = false;
        if(code == 200) {
          this.$message.success(msg);
          this.getFundList()
        }else {
          this.$message.warning(msg)
        }
        
      } catch (error) {
        this.loading = false;
      }
    },
    // 获取基金数据列表
    async getFundList() {
      try {
        let params = {
          page: this.page,
          page_size: this.page_size,
          type: this.type
        }
        if(this.loading) {
          return;
        }
        this.loading = true;
        const res = await this.$http.getFundList({params});
        this.loading = false;
        if(res.code == 200) {
          this.tableData = res.data.list;
          this.total = res.data.total;
        }else {
          this.$message.error(res.msg)
        }
        
      } catch (error) {
        this.loading = false;
        console.log(error)
      }
    }
  }
}

</script>
<style lang='stylus' scoped>
.el-table{
  margin: 10px 0;
}
.el-radio-group{
  margin-bottom: 20px;
}
</style>