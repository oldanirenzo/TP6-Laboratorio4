<template>
  <div>
    <div>
      <b-card no-body class="overflow-hidden" border-variant="dark" style="max-width: 1920px;">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img
              :src="'/images/'+instrumentoEncontrado.imagen"
              :alt="instrumentoEncontrado.descripcion"
              class="rounded-0"
            ></b-card-img>
            <br />
            <b>Descripcion:</b>
            <br />
            {{instrumentoEncontrado.descripcion}}
          </b-col>
          <b-col md="7">
            <br />

            <b-card-text align="left">{{instrumentoEncontrado.cantidadVendida}} vendidos</b-card-text>
            <b-card-body :title="instrumentoEncontrado.instrumento" align="left">
              <b-card-text align="left">
                <br />
                <h1>$ {{instrumentoEncontrado.precio}}</h1>
                <br />
                <h5>Marca: {{instrumentoEncontrado.marca}}</h5>
                <br />
                <h5>Modelo: {{instrumentoEncontrado.modelo}}</h5>
                <br />
                <br />
                <h4>Costo envio:</h4>
                <br />
                <h4 v-if="instrumentoEncontrado.costoEnvio == 'G'" class="text-success">
                  <img src="/images/camion.png" />Envio gratis
                </h4>
                <h4 v-else>
                  <b-card-text
                    class="text-warning"
                  >Interior de Argentina: ${{instrumentoEncontrado.costoEnvio}}</b-card-text>
                </h4>
                <br />
              </b-card-text>
              <b-col lg="4" class="pb-2">
                <b-button href="/productos" size="lg">Volver</b-button>
              </b-col>
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
  name: "Detalle",
  components: {},
  mounted() {
    this.getInstrumendoxId();
  },
  data() {
    return {
      instrumentoEncontrado: []
    };
  },
  methods: {
    async getInstrumendoxId() {
      const parametroId = this.$route.params.id;
      const res = await fetch("/data/instrumentos.json");
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentoEncontrado = await resJson.instrumentos.find(
        instrumento => instrumento.id === parametroId
      );
      console.log(this.instrumentoEncontrado);
    }
  }
};
</script>