<template>
  <v-container>
     <p>gressino</p>

    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg2
              v-for="movie in movies"
              :key="movie.id">
        <v-hover>
          <v-card
              flat
              class="text-xs-center ma-3"
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 24 : 1}`"
              color="grey lighten-4"
          >
            <v-responsive class="pt-0">
              <v-img :src="movie.poster"></v-img>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ movie.title }}</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
    import {HTTP} from '../http-common.js'

    export default {
        data: () => ({
            movies: null,
            m_total: Number,


        }),
        mounted() {

            HTTP.get('/movies/id/15440')
                .then(response => {
                    let raw_movies = response['data']['movies']
                    let movies = []
                    raw_movies.forEach(function (entry) {
                        const movie = {"id": entry[0], "title": entry[1], "year": entry[2], "poster": entry[3]}
                        movies.push(movie)
                    });
                    this.movies = movies.slice(0, 50)
                    this.m_total = movies.length
                })
                .catch(e => (window.console.log('error getting movies id: ' + e)))
        }
    }
</script>
