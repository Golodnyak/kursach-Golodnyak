
<template>
  <div class="center examplex">
    <vs-navbar center-collapsed v-model="active" style="background:#A3E2FB">
    


      <vs-navbar-group>
        Виставки

        <template #items>

          <vs-navbar-item to="/" :active="active == 'ukroboronprom'" id="ukroboronprom">
            ЗБРОЯ ТА БЕЗПЕКА 2021
          </vs-navbar-item>
          <vs-navbar-item to="/aviasvit" :active="active == 'aviasvit'" id="aviasvit">
            Авіасвіт 2018
          </vs-navbar-item>
          <vs-navbar-item to="/khreshchatyk" :active="active == 'khreshchatyk'" id="khreshchatyk">
            Виставка на хрещатику 2022
          </vs-navbar-item>
        </template>
      </vs-navbar-group>


      <vs-navbar-item to="/contact" :active="active == 'contact'" id="contact">
        Підтримка
      </vs-navbar-item>
      <vs-navbar-item to="/supports" :active="active == 'support'" id="support">
        Заявки на підтримку
      </vs-navbar-item>

    </vs-navbar>

  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'ukroboronprom'
  })
}
</script>

<style scoped>
.nav-bar {
  justify-content: start;
  align-items: center;
  background-color: rgb(51, 68, 38);


}

.nav-bar-items {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.nav-bar-items-top {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

a {
  color: rgb(255, 255, 255);
  padding: 10px 0;
}

hr {
  background-color: red;
  margin-top: 2px;
}

.color {
  color: rgb(234, 234, 234);
}

.router-link-active {
  color: dimgray;
  text-decoration: none;
}

.nav-bar-logo img {
  height: 200px;
  width: auto;
  padding: 10px 5px 30px 0;
}
</style>