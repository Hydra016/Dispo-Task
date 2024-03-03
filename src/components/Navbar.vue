<template>
  <div class="flex items-center justify-between p-10 sm:p-0">
    <div class="flex items-center  space-x-7 md:px-10">
      <a href="#" class="font-semibold text-4xl md:text-5xl tracking-tighter text-primary-text-color">Dispo</a>
      <div class="hidden lg:flex font-semibold text-primary-link-color flex items-center">
        <span class="mr-2">EUR</span>
        <img class="item-img" src="../../public/currency.png" />
      </div>
      <div class="hidden lg:flex font-semibold text-primary-link-color flex items-center">
        <span class="mr-2">English</span>
        <img class="item-img" src="../../public/globe.png" />
      </div>
    </div>
    <div>
      <img class="lg:hidden item-img" src="../../public/menu.png" />
    </div>
    <div class="hidden lg:block font-semibold flex justify-end items-center md:px-10">
      <a class="mr-5 active" href="#">Transport</a>
      <a class="mr-5" href="#">Tours</a>
      <a class="mr-5" href="#">Partners</a>
      <a class="mr-5" href="#">About B2B</a>
      <a class="mr-5" href="#">Contact</a>
      <a class="mr-5 bg-primary-text-color px-5 py-2 text-primary-color rounded-full" href="#">Book today</a>
      <a href="#">Log in/ Sign up</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
.container {
  border: 1px solid red;
}

.container-2 {
  border: 1px solid blue;
}

.active {
  color: #5992ec;
}
</style>
