<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="success">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>

          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <v-menu max-width="290">
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="formattedDate"
                v-on="on"
                label="Due date"
                prepend-icon="mdi-calendar"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import db from "@/fb"

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false
    };
  },
  methods: {
    submit() {
        if(this.$refs.form.validate()) {

            this.loading = true;

            console.log(this.title, this.content, this.due);
            const project = {
                title: this.title,
                content: this.content,
                due: format(parseISO(this.due), "dd MMM yyyy"),
                person: "EinUnknown",
                status: "ongoing"
            }

            db.collection("projects").add(project).then(() => {
                console.log("added to db");
                this.loading = false;
                this.dialog = false;
                this.$emit("projectAdded")
            });
        }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "dd MMM yyyy") : "";
    },
  },
};
</script>

<style scoped></style>
