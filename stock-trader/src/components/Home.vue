<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4"> Negocie e Consulte suas Ações </h1>
    <v-sheet :elevation="6" class="pa-2 blue darken-1">
      <v-icon class="white--text mr-3"> info </v-icon>
      <span class="headline white--text font-weight"> Você pode Salvar & Carregar os Dados </span>
    </v-sheet>
    <v-sheet :elevation="6" class="pa-2 success darken-1 mt-3">
      <v-icon class="white--text mr-3"> info </v-icon>
      <span class="headline white--text font-weight"> 
        Clique em 'Finalizar Dia' para iniciar um novo dia!
      </span>
    </v-sheet>
    <v-divider class="my-4" />
    <p class="display-1"><strong>Seu Saldo: {{ funds  | currency}}</strong></p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['funds'])
  }
}
</script>

<style>

</style>