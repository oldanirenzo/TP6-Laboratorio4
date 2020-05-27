<template>
  <div>
    <div>
      <b-card no-body class="overflow-hidden" border-variant="dark" style="max-width: 1920px;">
        <b-row no-gutters>
          <b-col md="2">
            <a :href="'/detalle/' + instrumentoParam.id">
            <b-card-img
              :src="'/images/'+instrumentoParam.imagen"
              :alt="instrumentoParam.descripcion"
              class="rounded-0"
            ></b-card-img> </a>
          </b-col>
          <b-col md="7">
            <b-card-body :title="instrumentoParam.instrumento">
              <b-card-text>
                <br />
                <h1>$ {{instrumentoParam.precio}}</h1>
                <br />
                <h4 v-if="instrumentoParam.costoEnvio == 'G'" class="text-success">
                  <img src="/images/camion.png" />Envio gratis a todo el pais
                </h4>
                <h4 v-else>
                  <b-card-text
                    class="text-warning"
                  >Costo de Envio Interior de Argentina: ${{instrumentoParam.costoEnvio}}</b-card-text>
                </h4>
                <br />
                {{instrumentoParam.cantidadVendida}} vendidos
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <br />
    </div>
  </div>
</template>



<script>
export default {
  props: ["instrumentoParam"]
};
</script>