<template>
  <div class="project-form">
    <el-form :model="formData" label-position="left" label-width="80px">
      <el-form-item label="项目图标">
        <el-input v-model="formData.icon"/>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input v-model="formData.project_name"/>
      </el-form-item>
      <el-form-item label="项目描述">
        <el-input v-model="formData.description" type="textarea" autosize clearable/>
      </el-form-item>
      <el-form-item label="项目类型">
        <el-select
            v-model="formData.platform"
            placeholder="选择项目类型">
          <el-option v-for="(item, index) in prjKind" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="版本号">
        <el-input v-model="formData.version"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="cancelAdd">取消</el-button>
        <el-button type="primary" @click="addNewPrj">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'ProjectForm',
  data() {
    return {
      prjKind: ['web', 'api', 'app'],
      formData: {
        project_name: '',
        icon: 'https://s2-cdn.oneitfarm.com/Fh0hQxcS7sl54Qb_mHivYPg7XKiZ',
        description: '',
        platform: '',
        version: '',
      }
    }
  },
  methods: {
    addNewPrj() {
      this.$emit('addNewPrj', this.formData)
    },
    cancelAdd() {
      this.$emit('cancelAdd', false)
    }
  }
}
</script>

<style scoped>
</style>
