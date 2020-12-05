<template>
    <v-card style="width:300px" class="px-2 rounded-lg my-3"  elevation="5"> 
        <v-card-text class="d-flex">
            <p class="mb-0">{{overview.title}}</p>
            <v-spacer></v-spacer>
            <img v-if="overview.url" src="@/assets/icon-instagram.svg" alt="" height="24px" width="24px">
            <v-icon v-else :color="overview.color">mdi-{{overview.icon}}</v-icon>
        </v-card-text>
        <v-card-text class="d-flex">
            <p class="display-1 font-weight-bold mb-0">{{overview.number}}</p>
            <v-spacer></v-spacer>
            <div class="green-text d-flex align-center">
                <img v-if="overview.up" src="@/assets/icon-up.svg" alt="" height="10px" width="10px">
                <img v-else src="@/assets/icon-down.svg" alt="" height="10px" width="10px">
                <p :class="overview.up ? 'green--text' : 'red--text'" class="ml-1 mb-0">{{overview.porcent}}%</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ['overview']
}
</script>

<style>

</style>