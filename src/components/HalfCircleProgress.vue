<template>
  <div class="container">
    <div class="curved-progress">
      <div class="progress-bar" :style="{ width: progress + '%' }">
      </div>
      <div class="inner-circle">
        <div class="kpi">
          <small class="form-text text-muted">Completion</small>
          <span>50%</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      progress: 50, // Set the initial progress value
    };
  },
}
</script>
  
<style scoped>
.curved-progress {
  position: relative;
  width: 500px;
  height: 250px;
  background-color: lightgray;
  border-radius: 250px 250px 5px 5px;
  overflow: hidden;

  .inner-circle {
    position: absolute;
    width: 400px;
    height: 241px;
    background-color: #FFFFFF;
    border-radius: 250px 250px 0px 0px;
    overflow: hidden;
    top: 45px;
    margin: 0px 0px 0px 50px;
    z-index: 1;

    .kpi {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      width: auto;

      top: 50px;
      margin: auto;
      z-index: 2;

      .form-text {
        font-size: 22px;
        font-weight: 600;
      }

      >span {
        font-size: 66px;
        font-weight: 600;
      }
    }
  }
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #1F5AFA;
  transform-origin: bottom center;
  transition: width 0.3s ease-in-out;
}
</style>