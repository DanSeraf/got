<template>
    <v-container fluid class="my-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 md5 lg3
              v-for="item in items"
              :key="item.name"
      >
        <v-hover>
          <v-card flat class="text-xs-center ma-3" slot-scope="{ hover }" :class="`elevation-${hover ? 24 : 1}`" color="grey lighten-2">
            <v-responsive class="pt-0">
              <v-img :src="item.pic" style="height: 350px;"></v-img>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ item.name }}</div>
            </v-card-text>
            <v-btn color="success" round="">Live</v-btn>
            or
            <v-btn color="error" round="">Die</v-btn>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        data: () => ({
            items: [
              { name: 'Jon Snow', pic: 'https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg' },
              { name: 'Daenerys Targaryen', pic: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/36/1504608500-daenerys.jpg?crop=0.665xw:1.00xh;0.0950xw,0&resize=768:*' },
              { name: 'Tyrion Lannister', pic: 'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/6d934ea5-bb8a-4894-81a6-4c33a91bbdaf/dinklage-parla-del-finale-di-tyrion-lannister-maxw-1280.jpg' },
              { name: 'Cersei Lannister', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/b/be/CerseiLannisterQOTAATFMSeason8.PNG/revision/latest?cb=20190207113624' },
              { name: 'Sansa Stark', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f3/Sansa_S8.jpg/revision/latest?cb=20190206213553' },
              { name: 'Arya Stark', pic: 'https://vignette.wikia.nocookie.net/iltronodispade/images/f/f2/Arya_stark_s7.jpg/revision/latest?cb=20170810071512&path-prefix=it' },
              { name: 'Jamie Lannister', pic: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/26/10/game-of-thrones-jaime-lannister.jpg' },
              { name: 'Bran Stark', pic: 'http://cdn.bestmovie.it/wp-content/uploads/2019/01/il-trono-di-spade-4-696x392.jpg' },
              { name: 'The Knight King', pic: 'https://www.givamie.com/wp-content/uploads/2017/08/02-game-of-throne-wights-1.w1200.h630.jpg' },
              { name: 'Theon Greyjoy', pic: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Theon_Greyjoy-Alfie_Allen.jpg/220px-Theon_Greyjoy-Alfie_Allen.jpg' },
              { name: 'Viserion', pic: 'https://www.lascimmiapensa.com/wp-content/uploads/2018/08/ice-dragon-1-970.jpg' },
              { name: 'Rhaegal', pic: 'https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2019/04/09/rhaegal-dragons-game-thrones-season-8.png' },
              { name: 'Drogon', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/e/e5/Drogon_season_finale_7.jpg/revision/latest/scale-to-width-down/2000?cb=20170828060625' },
              { name: 'Tormund', pic: 'https://hips.hearstapps.com/ell.h-cdn.co/assets/17/34/1503503945-syn-elm-1503486795-kristofer-hivju-as-tormund-got-1.jpg?crop=1.00xw:0.669xh;0,0&resize=480:*' },
              { name: 'Samwell Tarly', pic:'https://vignette.wikia.nocookie.net/gameofthrones/images/3/30/Samwell_Season_8_Cropped.PNG/revision/latest?cb=20190207112410' },
              { name: 'Sondor Clegane', pic:'https://vignette.wikia.nocookie.net/gameofthrones/images/b/bc/Sandor_Clegane_Season_7_Promo_Image.PNG/revision/latest?cb=20170828063713' },
              { name: 'Bronn', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/9/99/Bronn_Dragonpit.jpg/revision/latest?cb=20170903202847' },
              { name: 'Brienne Of Tarth', pic: 'https://vignette.wikia.nocookie.net/iltronodispade/images/b/b4/Brienne_profilo.jpg/revision/latest?cb=20160716095226&path-prefix=it' },
              { name: 'Podrick Payne', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/4/48/GOT_Season_7_15.jpg/revision/latest/scale-to-width-down/2000?cb=20170824224117' },
              { name: 'Euron Greyjoy', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/f/fc/Euron-Profile.PNG/revision/latest?cb=20170916200257' },
              { name: 'Gregor Clegane', pic: 'https://pbs.twimg.com/profile_images/923658948288401408/f3ijdF-F.jpg' },
              { name: 'Gendry Waters', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/b/be/Profile-Gendry.png/revision/latest?cb=20170814055524' },
              { name: 'Melisandre', pic: 'https://movieplayer.net-cdn.it/t/images/2016/03/14/game-of-thrones-melisandre_jpg_750x400_crop_q85.jpg' },
              { name: 'Jorah Mormont', pic: 'https://i.pinimg.com/originals/a6/2e/c6/a62ec675f2f1d20a7b7e68fc847ef5d9.jpg' },
              { name: 'Varys', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Varys_Season_8.jpg/revision/latest?cb=20190206212952' },
              { name: 'Gilly', pic: 'https://assets-jpcust.jwpsrv.com/thumbnails/xc0ourww-720.jpg' },
              { name: 'Missandei', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/0/0d/Profile-Missandei.PNG/revision/latest/scale-to-width-down/314?cb=20170818044646' },
              { name: 'Jaqen H ghar', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/d/da/The_Door_Jaqen_infobox.jpg/revision/latest?cb=20160808073200' },
              { name: 'Davos Seaworth', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c9/Davos_Season_8.jpg/revision/latest?cb=20190206213729' },
              { name: 'Grey worm', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/0/0c/Grey_Worm_Longer.jpg/revision/latest?cb=20170728152422' },
              { name: 'Beric Dondarrion', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/ab/BericDondarrionBeyondtheWallRhllorSpeech.png/revision/latest?cb=20190215205301' },
              { name: 'Yara Greyjoy', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a8/Game_of_thrones_6x5_yara_promo.jpg/revision/latest?cb=20160808022737' },
              { name: 'Lyanna Mormont', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/9/9e/Dragonstone_2-0.jpg/revision/latest?cb=20170712215831' },
              { name: 'Eddison Tollett', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/7/75/Edd_At_The_Wall.PNG/revision/latest?cb=20190415204333' },
              { name: 'Qyburn', pic: 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/19/Profile-Qyburn.png/revision/latest?cb=20170819022259' },

            ]
        }),
    }
</script>