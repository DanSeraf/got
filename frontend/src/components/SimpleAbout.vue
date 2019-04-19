<template>
  <v-container fluid class="my-5">
    <v-layout class="justify-center">
      <v-flex xs12 sm6 md5 lg3 s6 >
        <h3 style="position: absolute; left: 15%; right: 15%;">If you enjoyed our FantaMorto of Game Of Thrones and you want to offer us a coffe, here the donate button :)</h3>
        <br>
        <br>
        <br>
        <br>
        <br>


        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="SNQMM64HHCRLW" />
          <input type="image" src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_IT/i/scr/pixel.gif" width="1" height="1" />
        </form>

      </v-flex>
    </v-layout>
  </v-container>
</template>
