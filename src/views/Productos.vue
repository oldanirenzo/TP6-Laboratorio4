<template>
  <div>
    <div 
    v-for="instrumento in instrumentosData" 
    :key="instrumento.id">
      <instrumento-item :instrumentoParam="instrumento"></instrumento-item>
    </div>
  </div>
</template>



<script>
import Tarjeta from "@/components/Tarjeta.vue";

export default {
  name: "Productos",
  components: {
    "instrumento-item": Tarjeta
  },
  mounted() {
    this.getTarjetas();
  },
  data() {
    return {
      instrumentosData: []
    };
  },
  methods: {
    async getTarjetas() {
      const datos = await fetch("/data/instrumentos.json")
        const resJson = await datos.json();
        console.log(resJson)
        this.instrumentosData = resJson.instrumentos;
    }
  }
};
</script>