<template>
  <v-app>
    <v-main :class="value ? 'white--text' : 'text--darken-3'" :style="value ? 'background:#17202A' : 'background: white'" class="py-5" >
      <v-layout justify-space-between mt-3 px-5 wrap>
            <div>
              <p style="font-size: 30px" class="mb-1 font-weight-bold">Social Media Dashboard</p>
              <p style="font-size: 14px">Total Followers: 23.004</p>
            </div>
            <div class="d-flex align-center">
              <p class="mb-0 font-weight-bold">Dark Mode</p>
            
              <v-switch
                class="ml-5"
                color="white"
                v-model="value"
              ></v-switch>
            </div>
      </v-layout>
      <v-layout wrap class="d-flex justify-space-around">
        <CardSocial :item="item" v-for="(item, index) in items" :key="index"/>
      </v-layout>
      <v-layout justify-space-between mt-5 px-5 wrap >
        <p style="font-size: 30px" class="mb-1 font-weight-bold">Overview - Today</p>
      </v-layout>
      <v-layout class="d-flex justify-space-around" wrap>
        <CardOverviewVue :overview="overview" v-for="(overview, index) in overviews" :key="index"/>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import CardSocial from './components/CardSocial.vue';
import CardOverviewVue from './components/CardOverview.vue';

export default {
  name: 'App',

  components: {
    CardSocial,
    CardOverviewVue
  },

  setup(props) {
    const items = [
      {
        views: '1987',
        nickname: '@ChristianCode99',
        subtitle:'FOLLOWERS',
        icon: 'facebook',
        followers: 12,
        up: true,
        color:'blue'
      },
      {
        views: '1044',
        nickname: '@christianCode99',
        subtitle:'FOLLOWERS',
        icon: 'twitter',
        followers: 90,
        up: true,
        color:'#5DADE2'
      },
      {
        views: '11k',
        nickname: '@christianCode99',
        subtitle:'FOLLOWERS',
        url:true,
        icon: 'instagram',
        followers: 1000,
        up: true,
        color:'yellow'
      },
      {
        views: '8239',
        nickname: 'Christian_code',
        subtitle:'SUBCRIBERS',
        icon: 'youtube',
        followers: 144,
        up: false,
        color:'red'
      }
    ]
    
    const overviews = [
      {
        title: 'Page Views',
        icon: 'facebook',
        number: 87,
        up: true,
        porcent: 3,
        color: 'blue'
      },
      {
        title: 'Likes',
        icon: 'facebook',
        number: 52,
        up: false,
        porcent: 2,
        color: 'blue'
      },
      {
        title: 'Likes',
        number: 5462,
        url: true,
        up: true,
        porcent:2257,
      },
      {
        title: 'Page Views',
        number: '52k',
        url: true,
        up: true,
        porcent: 1375
      },
      {
        title: 'Retweets',
        icon: 'twitter',
        number: '117',
        up: true,
        porcent: 302,
        color:'#5DADE2'
      },
      {
        title: 'Likes',
        icon: 'twitter',
        number: 507,
        up: true,
        porcent: 553,
        color:'#5DADE2'
      },
      {
        title: 'Likes',
        icon: 'youtube',
        number: 107,
        up: false,
        porcent: 10,
        color:'red'
      },
      {
        title: 'Total Views',
        icon: 'youtube',
        number: 1407,
        up: false,
        porcent: 12,
        color:'red'
      },
    ]
    var value = false;

    return {
      items,
      value,
      overviews
    }
  }
};
</script>

<style>
  @import url('https://fonts.google.com/specimen/Inter');

  .v-main__wrap{
    font-family:'Inter', sans-serif;;
  }
  body::-webkit-scrollbar{
    display: none;
  }
</style>
