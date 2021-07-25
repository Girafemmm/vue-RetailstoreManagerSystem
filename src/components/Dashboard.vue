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
        <a-card hoverable>
          HHHHH
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
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