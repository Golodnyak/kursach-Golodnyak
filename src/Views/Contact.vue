<template>
  <div class="contact">
    <br><br>
    <p>

  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    ЗБРОЯ ТА БЕЗПЕКА
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
   <p>Міжнародний виставковий центр
тел./факс: +38 (044) 201‑11‑63</p> 
e‑mail: zbroya@iec‑expo.com.ua  </div>
</div>
<p>

<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
  АВІАСВІТ-2018</button>
</p>
<div class="collapse" id="collapseExample2">
<div class="card card-body">
  <p>Україна, 02002, Київ, Броварський пр-т, 15
тел./факс: (044) 201-11-61</p>

  <p>e-mail: reklama@iec-expo.com.ua, 
www.iec-expo.com.ua, 
www.mvc-expo.com.ua</p>
</div>
</div>

<h1>Форма подання заяви на підтримку</h1>
<support/>

  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import support from '../components/support.vue'
export default {
  name: 'contact',
  components:{
   support,
  
  },
  computed: {

...mapGetters(['allPosts', 'allCard']),

},
}
</script>

<style scoped>
h1{
  margin: 50px 0;
}
.btn{
  width: 100%;
  text-align: left;
}
.contact{
  margin-top: 30px;
}
</style>