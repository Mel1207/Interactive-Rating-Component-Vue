<template>
  <div class="main"> 
    <div class="container">
      <div class="main-box">
        <div v-if="defaultData">
          <img src="../assets/images/icon-star.svg" alt="Icon star" class="star-icon">
          <h1 class="main-title">How did we do?</h1>
          <p class="card-text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div class="container-rates">
            <div v-for="rate in rates" :key="rate" @click="rate.isActive = true, getRate(rate.rate)" :class="{ active: rate.isActive }" class="box-rate">
              {{ rate.rate }}
            </div>
          </div>
          <button class="btn" @click="displayRate">SUBMIT</button>
        </div>
        <div v-else>
          <img src="../assets/images/illustration-thank-you.svg" alt="Thank you" class="mx-auto mb-10 mt-3">
          <p class="selected-rate">You selected {{ rateData }} out of 5</p>
          <h1 class="secondary-title">Thank you!</h1>
          <p class="card-text text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
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
    let rates = ref([
      { rate: 1, isActive: false  },
      { rate: 2, isActive: false  },
      { rate: 3, isActive: false  },
      { rate: 4, isActive: false  },
      { rate: 5, isActive: false  },
    
    ])
    let defaultData = ref(true)
    let rateData = ref(0)

    const getRate = (id) => {
      console.log(`selected rate is ${id}`)
      rateData.value = id
    }

    const displayRate = () => {
      // console.log(rateData.value)
      defaultData.value = false
    }

    return { rates, rateData, getRate, rateData, displayRate, defaultData }
  }
}
</script>
