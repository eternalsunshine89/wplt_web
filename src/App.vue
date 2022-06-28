<template>
  <el-container>
    <el-aside>
      <AsideBar></AsideBar>
    </el-aside>
    <el-container class="right-part">
      <el-header>
        <el-affix>
          <NavBar></NavBar>
        </el-affix>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from "@/components/NavBar"
import AsideBar from "@/components/AsideBar"

export default {
  name: 'App',
  components: {
    NavBar,
    AsideBar
  }
}
</script>

<style scoped>
.el-aside {
  width: 220px;
  height: 100vh;
  background-color: #545c64;
}

.el-header {
  padding: 0;
  height: 50px;
}

.el-main {
  margin: 0;
  padding: 0;
  height: calc(100vh - 90px);
  background-color: #eeeeee;
}
</style>
