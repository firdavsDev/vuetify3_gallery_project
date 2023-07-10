<template>
  <v-app>
    <!-- Sidebar -->
    <SideBar />
    <v-main>
      <!-- Cards -->
      <ImageGallery />
    </v-main>
  </v-app>
</template>
<script>
import SideBar from "./components/SideBar.vue";
import ImageGallery from "./components/ImageGallery.vue";
export default {
  name: "App",
  components: {
    SideBar,
    ImageGallery,
  },
};
</script>
