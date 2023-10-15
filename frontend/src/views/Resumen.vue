<!--
  FILEPATH: ..\FrontEnd\src\views\Expedientes.vue

  This Vue component represents a view for managing expedientes (files) in the SIRIUS system. It contains a card with information about the expediente, including its category and a progress bar indicating the status of its fortalezas (strengths) and debilidades (weaknesses). The component also includes an editor for updating the content of the expediente, as well as radio buttons for selecting its approval status.

  Props:
  - None

  Data:
  - titleRows: an array of objects representing the rows of the expediente card
  - fortalezas_debilidadesData: an object containing data about the fortalezas and debilidades of the expediente
  - nivel: a number representing the level of access of the user (1, 2, or 3)

  Methods:
  - toggleEditor: a method for toggling the editor for a particular row of the expediente card
  - updatefortalezas_debilidadesData: a method for updating the data for a particular fortaleza or debilidad of the expediente

  Computed Properties:
  - statusText: a computed property that returns the text to display for the status of the fortalezas or debilidades
  - redLightStyle: a computed property that returns the style for the red light in the semaphore container
  - yellowLightStyle: a computed property that returns the style for the yellow light in the semaphore container
  - greenLightStyle: a computed property that returns the style for the green light in the semaphore container
-->
<template>
  <div>
    <session-dialog :value="showDialog" @update:value="showDialog = $event" />
  </div>
  <v-card class="h-auto mt-5 ml-3 mr-3" variant="tonal">
    <div class="custom-font">
      <v-container>
        <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2">
          <v-col class="text-white font-weight-bold">
            <h2 class="text-h5">{{ titleRows[0].title }}</h2>
            <h2 class="text-h5">
              Categoria de {{ this.fortalezas_debilidadesData.Expediente }}
            </h2>
          </v-col></v-row
        >
        <v-row class="ml-0 mr-0 mt-5 mb-3">
          <v-col>
            <h3 style="font-weight: bold">Instrucción</h3>
            <p style="font-style: italic">
              - Enliste las {{ titleRows[0].title }} que el programa identifica
              en esta categoría.
            </p>
          </v-col></v-row
        >

        <div v-for="(item, index) in titleRows" :key="index">
          <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2">
            <v-col class="text-white font-weight-bold" cols="10">
              <h2 class="text-h5">{{ item.title }}</h2>
              <div style="padding: 5px">
                <span class="text-h6"
                  >Estado del indicador {{ statusText }}</span
                >
              </div>
              <v-progress-linear
                v-if="item.title === 'Fortalezas'"
                :model-value="fortalezas_debilidadesData.Estado_F * 25"
                color="white"
                height="12"
                striped
              ></v-progress-linear>
              <v-progress-linear
                v-else
                :model-value="fortalezas_debilidadesData.Estado_D * 25"
                color="white"
                height="12"
                striped
              ></v-progress-linear>
            </v-col>
            <v-col class="text-right">
              <div class="semaphore-container" style="width: 30px">
                <v-icon :style="redLightStyle">mdi-circle</v-icon>
                <v-icon :style="yellowLightStyle">mdi-circle</v-icon>
                <v-icon :style="greenLightStyle">mdi-circle</v-icon>
              </div>
            </v-col>
            <v-col class="text-right text-white">
              <v-btn
                @click="toggleEditor(index)"
                class="text-right"
                prepend-icon="mdi-pencil"
                variant="tonal"
                color="light-blue-ligthen"
                elevation="1"
                :disabled="item.showEditor"
              >
                {{ item.showEditor ? "Editando" : "Editar" }}
              </v-btn>
            </v-col>
          </v-row>

          <v-row
            v-if="item.showEditor && item.contentKey === 'Fortaleza1'"
            class="ml-0 mr-0 mt-5 mb-3"
          >
            <v-col cols="12">
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                <span class="text-red-accent-4">
                  Información ingresada por el Coordinador
                </span>
                <QuillEditor
                  :readOnly="!(nivel == 1 || nivel == 2)"
                  :theme="nivel == 1 || nivel == 2 ? 'snow' : 'bubble'"
                  v-model:content="fortalezas_debilidadesData['Fortaleza1']"
                />
              </div>
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                <span class="text-amber-accent-4">Comentarios del Revisor</span>
                <QuillEditor
                  :readOnly="!(nivel == 1 || nivel == 3)"
                  :theme="nivel == 1 || nivel == 3 ? 'snow' : 'bubble'"
                  v-model:content="fortalezas_debilidadesData['Comentario1F']"
                />
              </div>
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                <span class="text-light-green-accent-4"
                  >Comentarios del Secretario Academico</span
                >
                <QuillEditor
                  :readOnly="!(nivel == 1)"
                  :theme="nivel == 1 ? 'snow' : 'bubble'"
                  v-model:content="fortalezas_debilidadesData['Comentario2F']"
                />
              </div>
              <v-radio-group
                v-model="fortalezas_debilidadesData.Estado_F"
                inline
              >
                <v-radio label="En Elaboración" value="1"></v-radio>
                <v-radio label="En Revisión" value="2"></v-radio>
                <v-radio label="En Aprobación" value="3"></v-radio>
                <v-radio label="Aprobado" value="4"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" class="mt-3">
              <v-row>
                <v-col class="text-right" cols="6">
                  <v-btn
                    @click="
                      updatefortalezas_debilidadesData('Fortaleza1') &&
                        updatefortalezas_debilidadesData('Comentario1F') &&
                        updatefortalezas_debilidadesData('Comentario2F') &&
                        updatefortalezas_debilidadesData('Estado_F') &&
                        toggleEditor(index)
                    "
                    fluid
                    prepend-icon="mdi-check-circle"
                    rounded="lg"
                    type="submit"
                    variant="tonal"
                    size="large"
                    color="info"
                  >
                    Actualizar
                  </v-btn>
                </v-col>
                <v-col class="text-left" cols="6">
                  <v-btn
                    @click="
                      getfortalezas_debilidadesData() && toggleEditor(index)
                    "
                    fluid
                    prepend-icon="mdi-close"
                    rounded="lg"
                    variant="tonal"
                    size="large"
                    color="red-darken-4"
                  >
                    Cancelar
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row
            v-if="item.showEditor && item.contentKey === 'Debilidad1'"
            class="ml-0 mr-0 mt-5 mb-3"
          >
            <v-col cols="12">
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                <span class="text-red-accent-4">
                  Información ingresada por el Coordinador
                </span>
                <QuillEditor
                  :readOnly="!(nivel == 1 || nivel == 2)"
                  :theme="nivel == 1 || nivel == 2 ? 'snow' : 'bubble'"
                  v-model:content="fortalezas_debilidadesData['Debilidad1']"
                />
              </div>
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                <span class="text-amber-accent-4">Comentarios del Revisor</span>
                <QuillEditor
                  :readOnly="!(nivel == 1 || nivel == 3)"
                  :theme="nivel == 1 || nivel == 3 ? 'snow' : 'bubble'"
                  v-model:content="fortalezas_debilidadesData['Comentario1D']"
                />
              </div>
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                <span class="text-light-green-accent-4"
                  >Comentarios del Secretario Academico</span
                >
                <QuillEditor
                  :readOnly="!(nivel == 1)"
                  :theme="nivel == 1 ? 'snow' : 'bubble'"
                  v-model:content="fortalezas_debilidadesData['Comentario2D']"
                />
              </div>
              <v-radio-group
                v-model="fortalezas_debilidadesData.Estado_D"
                inline
              >
                <v-radio label="En Elaboración" value="1"></v-radio>
                <v-radio label="En Revisión" value="2"></v-radio>
                <v-radio label="En Aprobación" value="3"></v-radio>
                <v-radio label="Aprobado" value="4"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" class="mt-3">
              <v-row>
                <v-col class="text-right" cols="6">
                  <v-btn
                    @click="
                      updatefortalezas_debilidadesData('Debilidad1') &&
                        updatefortalezas_debilidadesData('Comentario1D') &&
                        updatefortalezas_debilidadesData('Comentario2D') &&
                        updatefortalezas_debilidadesData('Estado_D') &&
                        toggleEditor(index)
                    "
                    fluid
                    prepend-icon="mdi-check-circle"
                    rounded="lg"
                    type="submit"
                    variant="tonal"
                    size="large"
                    color="info"
                  >
                    Actualizar
                  </v-btn>
                </v-col>
                <v-col class="text-left" cols="6">
                  <v-btn
                    @click="
                      getfortalezas_debilidadesData() && toggleEditor(index)
                    "
                    fluid
                    prepend-icon="mdi-close"
                    rounded="lg"
                    variant="tonal"
                    size="large"
                    color="red-darken-4"
                  >
                    Cancelar
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row v-else class="ml-0 mr-0 mt-5 mb-3">
            <v-col v-if="!item.showEditor">
              <QuillEditor
                :readOnly="true"
                theme="bubble"
                :content="fortalezas_debilidadesData[item.contentKey]"
              />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </v-card>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import Quill from "quill";
