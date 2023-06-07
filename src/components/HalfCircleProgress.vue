<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="curved-progress">
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
        <div class="col-overlay">
        </div>
      </div>
    </div>
</template>
  
<script>
export default{
    data() {
        return {
            progress: 50, // Set the initial progress value
        };
    },
}
</script>
  
  <style>
 .curved-progress {
  position: relative;
  width: 200px;
  height: 100px;
  background-color: lightgray;
  border-radius: 100px 100px 0 0;
  overflow: hidden;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: green;
  transform-origin: bottom center;
  transition: width 0.3s ease-in-out;
}

.col-overlay {
    border: 1px solid;
    height: 133px;
    margin-top: 33px;
    margin-left: 47px;
    border-radius: 100%;
    width: 130px;
    background-color: snow;
    z-index: 1;
    position: absolute;
}
  </style>