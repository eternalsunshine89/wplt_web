<template>
  <div>
    <el-card class="main">
      <el-row class="create-project">
        <el-col :span="2">
          <el-button type="primary" @click="dialogVisible = true">创建新项目</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-input
              clearable
              v-model="searchInput"
              class="searcher"
              placeholder="输入关键词">
            <template #suffix>
              <el-icon>
                <Search></Search>
              </el-icon>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row v-for="(item, index) in searchData" :key="index">
        <el-col>
          <ProjectList
              :project-name="item.project_name"
              :version="getVersion(item.version)"
              :description="item.description"
              :createUser="item.create_user"
              :createTime="formatTime(item.create_time)"
              :projectKind="item.platform"
              :projectIcon="item.icon"
          ></ProjectList>
          <el-divider v-if="index+1<projects.length"></el-divider>
        </el-col>
      </el-row>
    </el-card>
    <div class="prj-form">
      <el-dialog
          v-model="dialogVisible"
          title="填写项目信息"
          width="30%"
          center
          draggable>
        <ProjectForm @addNewPrj="addNewPrj" @cancelAdd="cancelAdd"></ProjectForm>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ProjectList from "@/components/ProjectList"
import ProjectForm from "@/components/ProjectForm"
import {Search} from "@element-plus/icons-vue"
import $axios from "@/api/index"
import {cloneDeep} from "lodash"

export default {
  name: 'ProjectPage',
  components: {
    ProjectList,
    ProjectForm,
    Search
  },
  created() {
    this.getProject()
  },
  data() {
    return {
      searchInput: '',
      searchData: [],
      projects: [],
      pagesize: 10,
      version: [],
      dialogVisible: false
    }
  },
  methods: {
    async getProject() {
      await $axios.get('/project/get').then(res => {
        this.projects = res.data.data
        this.searchData = cloneDeep(this.projects)
      }).catch(err => {
        console.log(err)
      })
    },
    getVersion(val) {
      if (val.includes(",") !== 1) {
        return val.split(",")[0]
      }
    },
    formatTime(val) {
      return val.replace("T", " ")
    },
    async addNewPrj(val) {
      this.dialogVisible = false
      console.log(val)
      await $axios.post('/project/add', {'prj': val})
          .then(this.getProject())
          .catch(err => console.log(err))
    },
    cancelAdd(val) {
      this.dialogVisible = val
    }
  },
  watch: {
    searchInput() {
      if (this.searchInput) {
        this.searchData = this.projects.filter(value => value.project_name.indexOf(this.searchInput) !== -1)
      } else {
        this.searchData = cloneDeep(this.projects)
      }
    }
  }
}
</script>
<style scoped>
.main {
  margin: 60px 20px;
  padding: 10px 20px;
}

.searcher {
  width: 200px;
}

.search-bar {
  height: 100%;
  line-height: 40px;
}

.create-project {
  margin-bottom: 30px;
}
</style>