<template>
  <div class="navigation">
    <el-row class="navbar">
      <el-col :span="2">
        <div class="home-button">
          <el-link href="/" :underline="false" style="font-size: medium">
            <el-icon>
              <HomeFilled/>
            </el-icon>
            <span>主页</span>
          </el-link>
        </div>
      </el-col>
      <el-col :span="2" :offset="20">
        <div class="user-center">
          <el-dropdown>
            <div class="user-block">
              <el-link :underline="false" style="font-size: medium">
                <el-icon>
                  <UserFilled/>
                </el-icon>
                <span>个人中心</span>
              </el-link>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>注销</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
    <el-row class="page-head">
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">项目管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
  </div>
</template>

<script>
import {HomeFilled, UserFilled} from "@element-plus/icons-vue"

export default {
  name: 'NavBar',
  components: {
    HomeFilled,
    UserFilled,
  }
}
</script>

<style scoped>
.navigation {
  width: calc(100vw - 220px);
  height: 90px;
}

.navbar {
  width: 100%;
  height: 50px;
  background-color: #545c64;
  color: #ffffff
}

.page-head {
  width: 100%;
  height: 40px;
  background-color: #ffffff;
}

.breadcrumb {
  width: 100%;
  line-height: 40px;
  padding-left: 20px;
}

.el-link {
  color: #ffffff;
}

.home-button {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
}

.user-center {
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.user-block {
  line-height: 50px;
}
</style>
