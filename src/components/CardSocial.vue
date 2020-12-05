<template>
    <v-card :style="`border-top: 5px solid ${item.color} ; width:260px`" elevation="5" class="rounded-lg my-4">
        <v-card-text class="d-flex justify-center mt-3">
            <v-icon v-if="!item.url" :color="item.color">mdi-{{item.icon}}</v-icon>
            <img v-else src="@/assets/icon-instagram.svg" height="24px" width="24px" alt="">
            <p class="ml-1 mb-0">{{item.nickname}}</p>
        </v-card-text>
        <v-card-text class="text-center">
            <p class="font-weight-bold display-2">{{item.views}}</p>
            <p class="font-weight-light" style="font-size:14px">{{item.subtitle}}</p>
            <div class="d-flex justify-center align-center">
                <img v-if="item.up" src="../assets/icon-up.svg" height="10px" width="10px" alt="">
                <img v-else src="../assets/icon-down.svg" height="10px" width="10px" alt="">
                <p :class="item.up ? 'green--text': 'red--text'" class="font-weight-bold ml-2 mt-0 mb-0">{{item.followers}} Today</p>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    props:['item'],
    setup() {
    }
}
</script>
