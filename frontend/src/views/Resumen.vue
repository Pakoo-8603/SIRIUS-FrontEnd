<template>
  <v-container>
    <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2 text-center">
      <v-col class="text-white font-weight-bold" cols="12">
        <h2 class="text-h5">Resumen autodiagnóstico</h2>
      </v-col>
    </v-row>
  </v-container>
  <v-card class="custom-card w-75">
    <v-table>
      <thead>
        <tr class="rounded bg-blue-lighten-2">
          <th class="text-center font-weight-bold text-white">Indicadores</th>
          <th class="text-center font-weight-bold text-white">Fortalezas</th>
          <th class="text-center font-weight-bold text-white">Debilidades</th>
          <th class="text-center font-weight-bold text-white" colspan="3">
            Totales
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(n, index) in 4">
          <td>
            <span v-if="index === 0" style="flex: 1">En elaboración</span>
            <span v-else-if="index === 1" style="flex: 1">En revisión </span>
            <span v-else-if="index === 2" style="flex: 1">En aprobación</span>
            <span v-else-if="index === 3" style="flex: 1">Aprobados</span>
            <!-- <span class="ml-2">{{ IndicadoresResumen[index].count || 0}}</span> -->
            <!-- <span class="ml-2">{{ IndicadoresResumen[index] && IndicadoresResumen[index].count !== null && IndicadoresResumen[index].count !== undefined ? IndicadoresResumen[index].count : 0 }}</span> -->
            <span class="ml-2">
              {{ IndicadoresResumen[index]?.count || 0 }}
            </span>
          </td>
          <td>
            <span v-if="index === 0" style="flex: 1">En elaboración</span>
            <span v-else-if="index === 1" style="flex: 1">En revisión</span>
            <span v-else-if="index === 2" style="flex: 1">En aprobación</span>
            <span v-else-if="index === 3" style="flex: 1">Aprobados</span>
            <!-- <span class="ml-2">{{ FortalezasResumen[index].countF || 0}}</span> -->
            <!-- <span class="ml-2">{{ FortalezasResumen[index] && FortalezasResumen[index].countF !== null && FortalezasResumen[index].countF !== undefined ? FortalezasResumen[index].countF : 0 }}</span> -->
            <span class="ml-2">
              {{ FortalezasResumen[index]?.countF || 0 }}
            </span>
          </td>
          <td>
            <span v-if="index === 0" style="flex: 1">En elaboración</span>
            <span v-else-if="index === 1" style="flex: 1">En revisión </span>
            <span v-else-if="index === 2" style="flex: 1">En aprobación</span>
            <span v-else-if="index === 3" style="flex: 1">Aprobados</span>
            <!-- <span class="ml-2">{{ DebilidadesResumen[index].countD || 0}}</span> -->
            <!-- <span class="ml-2">{{ DebilidadesResumen[index] && DebilidadesResumen[index].countD !== null && DebilidadesResumen[index].countD !== undefined ? DebilidadesResumen[index].countD : 0 }}</span> -->
            <span class="ml-2">
              {{ DebilidadesResumen[index]?.countD || 0 }}
            </span>
          </td>
          <td>
            <span v-if="index === 0" style="flex: 1">En elaboración</span>
            <span v-else-if="index === 1" style="flex: 1">En revisión </span>
            <span v-else-if="index === 2" style="flex: 1">En aprobación</span>
            <span v-else-if="index === 3" style="flex: 1">Aprobados</span>
            <!-- <span class="ml-2">{{ TotalesVertical[index]}}</span> -->
            <span class="ml-2">{{
              TotalesVertical[index] &&
              TotalesVertical[index] !== null &&
              TotalesVertical[index] !== undefined
                ? TotalesVertical[index]
                : 0
            }}</span>
          </td>
          <td>
            <div class="semaphore-container2 pb-2 pt-2" style="width: 30px">
              <v-icon :style="greenLightStyle(index)">mdi-circle</v-icon>
              <v-icon :style="yellowLightStyle(index)">mdi-circle</v-icon>
              <v-icon :style="redLightStyle(index)">mdi-circle</v-icon>
            </div>
          </td>
          <td>
            <v-progress-linear
              :model-value="
                (TotalesVertical[index] /
                  (TotalesVertical[0] +
                    TotalesVertical[1] +
                    TotalesVertical[2] +
                    TotalesVertical[3])) *
                100
              "
              color="blue"
              height="12"
              striped
              style="width: 200px"
            >
              {{
                parseInt(
                  (TotalesVertical[index] /
                    (TotalesVertical[0] +
                      TotalesVertical[1] +
                      TotalesVertical[2] +
                      TotalesVertical[3])) *
                    100
                )
              }}
              %
            </v-progress-linear>
          </td>
        </tr>
        <tr>
          <td>
            <span>Total: {{ IndicadoresTotal }}</span>
          </td>
          <td>
            <span>Total: {{ FortalezasTotal }}</span>
          </td>
          <td>
            <span>Total: {{ DebilidadesTotal }}</span>
          </td>
          <td>
            <span
              >Total:
              {{
                TotalesVertical[0] +
                TotalesVertical[1] +
                TotalesVertical[2] +
                TotalesVertical[3]
              }}</span
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>

  <v-container>
    <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2 text-center">
      <v-col class="text-white font-weight-bold" cols="12">
        <h2 class="text-h5">Resumen de indicadores</h2>
      </v-col>
    </v-row>
  </v-container>

  <v-card class="custom-card2">
    <v-table>
      <thead>
        <tr class="rounded bg-blue-lighten-2">
          <th
            class="text-center font-weight-bold c1 text-white"
            style="width: 10%"
          >
            ID_Indicador
          </th>
          <th
            class="text-center font-weight-bold c1 text-white"
            style="width: 30%"
          >
            Indicador
          </th>
          <th class="text-center font-weight-bold c1 text-white">
            %Cumplimiento
          </th>
          <th class="text-center font-weight-bold text-white" style="width: 5%">
            Estado
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="indicador in this.indicadores"
          :key="indicador.ID_Indicador"
          class="text-left"
        >
          <td class="text-center c1" style="width: 10%">
            {{ indicador.ID_Indicador }}
          </td>
          <td class="c1" @click.stop="navigateTo('/indicadores/'+indicador.ID_Indicador)">{{ indicador.Titulo }}</td>
          <td class="c1">
            <v-progress-linear
              :model-value="indicador.Estado * 25"
              color="blue"
              height="12"
              striped
            >
              {{ indicador.Estado * 25 }} %
            </v-progress-linear>
          </td>
          <td>
            <v-col class="text-center">
              <div class="semaphore-container2 pb-2 pt-2" style="width: 30px">
                <v-icon :style="greenLightStyle(indicador.Estado)"
                  >mdi-circle</v-icon
                >
                <v-icon :style="yellowLightStyle(indicador.Estado)"
                  >mdi-circle</v-icon
                >
                <v-icon :style="redLightStyle(indicador.Estado)"
                  >mdi-circle</v-icon
                >
              </div>
            </v-col>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>

  <v-container>
    <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2 text-center">
      <v-col class="text-white font-weight-bold" cols="12">
        <h2 class="text-h5">Resumen de fortalezas por expediente</h2>
      </v-col>
    </v-row>
  </v-container>

  <v-card class="custom-card3">
    <v-table>
      <thead class="text-white">
        <tr class="rounded bg-blue-lighten-2">
          <th
            class="text-center font-weight-bold c1 text-white"
            style="width: 10%"
          >
            ID_Indicador
          </th>
          <th
            class="text-center font-weight-bold c1 text-white"
            style="width: 50%"
          >
            Indicador
          </th>
          <th
            class="text-center font-weight-bold text-white"
            style="width: 10%"
          >
            Estado
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="expediente in expedientes"
          :key="expediente.ID_Expediente"
          class="text-left"
        >
          <td class="text-center c1" style="width: 10%">
            {{ expediente.ID_Expediente }}
          </td>
          <td class="c1" @click.stop="navigateTo('/expedientes/'+expediente.ID_Expediente+'?FoD=F')">{{ expediente.Expediente }}</td>
          <td>
            <v-col class="text-center">
              <div class="semaphore-container2 pb-2 pt-2" style="width: 30px">
                <v-icon :style="greenLightStyle(expediente.Estado_F)"
                  >mdi-circle</v-icon
                >
                <v-icon :style="yellowLightStyle(expediente.Estado_F)"
                  >mdi-circle</v-icon
                >
                <v-icon :style="redLightStyle(expediente.Estado_F)"
                  >mdi-circle</v-icon
                >
              </div>
            </v-col>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>

  <v-container>
    <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2 text-center">
      <v-col class="text-white font-weight-bold" cols="12">
        <h2 class="text-h5">Resumen de debilidades por expediente</h2>
      </v-col>
    </v-row>
  </v-container>

  <v-card class="custom-card4">
    <v-table>
      <thead class="text-white">
        <tr class="rounded bg-blue-lighten-2">
          <th
            class="text-center font-weight-bold c1 text-white"
            style="width: 10%"
          >
            ID_Indicador
          </th>
          <th
            class="text-center font-weight-bold c1 text-white"
            style="width: 50%"
          >
            Indicador
          </th>
          <th
            class="text-center font-weight-bold c1 text-white"
            style="width: 10%"
          >
            Estado
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="expediente in expedientes"
          :key="expediente.ID_Expediente"
          class="test"
        >
          <td class="text-center c1" style="width: 10%">
            {{ expediente.ID_Expediente }}
          </td>
          <td class="c1" @click.stop="navigateTo('/expedientes/'+expediente.ID_Expediente+'?FoD=D')">{{ expediente.Expediente }}</td>
          <td>
            <v-col class="text-center">
              <div class="semaphore-container2 pb-2 pt-2" style="width: 30px">
                <v-icon :style="greenLightStyle(expediente.Estado_D)"
                  >mdi-circle</v-icon
                >
                <v-icon :style="yellowLightStyle(expediente.Estado_D)"
                  >mdi-circle</v-icon
                >
                <v-icon :style="redLightStyle(expediente.Estado_D)"
                  >mdi-circle</v-icon
                >
              </div>
            </v-col>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
  <p style="margin-bottom: 50px"></p>
