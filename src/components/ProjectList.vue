<template>
  <div class="project-list" style="width: 100%; height: 80px">
    <el-row>
      <el-col :span="2">
        <div style="width:60px; height:60px; padding-top: 10px">
          <el-image :src="projectIcon" alt="项目图片"/>
        </div>
      </el-col>
      <el-col :span="20">
        <el-descriptions :title="projectName+'('+version+')'" column="3">
          <el-descriptions-item label="项目类型:">
            <el-tag>{{ projectKind }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="创建人:">{{ createUser }}</el-descriptions-item>
          <el-descriptions-item label="创建时间:">{{ createTime }}</el-descriptions-item>
          <el-descriptions-item label="项目描述:">{{ description }}</el-descriptions-item>
        </el-descriptions>
      </el-col>
      <el-col :span="2" class="option-btn">
        <div>
          <el-link type="primary" :underline="false">
            <el-icon>
              <EditPen/>
            </el-icon>
            <span>编辑</span>
          </el-link>
        </div>
        <div>
          <el-link type="danger" :underline="false">
            <el-icon>
              <Delete/>
            </el-icon>
            <span>删除</span>
          </el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {EditPen, Delete} from "@element-plus/icons-vue"

export default {
  name: 'ProjectList',
  components: {
    EditPen,
    Delete
  },
  props: {
    projectName: {},
    version: {},
    description: {},
    createUser: {},
    createTime: {},
    projectKind: {},
    projectIcon: {},
    styleData: {}
  }
}
</script>

<style scoped>
.option-btn {
  height: 100%;
  text-align: right;
}

.option-btn div {
  margin-bottom: 5px;
  height: 20px;
}
</style>
