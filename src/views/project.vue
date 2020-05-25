<!-- 自动化打包项目 -->
<template>
  <div class="project" v-loading="loading">
    <el-table
    :data="tableData"
    size="mini"
    border
    style="width: 100%"
    max-height="250">
    <el-table-column
      label="id"
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="项目名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="path"
      label="项目路径"
      width="150">
    </el-table-column>
    <el-table-column
      prop="github"
      label="github地址">
    </el-table-column>
    <el-table-column
      label="线上地址">
      <template slot-scope="scope">
        <a :href="scope.row.url">{{scope.row.url}}</a>
      </template>
    </el-table-column>
    <!-- <el-table-column
      label="状态"
      width="100">
      <template slot-scope="scope">
        {{scope.row.status | status}}
      </template>
    </el-table-column> -->
    <el-table-column
      label="打包命令"
      prop="shell"
      width="100">
    </el-table-column>
    <el-table-column
      label="修改时间"
      width="100">
      <template slot-scope="scope">
        {{scope.row.time | date}}
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <div class="center operating">
          <el-button
            @click.native.prevent="upProject(scope.$index, scope.row.id)"
            type="success"
            circle
            icon="el-icon-upload"
            size="mini">
          </el-button>
          <el-button type="primary" size="mini" @click.native.prevent="changePro(scope.row)" icon="el-icon-edit" circle></el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, scope.row.id)"
            type="danger" icon="el-icon-delete" circle
            size="mini">
          </el-button>
        </div>
        <Loading v-if="progressLoad[scope.$index]" :status="proStatus" />
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
  title="编辑"
  :visible.sync="dialogVisible"
  width="30%">
  <el-form label-position="left" size="mini" label-width="100px" :model="form">
    <el-form-item required label="项目名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item required label="项目版本">
      <el-input v-model="form.version"></el-input>
    </el-form-item>
    <el-form-item required label="项目路径">
      <el-input v-model="form.path"></el-input>
    </el-form-item>
    <el-form-item required label="github地址">
      <el-input v-model="form.github"></el-input>
    </el-form-item>
    <el-form-item required label="线上地址">
      <el-input v-model="form.url"></el-input>
    </el-form-item>
    <el-form-item required label="打包命令">
      <el-input v-model="form.shell"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button size="mini" type="danger" @click="dialogVisible = false">取 消</el-button>
    <el-button size="mini" type="primary" @click="UpProjectConfig">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import Loading from '@/components/loading.vue'
export default {
  data () {
    return {
      page: 1,
      tableData: [],
      loading: false,
      dialogVisible: false,
      progressLoad: [],
      form: {
        name:null,
        path: null,
        github: null,
        url: null,
      },
      customColor: '#409eff',
      proStatus:'loading'
    };
  },

  filters: {
    status(val){
      const result = ['未上线', '已上线'];
      return result[val]
    },
  },

  components: {
    Loading
  },

  computed: {
    
  },

  created() {
    this.getProjectList()
  },

  methods: {
    // 删除项目
    deleteRow(index) {
      
    },
    // 修改按钮
    changePro(data) {
      this.dialogVisible = true;
      this.form = data
    },
    // 更新项目配置
    async UpProjectConfig() {
      try {
        const body = this.form;
        const {code, data, msg} = await this.$http.UpProjectConfig({body});
        this.$message.success(msg)
        if(code === 200) {
          this.dialogVisible = false;
          this.getProjectList()
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 更新项目
    async upProject(index, id) {
      try {
        this.progressLoad[index] = true;
        this.proStatus = 'loading'
        this.progressLoad = [...this.progressLoad];
        const body = {
          id: id
        }
        const res = await this.$http.BaleProject({body});
        if(res.code === 200) {
          this.proStatus = 'success'
        }else {
          this.proStatus = 'error'
          this.$message.error(res.msg)
        }
      } catch (error) {
        
        console.log(error)
      }
      
    },
    // 获取项目内容
    async getProjectList() {
      try {
        if(this.loading){
          return ;
        }
        this.loading = true;
        const params = {
          page: 1
        }
        const {code, msg, data} = await this.$http.getProjectList({params});
        if(code === 200) {
          this.tableData = data
          console.log(this.tableData)
        }else {
          this.$message.error(msg)
        }
        this.loading = false;
      } catch (error) {
        console.log(error)
        this.loading = false;
      }
    }
  }
}

</script>
<style lang='stylus' scoped>
.operating
  justify-content space-around
  margin 10px 0
// .opt
//   position absolute
//   bottom 0
//   left 0
</style>