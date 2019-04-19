<template>
  <v-data-table
      :items="desserts"
      class="elevation-1"
      hide-actions
      :headers="headers">

    <template v-slot:items="props">
      <td class="text-xl-right">{{ props.item.name }}</td>
      <td class="text-xl-right">{{ props.item.score }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {


    data () {
      return {
        headers: [
          {
            text: 'Users',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {text: 'Score', value: 'score'},

        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            score: 159,

          },
        ]
      }
    },
  }


</script>

<style scoped>

</style>