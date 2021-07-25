<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">{{collapsed?'RSMS':'零售门店管理系统'}}</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/dashboard" tag="div">
            <a-icon type="dashboard" /><span>总览面板</span></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/status" tag="div">
            <a-icon type="bar-chart" /><span>统计面板</span></router-link>
        </a-menu-item>
        <a-sub-menu key="3">
          <span slot="title"><a-icon type="shop" /><span>商品管理</span></span>
          <a-menu-item key="31">
            <router-link to="/itemforsale" tag="div">
              <span>
                <a-icon type="bars" />在售列表
              </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="32">
            <router-link to="/itemdealrecent" tag="div">
              <span>
               <a-icon type="fund" />最近成交
              </span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="4">
          <span slot="title"><a-icon type="solution" /><span>员工管理</span></span>
          <a-menu-item key="41">
            <router-link to="/employeelist" tag="div">
              <span>
                <a-icon type="team" />员工列表
              </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="42">
            <router-link to="/employeeattendance" tag="div">
              <span>
               <a-icon type="schedule" />考勤统计
              </span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="5">
          <router-link to="/storagemanager" tag="div">
            <a-icon type="appstore" /><span>仓库管理</span></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="flex" style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
          <a-dropdown-button style="padding-right:15px">
            {{ username }}
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"> <a-icon type="idcard" />个人中心 </a-menu-item>
              <a-menu-item key="2"> <a-icon type="lock" />修改密码 </a-menu-item>
              <a-menu-item key="3"> <a-icon type="logout" />注销 </a-menu-item>
            </a-menu>
            <a-icon slot="icon" type="user" />
          </a-dropdown-button>
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
       <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      username:'admin'
    };
  },
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
};
</script>

<style>
.layout{
  height: 100vh;
}

.layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.layout .trigger:hover {
  color: #1890ff;
}

.layout .logo {
  height: 32px;
  line-height: 32px;
  color: #fff;
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.layout .flex{
  display: flex;
  justify-content: space-between;
  align-items:center;
}

</style>
