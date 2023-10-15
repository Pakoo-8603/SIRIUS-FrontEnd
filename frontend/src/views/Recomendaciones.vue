<!--
Path: ..\FrontEnd\src\views\Recomendaciones.vue
Description: This component displays recommendation indicators and allows the user to edit them based on their access level.

Props:
None

Data:
- indicadoresData: an object containing data related to the recommendation indicators
- titleRows: an array of objects containing information about the recommendation indicators
- nivel: a number representing the user's access level
- redLightStyle: a string representing the style of the red light in the semaphore
- yellowLightStyle: a string representing the style of the yellow light in the semaphore
- greenLightStyle: a string representing the style of the green light in the semaphore

Methods:
- toggleEditor(index): a method that toggles the editor for a specific recommendation indicator
- updateIndicadoresData(key): a method that updates the data for a specific recommendation indicator

Computed:
None

Events:
None
-->
<!--
Props:
None

Data:
- indicadoresData: an object containing data related to the recommendation indicators
- titleRows: an array of objects containing information about the recommendation indicators
- nivel: a number representing the user's access level
- redLightStyle: a string representing the style of the red light in the semaphore
- yellowLightStyle: a string representing the style of the yellow light in the semaphore
- greenLightStyle: a string representing the style of the green light in the semaphore

Methods:
- toggleEditor(index): a method that toggles the editor for a specific recommendation indicator
- updateIndicadoresData(key): a method that updates the data for a specific recommendation indicator

Computed:
None

