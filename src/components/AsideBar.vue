<template>
  <div>
    <el-affix>
      <div class="logo">
        <el-link :underline="false" href="/">L O G O</el-link>
      </div>
    </el-affix>
    <el-menu
          class="asideBar"
          active-text-color="#ffd04b"
          background-color="#545c64"
          default-active="1"
          text-color="#fff"
          :router="true"
      >
        <el-menu-item index="1">
          <el-icon>
            <View/>
          </el-icon>
          <span>数据看板</span>
        </el-menu-item>
        <el-menu-item index="/project-manage">
          <el-icon>
            <Folder/>
          </el-icon>
          <span>项目管理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon>
            <Timer/>
          </el-icon>
          <span>任务管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Notebook/>
          </el-icon>
          <span>用例管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <Warning/>
          </el-icon>
          <span>缺陷管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon>
            <Document/>
          </el-icon>
          <span>报告管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon>
            <VideoCamera/>
          </el-icon>
          <span>测试工具</span>
        </el-menu-item>
        <el-sub-menu index="6">
          <template #title>
            <el-icon>
              <setting/>
            </el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item index="4-1">账号管理</el-menu-item>
          <el-menu-item index="4-2">权限设置</el-menu-item>
        </el-sub-menu>
      </el-menu>
  </div>
</template>

<script>
import {Setting, View, Folder, Notebook, Timer, Warning, Document, VideoCamera} from "@element-plus/icons-vue"

export default {
  name: 'AsideBar',
  components: {
    Setting,
    View,
    Folder,
    Notebook,
    Timer,
    Warning,
    Document,
    VideoCamera
  }
}
</script>
<style scoped>
.asideBar {
  width: 100%;
  height: calc(100vh - 50px);
}

.logo {
  background-color: cadetblue;
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
}

.logo .el-link {
  color: #ffffff;
  font-size: xx-large;
}
</style>
