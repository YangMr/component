<template>
  <div>
    <h3>文件上传</h3>
    <hr>

    <input ref="upload" type="file" @change="handleSelectFile" class="file-upload"/>

    <div class="upload-box">
      <el-button type="primary" size="mini" @click="handleClick">选择文件</el-button>
      <el-button :loading="loading" type="success" size="mini" @click="handleUpload">上传</el-button>
      <div class="file-info" v-if="files">
        文件: {{files.name}}
      </div>
    </div>

    <img v-if="imgUrl" :src="imgUrl" alt="" width="100" height="100">
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      files: '',
      imgUrl: '',
      loading: false
    }
  },
  methods: {
    // 选择文件按钮触发的方法
    handleClick () {
      this.$refs.upload.click()
    },
    // 拉起选择文件的弹窗，并选择要上传的文件
    handleSelectFile (event) {
      // 获取要上传的文件
      this.files = event.target.files[0]
      console.log(this.files)
    },
    // 点击上传
    async handleUpload () {
      // 获取上传文件的大小
      const size = this.files.size
      // 限制的文件大小
      const targetSize = 1024 * 1024 * 2
      // 获取文件的类型
      const type = this.files.type

      // 上传的文件不能大于2MB
      if (size > targetSize) {
        this.$message.error('上传的文件不能大于2MB')
        return false
      }

      // 上传的文件只能是png
      if (!/png|jpg|jpeg|gif/i.test(type)) {
        this.$message.error('上传的文件只能是png')
        return false
      }

      // 文件需要将文件添加formData中
      const formData = new FormData()
      formData.append('file', this.files)
      formData.append('filename', this.files.name)

      this.loading = true
      // 开始上传
      const response = await this.$axios({
        url: '/api/upload_single',
        method: 'POST',
        data: formData
      })
      this.loading = false
      this.imgUrl = response.data.servicePath
      console.log(response)
    }
  }
}
</script>

<style scoped>
.file-upload{
  display: none;
}
.upload-box{
  width: 400px;
  height: 150px;
  border :1px dashed #ccc;
  padding : 20px;
  box-sizing: border-box;
}
.file-info{
  margin-top: 20px;
  font-size : 14px;
  color : #ccc;
}
</style>
