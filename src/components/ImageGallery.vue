<template lang="">
  <v-card class="mx-5 my-5 h-screen">
    <!-- row -->
    <v-row>
      <!-- col -->
      <v-col cols="12" md="1" v-for="n in 200" :key="n" sm="3">
        <!-- card -->
        <v-card>
          <!-- img -->
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${
              display_is_grey() ? '&grayscale' : ''
            }`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            cover
            class="bg-grey-lighten-2"
            @click="
              copy_to_clipboard(
                `https://picsum.photos/500/300?image=${n * 5 + 10}${
                  display_is_grey() ? '&grayscale' : ''
                }`
              )
            "
          >
            <!-- placeholder -->
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <!-- /img -->
        </v-card>
        <!-- /card -->
      </v-col>
      <!-- /col -->
    </v-row>
    <!-- /row -->
  </v-card>
</template>
<script>
export default {
  name: "ImageGallery",

  methods: {
    display_is_grey() {
      return this.$store.getters.is_grey;
    },
    copy_to_clipboard(url) {
      console.log("copy_to_clipboard");
      navigator.clipboard.writeText(url);
    },
  },
};
</script>
<style lang=""></style>
