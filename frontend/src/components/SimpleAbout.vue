<template>
  <v-container fluid class="my-5">
    <v-flex xs12 sm6 md5 lg3>
      <h3 style="position: absolute; left: 15%; right: 15%;">If you enjoyed our FantaMorto of Game Of Thrones and you want to offer us a coffe, here the donate button :)</h3>

      <div style="position: absolute; top:40%; left:35%; right:35%;">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="YQ85F57SV8WBS" />
          <input type="image" src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_IT/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </v-flex>
  </v-container>
</template>