Events:
None
-->
<template>
  <div>
    <session-dialog :value="showDialog" @update:value="showDialog = $event" />
  </div>
  <v-card class="h-auto mt-5 ml-3 mr-3" variant="tonal">
    <div class="custom-font">
      <p class="text-h3 text-center pt-3">{{ indicadoresData.Titulo }}<br /></p>
      <v-container>
        <div v-for="(item, index) in titleRows" :key="index">
          <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-orange-accent-4">
            <v-col
              v-if="item.contentKey === 'Atencion_Rec'"
              class="text-white font-weight-bold"
              cols="10"
            >
              <h2 class="text-h5">{{ item.title }}</h2>
              <div style="padding: 5px">
                <span class="text-h6"
                  >Estado de la recomendación {{ statusText }}
                </span>
                <span class="text-h6" style="float: right">
                  Avance de la atención {{ indicadoresData.Avance_Rec }}%</span
                >
              </div>
              <v-progress-linear
                :model-value="indicadoresData.Estado_Rec * 25"
                color="white"
                height="12"
                striped
              ></v-progress-linear>
            </v-col>
            <v-col v-if="item.contentKey === 'Atencion_Rec'" class="text-right">
              <div class="semaphore-container" style="width: 30px">
                <v-icon :style="redLightStyle">mdi-circle</v-icon>
                <v-icon :style="yellowLightStyle">mdi-circle</v-icon>
                <v-icon :style="greenLightStyle">mdi-circle</v-icon>
              </div>
            </v-col>
            <v-col v-else class="text-white font-weight-bold" cols="10">
              <h2 class="text-h5">{{ item.title }}</h2>
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
            v-if="item.showEditor && item.contentKey === 'Atencion_Rec'"
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
                  v-model:content="indicadoresData['Atencion_Rec']"
                />
              </div>
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                <span class="text-amber-accent-4">Comentarios del Revisor</span>
                <QuillEditor
                  :readOnly="!(nivel == 1 || nivel == 3)"
                  :theme="nivel == 1 || nivel == 3 ? 'snow' : 'bubble'"
                  v-model:content="indicadoresData['ComentarioR1']"
                />
              </div>
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                <span class="text-light-green-accent-4"
                  >Comentarios del Secretario Academico</span
                >
                <QuillEditor
                  :readOnly="!(nivel == 1)"
                  :theme="nivel == 1 ? 'snow' : 'bubble'"
                  v-model:content="indicadoresData['ComentarioR2']"
                />
              </div>
              <div class="text-h5 font-weight-bold ml-0 mr-0 mt-5 mb-3">
                Avance de la atención
              </div>
              <div>
                <v-text-field
                  label="Avance de la atención en porcentaje"
                  v-model="indicadoresData.Avance_Rec"
                  type="number"
                ></v-text-field>
              </div>
              <v-radio-group v-model="indicadoresData.Estado_Rec" inline>
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
                      updateIndicadoresData('Atencion_Rec') &&
                        updateIndicadoresData('ComentarioR1') &&
                        updateIndicadoresData('ComentarioR2') &&
                        updateIndicadoresData('Estado_Rec') &&
                        updateIndicadoresData('Avance_Rec') &&
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
                    @click="getIndicadoresData() && toggleEditor(index)"
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
            v-if="item.showEditor && item.contentKey === 'evidendenciaDataJson'"
            class="ml-0 mr-0 mt-5 mb-3"
          >
            <v-col>
              <v-list>
                <v-list-item-group>
                  <v-list-item
                    v-for="item in evidendenciaData"
                    :key="item.ID_Referencia"
                  >
                    <v-list-item-content>
                      <v-form @submit.prevent="">
                        <v-row rows="8">
                          <v-col cols="1">
                            <v-text-field
                              label="ID"
                              v-model="item.ID_Referencia"
                              readonly
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-text-field
                              label="Nombre"
                              v-model="item.Texto"
                              type="text"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="2">
                            <v-text-field
                              label="Fecha"
                              v-model="item.actualizado"
                              type="date"
                            ></v-text-field>
                          </v-col>
                          <v-col v-if="!item.uploadFile">
                            <v-text-field
                              label="URL"
                              v-model="item.URL"
                              type="text"
                            ></v-text-field>
                          </v-col>
                          <v-col v-else>
                            <v-file-input
                              label="Archivo"
                              v-model="item.File"
                            ></v-file-input>
                          </v-col>
                          <v-col cols="1">
                            <div>URL / Archivo</div>
                            <v-switch v-model="item.uploadFile"></v-switch>
                          </v-col>
                          <v-col cols="1">
                            <v-btn
                              icon="mdi-delete"
                              @click="_deleteEvidencia(item.ID_Referencia)"
                              color="red"
                            >
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col cols="12" class="mt-3">
              <v-row>
                <v-col class="text-left" cols="4">
                  <v-btn
                    @click="_addEvidencia()"
                    fluid
                    prepend-icon="mdi-plus-circle"
                    rounded="lg"
                    variant="tonal"
                    size="large"
                    color="green"
                  >
                    Añadir Referencia
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-right" cols="6">
                  <v-btn
                    @click="updateEvidenciaData() && toggleEditor(index)"
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
                    @click="cancelEvidencia() && toggleEditor(index)"
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
            v-if="
              item.showEditor &&
              item.contentKey !== 'Atencion_Rec' &&
              item.title !== 'Referencias'
            "
            class="ml-0 mr-0 mt-5 mb-3"
          >
            <v-col cols="12">
              <div>
                <QuillEditor
                  v-model:content="indicadoresData[item.contentKey]"
                  @update:content=""
                />
              </div>
            </v-col>
            <v-col cols="12" class="mt-3">
              <v-row>
                <v-col class="text-right" cols="6">
                  <v-btn
                    @click="
                      updateIndicadoresData(item.contentKey) &&
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
                    @click="getIndicadoresData() && toggleEditor(index)"
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
                :content="indicadoresData[item.contentKey]"
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
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  components: {
    QuillEditor,
    SessionDialog,
  },
  computed: {
    ...mapState("auth", ["showDialog"]),
    statusText() {
      if (this.indicadoresData.Estado_Rec == 1) {
        return "en elaboración";
      } else if (this.indicadoresData.Estado_Rec == 2) {
        return "en revisión";
      } else if (this.indicadoresData.Estado_Rec == 3) {
        return "en aprobación";
      } else if (this.indicadoresData.Estado_Rec == 4) {
        return "aprobado";
      } else {
        return "INDEFINIDO";
      }
    },
    redLightStyle() {
      return this.indicadoresData.Estado_Rec == 1
        ? "color: red;"
        : "color: grey;";
    },
    yellowLightStyle() {
      return this.indicadoresData.Estado_Rec == 2
        ? "color: yellow;"
        : "color: grey;";
    },
    greenLightStyle() {
      return this.indicadoresData.Estado_Rec > 2
        ? "color: #64DD17;"
        : "color: grey;";
    },
  },
  data: () => ({
    nivel: 0,
    titleRows: [
      {
        title: "Recomendación",
        contentKey: "Recomendacion",
        showEditor: false,
      },
      {
        title: "Acciones realizadas para atender la recomendación:",
        contentKey: "Atencion_Rec",
        showEditor: false,
      },
      {
        title: "Referencias",
        contentKey: "evidendenciaDataJson",
        showEditor: false,
      },
    ],
    indicadoresData: {
      ID_Indicador: "",
      Titulo: "",
      Recomendacion: "",
      Atencion_Rec: "",
      ComentarioR1: "",
      ComentarioR2: "",
      Estado_Rec: 0,
      Avance_Rec: 0,
      ID_Expediente: "",
      evidendenciaDataJson: "",
    },
    editors: [], // Almacena las instancias de Quill
    evidendenciaData: [],
    evidendenciaDataDeleted: [],
    evidendenciaDataJson: null,
    deletedIDs: [],
    addedIDs: [],
  }),
  mounted() {
    this.getIndicadoresData();
    this.getEvidencia();
    this.nivel = this.$store.state.auth.level;
  },
  methods: {
    ...mapActions("auth", ["stayConnected", "logOut"]),
    async updateIndicadoresData(contentKey) {
      if (contentKey === "Estado_Rec") {
        this.indicadoresData[contentKey] = parseInt(
          this.indicadoresData[contentKey],
          10
        );
      } else if (contentKey === "Avance_Rec") {
        this.indicadoresData[contentKey] = parseInt(
          this.indicadoresData[contentKey],
          10
        );
      } else {
        const deltaString = JSON.stringify(this.indicadoresData[contentKey]);
        this.indicadoresData[contentKey] = deltaString;
      }
      const ID_Indicador = this.$route.params.ID_Indicador;
      const data = {
        ID_Indicador,
        [contentKey]: this.indicadoresData[contentKey],
      };
      try {
        const { status } = await axios.post("api/indicadores/", data);
        [200, 201].includes(status) && this.getIndicadoresData();
      } catch (error) {
        console.error("Error updating data", error);
      }
    },

    convertToCustomJSON(evidendenciaData) {
      const ops = evidendenciaData.map((item) => {
        return [
          {
            attributes: { link: item.URL },
            insert: `[${item.ID_Referencia}] ${item.Texto}`,
          },
          {
            attributes: { list: "bullet" },
            insert: "\n",
          },
        ];
      });
      const flattened = [].concat(...ops);
      const tempjson = JSON.stringify({ ops: flattened });
      const tempdelta = Object.freeze(new Delta(JSON.parse(tempjson)));
      return tempdelta;
    },

    _deleteEvidencia(ID_Referencia) {
      // Conservar la lista de IDs eliminados para enviarlos al servidor
      this.deletedIDs.push(ID_Referencia);
      // Conservar elemento en caso de cancelación
      this.evidendenciaDataDeleted.push(
        this.evidendenciaData.filter(
          (item) => item.ID_Referencia === ID_Referencia
        )[0]
      );
      // Eliminar elemento de la lista
      this.evidendenciaData = this.evidendenciaData.filter(
        (item) => item.ID_Referencia !== ID_Referencia
      );
      return true;
    },

    cancelEvidencia() {
      // Restaurar elementos eliminados
      this.evidendenciaDataDeleted.forEach((item) => {
        this.evidendenciaData.push(item);
      });

      //Eliminar elementos de la lista de IDs agregados
      this.addedIDs.forEach((item) => {
        this.evidendenciaData = this.evidendenciaData.filter(
          (element) => element.ID_Referencia !== item
        );
      });

      // Eliminar elementos de la lista de IDs agregados
      this.addedIDs = [];

      // Limpiar lista de elementos eliminados
      this.evidendenciaDataDeleted = [];
      // Limpiar lista de IDs eliminados
      this.deletedIDs = [];
      return true;
    },

    _addEvidencia() {
      // Encuentra el valor máximo de ID_Refencia actual y suma 1 para el nuevo elemento
      const nextId =
        Math.max(
          ...this.evidendenciaData.map((item) => item.ID_Referencia),
          0
        ) + 1;
      // Conservar la lista de IDs agregados
      this.addedIDs.push(nextId);
      const newItem = {
        ID_Referencia: nextId,
        Texto: "",
        URL: "",
        actualizado: "",
      };
      this.evidendenciaData.push(newItem);
      return true;
    },

    async updateEvidenciaData() {
      const ID_Indicador = this.$route.params.ID_Indicador;
      try {
        for (let i = 0; i < this.evidendenciaData.length; i++) {
          const item = this.evidendenciaData[i];

          // Datos a enviar en caso de una referencia normal (con URL)
          let data = {
            ID_Indicador,
            ID_Referencia: item.ID_Referencia,
            Texto: item.Texto,
            URL: item.URL,
            actualizado: item.actualizado,
          };

          if (item.uploadFile) {
            if (!item.File || item.File.length === 0) {
              alert("Por favor, selecciona un archivo primero.");
              return;
            }
            const formData = new FormData();
            formData.append(
              "filename",
              `${ID_Indicador}-${item.ID_Referencia}`
            );
            formData.append("indicador", ID_Indicador);
            formData.append("recomendacion", "recomendacion");
            formData.append("file", item.File[0]);

            const deleteResponse = await axios.delete(
              `api/uploads/${ID_Indicador}/recomendacion/${ID_Indicador}-${item.ID_Referencia}`
            );

            const uploadResponse = await axios.post("api/upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });

            // Usar la URL devuelta por la API para actualizar el campo URL
            if (uploadResponse.status === 200) {
              data.URL = uploadResponse.data.url;
            }
          }

          const { status } = await axios.post(
            `api/evidencias_r/${ID_Indicador}`,
            data
          );
          [200, 201].includes(status) && this.getEvidencia();
        }
        this.addedIDs = [];
      } catch (error) {
        console.error("Error updating data", error);
      }
      const listID = this.deletedIDs;
      const deleteData = {
        delete: listID,
      };
      try {
        const { status } = await axios.put(
          `api/evidencias_r/${ID_Indicador}`,
          deleteData
        );
        [200, 201].includes(status) && this.getEvidencia();
        for (let i = 0; i < listID.length; i++) {
          const { status } = await axios.delete(
            `api/uploads/${ID_Indicador}/recomendacion/${ID_Indicador}-${listID[i]}`
          );
          [200, 201].includes(status) && this.getEvidencia();
        }
        this.deletedIDs = [];
      } catch (error) {
        console.error("Error deleting data", error);
      }
    },

    async getEvidencia() {
      const ID_Indicador = this.$route.params.ID_Indicador;
      try {
        const { data } = await axios.get(`api/evidencias_r/${ID_Indicador}`);
        for (let i = 0; i < data.body.length; i++) {
          let fechaISO = data.body[i].actualizado;
          let fechaObj = new Date(fechaISO);
          let fechaInput = fechaObj.toISOString().split("T")[0];
          data.body[i].actualizado = fechaInput;
        }
        this.evidendenciaData = data.body;
        this.evidendenciaDataJson = this.convertToCustomJSON(data.body);
        this.indicadoresData.evidendenciaDataJson = this.evidendenciaDataJson;
      } catch (error) {
        console.log("Error fetching data", error);
      }
    },

    async getIndicadoresData() {
      const ID_Indicador = this.$route.params.ID_Indicador;
      try {
        const { data } = await axios.get(`api/indicadores/${ID_Indicador}`);
        // Convertir las cadenas JSON de la base de datos de nuevo en objetos Delta
        this.indicadoresData.Recomendacion = Object.freeze(
          new Delta(JSON.parse(data.body.Recomendacion))
        );
        this.indicadoresData.Atencion_Rec = Object.freeze(
          new Delta(JSON.parse(data.body.Atencion_Rec))
        );
        this.indicadoresData.ComentarioR1 = Object.freeze(
          new Delta(JSON.parse(data.body.ComentarioR1))
        );
        this.indicadoresData.ComentarioR2 = Object.freeze(
          new Delta(JSON.parse(data.body.ComentarioR2))
        );
        this.indicadoresData.ID_Expediente = data.body.ID_Expediente;
        this.indicadoresData.ID_Indicador = data.body.ID_Indicador;
        this.indicadoresData.Estado_Rec = data.body.Estado_Rec;
        this.indicadoresData.Avance_Rec = data.body.Avance_Rec;
        this.indicadoresData.Titulo = data.body.Titulo;
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
