<template>
  <div class="main w-full h-screen bg-main-black"> 
    <div class="container">
      <div class="main-box bg-main-gray-dark h-box-type w-box-type rounded-3xl p-5 mx-5">
        <div v-if="defaultData">
          <img src="../assets/images/icon-star.svg" alt="Icon star" class="p-4 bg-gray-700 rounded-full mb-5">
          <h1 class="text-white text-2xl mb-3">How did we do?</h1>
          <p class=" text-gray-400 mb-5">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div class=" flex w-full items-center justify-between mb-5">
            <div v-for="rate in rates" :key="rate" @click="getRate(rate)">
              <div class="box-rate rounded-full"> 
                <p class="text-lg">{{ rate }}</p>
              </div>
            </div>
          </div>
         
          <button class="btn" @click="displayRate">Submit</button>
        </div>
        <div v-else>
          <h3>You selected {{ rateData }} out of 5</h3>
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
    let defaultData = ref(true)
    let rateData = ref(null)

    const getRate = (id) => {
      console.log(`selected rate is ${id}`)
      rateData.value = id
     
    }

    const displayRate = () => {
      // displayData = true
      console.log(rateData.value)
      defaultData.value = false
    }

    return { rates, rateData, getRate, rateData, displayRate, defaultData }
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

  p.text-lg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h3 {
    font-size: 30px;
    color: white !important;
  }

  .btn {
    display: block;
    width: 100%;
    padding: 10px 0;
    background: #FC7613;
    border-radius: 30px;
    cursor: pointer;
  }
</style>
