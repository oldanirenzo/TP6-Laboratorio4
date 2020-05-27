<template>
  <div>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="'/images/'+instrumentoParam.imagen"
              :alt="instrumentoParam.descripcion"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="instrumentoParam.instrumento">
              <b-card-text>
                $ {{instrumentoParam.precio}}
                <br />
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>