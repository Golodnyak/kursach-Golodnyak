<template>
  <div class="containe container-add-title">
    <div class="title">
      <h2>Ім`я</h2>
      <input v-model="article.name" type="text" :class="{ 'border-danger': $v.article.name.$invalid }"
        class="input-title" placeholder="name">
    </div>
    <div class="title">
      <h2>Призвіще</h2>
      <input v-model="article.sureName" type="text" :class="{ 'border-danger': $v.article.sureName.$invalid }"
        class="input-title" placeholder="surename">
    </div>
    <div class="body">
      <h2>Ваш email</h2>
      <input v-model="article.email" type="email" :class="{ 'border-danger': $v.article.email.$invalid }"
        class="input-title" placeholder="Email">
    </div>
    <div class="body">
      <h2>Опис проблеми</h2>
      <textarea v-model="article.problem" :class="{ 'border-danger': $v.article.problem.$invalid }"
        class="form-control body-text" aria-label="With textarea" placeholder="problem"></textarea>
    </div>
    <br>
    <button :disabled="$v.article.$invalid" class="button-add-title btn btn-info" @click="addPost"> Відпривити</button>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  name: 'support',
  data() {
    return {
      article: {
        name: '',
        sureName: '',
        email: '',
        problem: ''
      }
    }
  },
  methods: {
    ...mapActions(['newPost']),
    addPost() {
      this.newPost(this.article);
    }
  },
  validations: {
    article: {
      name: { required },
      sureName: { required },
      email: { required },
      problem: { required }
    }
  }
}
</script>
<style>
.containe {
  padding: 10px;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 20px;
  width: 40%;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 5px rgb(182, 182, 182);
  ;
}

.input-title {
  width: 100%;
  border-radius: 10px;
  height: 35px;
  margin-bottom: 10px;
}

@media (max-width: 992px) {
  .containe {
    width: 70%;
  }

}
</style>