</template>

<style scoped>
@import "@/assets/table.css";
</style>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    indicadores: [],
    expedientes: [],
    IndicadoresResumen: [0,0,0,0],
    IndicadoresTotal: 0,
    FortalezasResumen: [],
    FortalezasTotal: 0,
    DebilidadesResumen: [],
    DebilidadesTotal: 0,
    TotalesVertical: [0,0,0,0],
  }),
  mounted() {
    this.getResumenData();
    this.getExpedientesData();
    this.getIndicadoresResumenData();
    this.getFortalezasResumenData();
    this.getDebilidadesResumenData();
  },
  methods: {
    navigateTo(url) {
      this.$router.push(url);
    },
    async getResumenData() {
      try {
        const { data } = await axios.get("api/indicadores/");
        this.indicadores = data.body;
        this.indicadores.sort((A, B) => A.ID_Indicador - B.ID_Indicador);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },

    async getExpedientesData() {
      try {
        const { data } = await axios.get("api/expedientes/");
        this.expedientes = data.body;
        this.expedientes.sort((A, B) => A.ID_Expediente - B.ID_Expediente);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },

    // async getIndicadoresResumenData() {
    //   try {
    //     const { data } = await axios.get("api/indicadores/Indicadores/");
    //     this.IndicadoresResumen = data.body;
    //     console.log(data);
    //     console.log(this.IndicadoresResumen);

    //     for (let i = 0; i < 4; i++) {
    //       this.IndicadoresTotal += parseInt(this.IndicadoresResumen[i].count);
    //       this.TotalesVertical[i] += parseInt(this.IndicadoresResumen[i].count);
    //     }
    //     // console.log(this.IndicadoresResumen);
    //   } catch (error) {
    //     console.error("Error fetching data", error);
    //   }
    // },

    async getIndicadoresResumenData() {
  try {
    const response = await axios.get("api/indicadores/Indicadores/");
    if (response && response.data && Array.isArray(response.data.body)) {
      // Verificar que la respuesta tenga data y body sea un array
      this.IndicadoresResumen = response.data.body;
      for (let i = 0; i < 4; i++) {
        if (this.IndicadoresResumen[i] && this.IndicadoresResumen[i].count) {
          this.IndicadoresTotal += parseInt(this.IndicadoresResumen[i].count);
          this.TotalesVertical[i] += parseInt(this.IndicadoresResumen[i].count);
        }
      }
    } else {
      // Manejar la respuesta inesperada del servidor
      console.error("Respuesta del servidor inesperada", response);
    }
  } catch (error) {
    console.error("Error fetching data", error);
  }
},


    // async getFortalezasResumenData() {
    //   try {
    //     const { data } = await axios.get("api/expedientes/Fortalezas/");
    //     this.FortalezasResumen = data.body;

    //     for (let i = 0; i < 4; i++) {
    //       this.FortalezasTotal += parseInt(this.FortalezasResumen[i].countF);
    //       this.TotalesVertical[i] += parseInt(this.FortalezasResumen[i].countF);
    //     }
    //     // console.log(this.FortalezasResumen);
    //   } catch (error) {
    //     console.error("Error fetching data", error);
    //   }
    // },

    async getFortalezasResumenData() {
  try {
    const response = await axios.get("api/expedientes/Fortalezas/");
    if (response && response.data && Array.isArray(response.data.body)) {
      // Verificar que la respuesta tenga data y body sea un array
      this.FortalezasResumen = response.data.body;
      for (let i = 0; i < 4; i++) {
        if (this.FortalezasResumen[i] && this.FortalezasResumen[i].countF) {
          this.FortalezasTotal += parseInt(this.FortalezasResumen[i].countF);
          this.TotalesVertical[i] += parseInt(this.FortalezasResumen[i].countF);
        }
      }
    } else {
      // Manejar la respuesta inesperada del servidor
      console.error("Respuesta del servidor inesperada", response);
    }
  } catch (error) {
    console.error("Error fetching data", error);
  }
},

    // async getDebilidadesResumenData() {
    //   try {
    //     const { data } = await axios.get("api/expedientes/Debilidades/");
    //     this.DebilidadesResumen = data.body;

    //     for (let i = 0; i < 4; i++) {
    //       this.DebilidadesTotal += parseInt(this.DebilidadesResumen[i].countD);
    //       this.TotalesVertical[i] += parseInt(
    //         this.DebilidadesResumen[i].countD
    //       );
    //     }
    //     // console.log(this.TotalesVertical);
    //   } catch (error) {
    //     console.error("Error fetching data", error);
    //   }
    // },

    async getDebilidadesResumenData() {
  try {
    const response = await axios.get("api/expedientes/Debilidades/");
    if (response && response.data && Array.isArray(response.data.body)) {
      // Verificar que la respuesta tenga data y body sea un array
      this.DebilidadesResumen = response.data.body;
      for (let i = 0; i < 4; i++) {
        if (this.DebilidadesResumen[i] && this.DebilidadesResumen[i].countD) {
          this.DebilidadesTotal += parseInt(this.DebilidadesResumen[i].countD);
          this.TotalesVertical[i] += parseInt(this.DebilidadesResumen[i].countD);
        }
      }
    } else {
      // Manejar la respuesta inesperada del servidor
      console.error("Respuesta del servidor inesperada", response);
    }
  } catch (error) {
    console.error("Error fetching data", error);
  }
},

    redLightStyle(Estado) {
      return Estado == 1 ? "color: red;" : "color: grey;";
    },
    yellowLightStyle(Estado) {
      return Estado == 2 ? "color: yellow;" : "color: grey;";
    },
    greenLightStyle(Estado) {
      return Estado > 2 ? "color: #64DD17;" : "color: grey;";
    },
  },
  computed: {},
};
</script>
