<template>
  <div class="main w-full h-screen bg-main-black"> 
    <div class="container">
      <div class="main-box bg-main-gray-dark h-box-type w-box-type rounded-3xl p-7 mx-5">
        <div v-if="defaultData">
          <img src="../assets/images/icon-star.svg" alt="Icon star" class="p-4 bg-gray-700 rounded-full mb-5">
          <h1 class="text-white text-3xl mb-3 font-medium">How did we do?</h1>
          <p class=" text-gray-400 mb-5">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div class=" flex w-full items-center justify-between mb-5">
            <div v-for="rate in rates" :key="rate" @click="getRate(rate)">
              <div class="box-rate rounded-full cursor-pointer h-10 w-10 bg-gray-500 relative"> 
                <p class="text-lg absolute text-white font-medium">{{ rate }}</p>
              </div>
            </div>
          </div>
          <button class="btn text-white font-medium tracking-widest bg-orange-400 w-full rounded-3xl py-3" @click="displayRate">SUBMIT</button>
        </div>
        <div v-else>
          <img src="../assets/images/illustration-thank-you.svg" alt="Thank you" class="mx-auto mb-5">
          <p class="font-medium text-orange-400 px-2 py-1 rounded-2xl bg-gray-600 w-max mx-auto">You selected {{ rateData }} out of 5</p>
          <h1 class="text-2xl font-bold text-white my-5 text-center">Thank you!</h1>
          <p class="text-gray-400 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
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
      console.log(rateData.value)
      defaultData.value = false
    }

    return { rates, rateData, getRate, rateData, displayRate, defaultData }
  }
}
</script>

<style scoped>
  p.text-lg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
