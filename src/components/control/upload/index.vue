<template>
  <div class="upload-box">

    <el-upload
      class="avatar-uploader"
      action="#"
      :http-request="handleUpload"
      :show-file-list="config.showFileList"
      :multiple="config.multiple"
      :limit="config.limit || 1"
      :accept="config.accept"
      :on-exceed="handleExceed"
      :before-upload="handleBeforeUpload"
      :on-remove="handleRemove"
      :before-remove="handleBeforeRemove"
     >
        <i v-if="imageUrl && config.clear" class="el-icon-delete" @click.stop="handleClear"></i>
        <el-button v-if="model === 'button'" size="small" type="primary">点击上传</el-button>
        <div v-if="model === 'card'" class="upload-wrap" :style="[sizeStyle]" :class="{'is-round': isRound}">
          <img v-if="imageUrl" :src="imageUrl"  width="100%" height="100%">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </div>
    </el-upload>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'UploadComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  computed: {
    model () {
      return this.config?.model || 'button'
    },
    sizeStyle () {
      const width = this.config?.width || '150px'
      const height = this.config?.height || '150px'
      return {
        width,
        height
      }
    },
    fileSize () {
      return this.config?.maxSize || 2
    },
    isRound () {
      return this.config?.isRound || false
    }
  },
  watch: {

  },
  data () {
    return {
      val: '',
      imageUrl: ''
    }
  },
  methods: {
    handleUpload (data) {
      const file = data.file
      console.log('file', file)

      // 实力化formData对象
      const formData = new FormData()
      formData.append('file', file)

      const requestData = {
        url: this.url,
        method: this.method,
        data: formData
      }

      this.$axios(requestData).then(response => {
        console.log('response', response)
        this.imageUrl = response.data.servicePath
      }).catch(error => {
        console.log(error)
      })
    },
    handleClear () {
      this.imageUrl = ''
    },
    handleExceed () {
      this.$message.warning(`最多只能上传${this.config.limit}个文件`)
    },
    handleBeforeUpload (file) {
      const isSize = file.size / 1024 / 1024 < this.fileSize
      if (!isSize) {
        this.$message.error(`上传文件大小不能超过${this.fileSize} MB!`)
      }
      return isSize
    },
    handleRemove () {
      this.imageUrl = ''
    },
    handleBeforeRemove () {
      return new Promise((resolve, reject) => {
        this.$confirm('是否删除文件？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-wrap{
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    border-color: #409EFF;
  }
}
.upload-box{
  position: relative;
  display: inline-block;
}
.el-icon-delete{
  position: absolute;
  right : 10px;
  top: 10px;
  cursor: pointer;
  z-index : 2;
}
.upload-mask{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  left : 0;
  top : 0;
  z-index : 2;
}
.is-round{
  border-radius: 50%;
  overflow: hidden;
}
</style>