const Delta = Quill.import("delta");
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import axios from "axios";
import SessionDialog from "../components/SessionDialog.vue";

export default {
  components: {
    QuillEditor,
    SessionDialog,
  },
  computed: {
    ...mapState("auth", ["showDialog"]),
    statusText() {
      if (this.FoD === "F") {
        if (this.fortalezas_debilidadesData.Estado_F == 1) {
          return "en elaboración";
        } else if (this.fortalezas_debilidadesData.Estado_F == 2) {
          return "en revisión";
        } else if (this.fortalezas_debilidadesData.Estado_F == 3) {
          return "en aprobación";
        } else if (this.fortalezas_debilidadesData.Estado_F == 4) {
          return "aprobado";
        } else {
          return "INDEFINIDO";
        }
      } else if (this.FoD === "D") {
        if (this.fortalezas_debilidadesData.Estado_D == 1) {
          return "en elaboración";
        } else if (this.fortalezas_debilidadesData.Estado_D == 2) {
          return "en revisión";
        } else if (this.fortalezas_debilidadesData.Estado_D == 3) {
          return "en aprobación";
        } else if (this.fortalezas_debilidadesData.Estado_D == 4) {
          return "aprobado";
        } else {
          return "INDEFINIDO";
        }
      } else {
        return "INDEFINIDO";
      }
    },

    redLightStyle() {
      if (this.FoD === "F") {
        return this.fortalezas_debilidadesData.Estado_F == 1
          ? "color: red;"
          : "color: grey;";
      } else if (this.FoD === "D") {
        return this.fortalezas_debilidadesData.Estado_D == 1
          ? "color: red;"
          : "color: grey;";
      } else {
        return "color: grey;";
      }
    },
    yellowLightStyle() {
      if (this.FoD === "F") {
        return this.fortalezas_debilidadesData.Estado_F == 2
          ? "color: yellow;"
          : "color: grey;";
      } else if (this.FoD === "D") {
        return this.fortalezas_debilidadesData.Estado_D == 2
          ? "color: yellow;"
          : "color: grey;";
      } else {
        return "color: grey;";
      }
    },

    greenLightStyle() {
      if (this.FoD === "F") {
        return ["3", "4"].includes(this.fortalezas_debilidadesData.Estado_F)
          ? "color: #64DD17;"
          : "color: grey;";
      } else if (this.FoD === "D") {
        return ["3", "4"].includes(this.fortalezas_debilidadesData.Estado_D)
          ? "color: #64DD17;"
          : "color: grey;";
      } else {
        return "color: grey;";
      }
    },
  },
  data: () => ({
    nivel: 0,
    FoD: "",
    titleRows: [
      {
        title: "",
        contentKey: "Fortaleza1",
        showEditor: false,
      },
    ],
    fortalezas_debilidadesData: {
      ID_Expediente: "",
      Expediente: "n",
      Fortaleza1: "",
      Fortaleza2: "",
      Fortaleza3: "",
      Estado_F: "",
      fecha_F: "",
      Accion_Fortaleza1: "",
      Accion_Fortaleza2: "",
      Accion_Fortaleza3: "",
      Comentario1F: "",
      Comentario2F: "",
      Debilidad1: "",
      Debilidad2: "",
      Debilidad3: "",
      Estado_D: "",
      fecha_D: "",
      Accion_Debilidad1: "",
      Accion_Debilidad2: "",
      Accion_Debilidad3: "",
      Comentario2D: "",
      Comentario1D: "",
    },
    editors: [], // Almacena las instancias de Quill
  }),
  mounted() {
    this.getfortalezas_debilidadesData();
    this.nivel = this.$store.state.auth.level;
  },
  methods: {
    ...mapActions("auth", ["stayConnected", "logOut"]),
    async updatefortalezas_debilidadesData(contentKey) {
      if (contentKey === "Estado_F" || contentKey === "Estado_D") {
        this.fortalezas_debilidadesData[contentKey] =
          this.fortalezas_debilidadesData[contentKey];
      } else {
        const deltaString = JSON.stringify(
          this.fortalezas_debilidadesData[contentKey]
        );
        this.fortalezas_debilidadesData[contentKey] = deltaString;
      }
      const ID_Expediente = this.$route.params.ID_Expediente;
      const data = {
        ID_Expediente,
        [contentKey]: this.fortalezas_debilidadesData[contentKey],
      };

      try {
        const { status } = await axios.post("api/expedientes/", data);
        [200, 201].includes(status) && this.getfortalezas_debilidadesData();
      } catch (error) {
        console.error("Error updating data", error);
      }
    },

    async getfortalezas_debilidadesData() {
      const ID_Expediente = this.$route.params.ID_Expediente;
      this.FoD = this.$route.query.FoD;
      if (this.FoD === "F") {
        this.titleRows[0].title = "Fortalezas";
        this.titleRows[0].contentKey = "Fortaleza1";
      } else if (this.FoD === "D") {
        this.titleRows[0].title = "Oportunidades de Mejoras";
        this.titleRows[0].contentKey = "Debilidad1";
      }
      try {
        const { data } = await axios.get(`api/expedientes/${ID_Expediente}`);
        this.fortalezas_debilidadesData.Expediente = data.body.Expediente;
        this.fortalezas_debilidadesData.Fortaleza1 = Object.freeze(
          new Delta(JSON.parse(data.body.Fortaleza1))
        );
        this.fortalezas_debilidadesData.Fortaleza2 = Object.freeze(
          new Delta(JSON.parse(data.body.Fortaleza2))
        );
        this.fortalezas_debilidadesData.Fortaleza3 = Object.freeze(
          new Delta(JSON.parse(data.body.Fortaleza3))
        );
        this.fortalezas_debilidadesData.Estado_F = data.body.Estado_F;
        this.fortalezas_debilidadesData.fecha_F = data.body.fecha_F;
        this.fortalezas_debilidadesData.Accion_Fortaleza1 = Object.freeze(
          new Delta(JSON.parse(data.body.Accion_Fortaleza1))
        );
        this.fortalezas_debilidadesData.Accion_Fortaleza2 = Object.freeze(
          new Delta(JSON.parse(data.body.Accion_Fortaleza2))
        );
        this.fortalezas_debilidadesData.Accion_Fortaleza3 = Object.freeze(
          new Delta(JSON.parse(data.body.Accion_Fortaleza3))
        );
        this.fortalezas_debilidadesData.Comentario1F = Object.freeze(
          new Delta(JSON.parse(data.body.Comentario1F))
        );
        this.fortalezas_debilidadesData.Comentario2F = Object.freeze(
          new Delta(JSON.parse(data.body.Comentario2F))
        );
        this.fortalezas_debilidadesData.Debilidad1 = Object.freeze(
          new Delta(JSON.parse(data.body.Debilidad1))
        );
        this.fortalezas_debilidadesData.Debilidad2 = Object.freeze(
          new Delta(JSON.parse(data.body.Debilidad2))
        );
        this.fortalezas_debilidadesData.Debilidad3 = Object.freeze(
          new Delta(JSON.parse(data.body.Debilidad3))
        );
        this.fortalezas_debilidadesData.Estado_D = data.body.Estado_D;
        this.fortalezas_debilidadesData.fecha_D = data.body.fecha_D;
        this.fortalezas_debilidadesData.Accion_Debilidad1 = Object.freeze(
          new Delta(JSON.parse(data.body.Accion_Debilidad1))
        );
        this.fortalezas_debilidadesData.Accion_Debilidad2 = Object.freeze(
          new Delta(JSON.parse(data.body.Accion_Debilidad2))
        );
        this.fortalezas_debilidadesData.Accion_Debilidad3 = Object.freeze(
          new Delta(JSON.parse(data.body.Accion_Debilidad3))
        );
        this.fortalezas_debilidadesData.Comentario2D = Object.freeze(
          new Delta(JSON.parse(data.body.Comentario2D))
        );
        this.fortalezas_debilidadesData.Comentario1D = Object.freeze(
          new Delta(JSON.parse(data.body.Comentario1D))
        );
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },

    toggleEditor(index) {
      this.titleRows[index].showEditor = !this.titleRows[index].showEditor;
    },
  },
};
</script>

<style>
.custom-font {
  font-family: "Trebuchet MS";
}
.semaphore-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  border-radius: 12px;
  padding: 8px;
}
</style>
