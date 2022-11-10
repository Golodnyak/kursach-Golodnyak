<template>
    <div class="content" data-bs-spy="scroll">
        <div class="row">
            <div class="col-sm-6" style="margin: 0 auto">
                <div class="card" v-for="post in allPosts" :key="post.key">
                    <div class="card-body">
                        <h5 class="card-title">Ім`я: {{ post.name }}</h5>
                        <h5 class="card-title">Призвіще: {{ post.sureName }}</h5>
                        <h5 class="card-title">Почта: {{ post.email }}</h5>
                        <p class="card-text">
                        <h5>Опис проблеми: </h5> {{ post.problem }}</p>
                        <button class="btn btn-primary" @click="Delete(post.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(['Delete'])
    },
    computed: {
        ...mapGetters(['allPosts']),
    }
}
</script>
<style>
.content {
    margin: 80px auto;
}

.card {
    margin: 30px auto;
}
</style>