<template>
  <div>
    <a-row>
      <a-col :span="24">
        <a-card hoverable>
          <a-card-meta :title="getUserName()" description="This is the description">
            <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="6">
        <a-card hoverable>
          <div>
            <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
            <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card hoverable>
          <div>
            <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
            <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
          </div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card hoverable>
          在岗员工
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <a-card hoverable :body-style="dashboardstyle">
          <dashboardstatus></dashboardstatus>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="Card title" hoverable style="height: 400px">
          <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">
          </p>
          <a-card title="Inner card title">
            <a slot="extra" href="#">More</a>
            Inner Card content
          </a-card>
          <a-card title="Inner card title" :style="{ marginTop: '16px' }">
            <a slot="extra" href="#">More</a>
            Inner Card content
          </a-card>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import dashboardstatus from "@/views/dashboard/components/dashboardstatus";

export default {
  components:{
    dashboardstatus,
  },
  name: "Dashboard",
  data() {
    return {
      dashboardstyle:{
        height:"400px"
      },
      userName: 'HJL',
      date: new Date(),
    };
  },
  methods: {
    getUserName() {
      return this.userName
    },
  }
}
</script>

<style scoped>

</style>