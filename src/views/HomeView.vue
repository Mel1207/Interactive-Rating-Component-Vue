<template>
  <div class="main w-full h-screen bg-main-black"> 
    <div class="container">
      <div class="main-box bg-main-gray-dark h-box-type w-box-type rounded-3xl p-5 mx-5">
        <h2>Hey there!</h2>
        <div v-for="rate in rates" :key="rate">
          <div class="box-rate"> 
            <p>{{ rate }}</p>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'HomeView',
  components: {},
  setup() {
    const rates = ref([1, 2, 3, 4, 5])


    return { rates }
  }
}
</script>

<style scoped>
  .box-rate {
    color: #fff !important;
    padding: 10px;
    background: red;
    /* display: block; */
    /* width: max-content; */
    align-items: center;
    height: 30px;
    width: 30px;
    margin-bottom: 15px;
    position: relative;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
