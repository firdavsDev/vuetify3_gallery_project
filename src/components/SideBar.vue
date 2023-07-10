<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
      <v-divider></v-divider>
    </v-list>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-image"
        title="My Images"
        value="my_images"
        @click="togleDrawer"
      ></v-list-item>

      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Shared with me"
        value="shared"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "SideBar",

  methods: {
    togleDrawer() {
      console.log("togleDrawer");
      this.$store.dispatch("toggleDrawer");
    },
  },
};
</script>
