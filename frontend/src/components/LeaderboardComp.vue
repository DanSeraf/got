<template>
  <v-container>
    <v-layout class="align-center justify-center" style="margin-bottom: 2%;">
      <v-flex xs12 sm6 md5 lg4>
        <v-text-field solo v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout onresize="onResize()" class="justify-center">

      <v-data-table
      :items="leaderboard"
      class="elevation-1"
      :headers="headers"
      :search="search"
      hide-actions
      :class="{mobile: isMobile}"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.rank }}</td>
          <td class="text-xs-left">{{ props.item.username }}</td>
          <td class="text-xs-left">{{ props.item.points }}</td>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>

<script>
  import {HTTP} from '../http-common.js'

  export default {
    data: () => ({
        isMobile: false,
        search:'',
        headers: [
          {
          text:'#Rank',
            value:'rank',
            align:'left'
        },
          {
            text: 'Users',
            align: 'left',
            value: 'username'

          },
          {text: 'Score', align: 'left', value:'points'},

        ],
        leaderboard: [],
      }),

    mounted() {
      HTTP.get('/leaderboard')
        .then(response => {
          let res=response.data.sort((a,b) => (a.points <= b.points) ? 1 : -1)
          let i=1
          for (let el in res){
            res[el]['rank']=i++
          }
          this.leaderboard=res;

        })
    },
    methods:{
      onResize() {
        if (window.innerWidth < 769)
          this.isMobile = true;
        else
          this.isMobile = false;
      },
    }

  }



</script>

<style scoped>


  @media screen and (max-width: 768px) {
    .mobile table.v-table tr {
      max-width: 100%;
      position: relative;
      display: block;
    }

    .mobile table.v-table tr:nth-child(odd) {
      border-left: 6px solid deeppink;
    }

    .mobile table.v-table tr:nth-child(even) {
      border-left: 6px solid cyan;
    }

    .mobile table.v-table tr td {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      height: auto;
      padding: 10px;
    }

    .mobile table.v-table tr td ul li:before {
      content: attr(data-label);
      padding-right: .5em;
      text-align: left;
      display: block;
      color: #999;

    }

    .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
      background: transparent;
    }

  }



</style>
