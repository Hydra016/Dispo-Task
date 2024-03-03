<template>
  <div class="w-full h-full bg-gray-200 p-0 sm:py-10 sm:px-10 lg:py-15 lg:px-20">
    <Navbar />
    <div class="bg-primary-color relative mt-0 sm:mt-40 sm:px-20 sm:rounded-3xl bg-container">
      <SubHeader />
      <div class="flex justify-center">
        <MainContainer />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import SubHeader from './components/SubHeader';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    SubHeader,
    MainContainer,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Poppins';
  background-color: red;
}

.bg-container {
  height: 900px;
}


</style>
