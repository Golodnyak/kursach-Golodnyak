<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/fhav202101.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/fhav202102.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/fhav202111.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/fhav202113.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/fhav202117.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/fhav202119.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/fhav202120.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/fhav202128.jpg" class="d-block w-100" alt="...">
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>



<script>

export default {

}



</script>

<style>
.carousel {

  margin: 30px auto;
  width: 80%;

}

.d-block {
  width: 100%;
}

@media (max-width: 992px) {
  .carousel {
    width: 100%;
  }


}
</style>