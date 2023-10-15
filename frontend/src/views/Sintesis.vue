<!--
Path: ..\FrontEnd\src\views\Sintesis.vue
Description: This component displays a form that allows the user to edit and update information about an educational program.
Props: None
Data:
  - editing: a boolean that indicates whether the form is in edit mode or not.
  - sintesisData: an object that contains the data to be displayed in the form.
  - items: an array of objects that define the labels, models, and component types of the form fields.
Methods:
  - updateSintesis: a method that sends a PUT request to update the sintesisData object.
Computed:
  - canEdit: a computed property that returns true if the user has permission to edit the form.
Events: None
-->
<template>
  <div>
    <session-dialog :value="showDialog" @update:value="showDialog = $event" />
  </div>
  <v-card class="h-auto mt-5 ml-3 mr-3" variant="tonal">
    <v-container style="font-family: Trebuchet MS">
      <p class="text-right pr-3 pt-3">
        <v-btn
          v-if="canEdit"
          class="text-right"
          prepend-icon="mdi-pencil"
          variant="outlined"
          size="small"
          @click="editing = !editing"
        >
          Editar
        </v-btn>
      </p>
      <p class="text-h3 text-center pt-3">Síntesis<br /></p>
      <v-container>
        <form @submit.prevent="updateSintesis">
          <v-table theme="light">
            <tbody class="text-justify">
              <tr
                class="font-weight-bold"
                v-for="item in items"
                :key="item.label"
              >
                <td class="w-50">{{ item.label }}</td>
                <td class="w-50">
                  <div v-if="!editing">{{ item.model }}</div>
                  <div v-else>
                    <v-text-field
                      v-if="item.componentType === 'v-text-field'"
                      class="text-field"
                      v-model="item.model"
                    ></v-text-field>
                    <v-radio-group
                      v-if="item.componentType === 'v-radio-group'"
                      inline
                      v-model="item.model"
                    >
                      <v-radio
                        v-for="option in item.options"
                        :key="option.value"
                        :label="option.label"
                        :value="option.value"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-row v-if="editing" flex class="mt-3 pt-3 pb-3">
            <v-col class="text-right">
              <v-btn
                fluid
                prepend-icon="mdi-check-circle"
                rounded="lg"
                type="submit"
                variant="tonal"
                size="x-large"
                color="info"
                >Actualizar</v-btn
              ></v-col
            >
            <v-col class="text-left"
              ><v-btn
                fluid
                prepend-icon="mdi-close"
                rounded="lg"
                variant="tonal"
                size="x-large"
                color="red-darken-4"
                @click="editing = false"
                >Cancelar</v-btn
              ></v-col
            >
          </v-row>
        </form>
      </v-container>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";
import SessionDialog from "../components/SessionDialog.vue";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  components: {
    SessionDialog,
  },
  data: () => ({
    nivel: 0,
    editing: false,
    sintesisData: {
      Programa: "",
      anterior: "",
      Nivel: "",
      Modalidad: "",
      TipoEva: "",
      CampusSede: "",
      Dependencia: "",
      Institucion: "",
      Regimen: "",
      Direccion: "",
      Rector: "",
      ResponsableProg: "",
      ResponsableEva: "",
      FechaAprobacion: "",
      NoRegistroDGP: "",
      NoREVOE: "",
      MatriculaInst: "",
      MatriculaSede: "",
      Periodicidad: "",
      TipoCiclo: "",
      NoCiclos: "",
      CreditosOb: "",
      CreditosOpt: "",
      CreditosTotal: "",
      DenominacionPlan: "",
      OtrosPlanes: "",
      UltimaGeneracion: "",
    },
    items: [
      {
        label: "Nombre del programa educativo vigente (sin abreviaturas)",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Nombre del programa educativo anterior (sin abreviaturas)",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Nivel académico",
        model: "",
        componentType: "v-radio-group",
        options: [
          { label: "T.S.U", value: "T.S.U" },
          { label: "P.A", value: "PA" },
          { label: "Licenciatura", value: "Licenciatura" },
          { label: "Especialidad", value: "Especialidad" },
          { label: "Maestría", value: "Maestría" },
          { label: "Doctorado", value: "Doctorado" },
        ],
      },
      {
        label: "Modalidad",
        model: "",
        componentType: "v-radio-group",
        options: [
          { label: "Escolarizada", value: "Escolarizada" },
          { label: "Mixta", value: "Mixta" },
          { label: "No escolarizada", value: "No escolarizada" },
        ],
      },
      {
        label: "Tipo de evaluación",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Campus/Sede a evaluar",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Dependencia",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Institución (sin abreviaturas)",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Régimen",
        model: "",
        componentType: "v-radio-group",
        options: [
          { label: "Público", value: "Público" },
          { label: "Privado", value: "Privado" },
        ],
      },
      {
        label:
          "Dirección postal (calle, colonia, código postal, municipio o delegación, ciudad y estado)",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Nombre del Rector",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Nombre y cargo del responsable del programa educativo",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Nombre del responsable de la autoevaluación",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Fecha de aprobación del programa educativo (1)",
        model: "",
        componentType: "v-text-field",
      },
      {
        label:
          "Número de registro ante la dirección general de profesiones (1)",
        model: "",
        componentType: "v-text-field",
      },
      {
        label:
          "En su caso, número de reconocimiento de validez oficial de estudios",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Mátricula actual de la institución",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Mátricula actual del programa educativo en la sede a evaluar",
        model: "",
        componentType: "v-text-field",
      },
      {
        label:
          "Periodicidad para nuevo ingreso (anual, semestral, trimestral, etc)",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Tipo de ciclo (trimestral, semestral, anual, etc)",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Número total de ciclos del plan de estudios",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Número de créditos obligatorios",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Número de créditos optativas",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Número de créditos totales",
        model: "",
        componentType: "v-text-field",
      },
      {
        label:
          "Denominación del plan de estudios que cursan los alumnos de primer ciclo",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Otros planes de estudios en operación",
        model: "",
        componentType: "v-text-field",
      },
      {
        label: "Mes y año de egreso de la última generación",
        model: "",
        componentType: "v-text-field",
      },
    ],
  }),

  mounted() {
    this.getSintesisData();
    this.nivel = this.$store.state.auth.level;
  },
  methods: {
    ...mapActions("auth", ["stayConnected", "logOut"]),
    mapDataToItems() {
      Object.keys(this.sintesisData).forEach((key, index) => {
        this.items[index].model = this.sintesisData[key];
      });
    },
    mapItemsToData() {
      this.items.forEach((item, index) => {
        this.sintesisData[Object.keys(this.sintesisData)[index]] = item.model;
      });
    },
    async getSintesisData() {
      try {
        const { data } = await axios.get(
          "api/sintesis/Licenciatura en Ingeniería en Sistemas Computacionales"
        );
        this.sintesisData = data.body;
        this.mapDataToItems();
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
    async updateSintesis() {
      this.mapItemsToData();
      try {
        const { status } = await axios.post("api/sintesis/", this.sintesisData);
        [200, 201].includes(status) &&
          this.getSintesisData() &&
          (this.editing = false);
      } catch (error) {
        console.error("Error updating data", error);
      }
    },
  },
  computed: {
    ...mapState("auth", ["showDialog"]),
    canEdit() {
      return ["1", "2", "3", 1, 2, 3].includes(this.nivel);
    },
  },
};
</script>

<style>
.text-field {
  margin: 8px 0 -16px;
}
</style>
