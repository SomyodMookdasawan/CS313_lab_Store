<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card>
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="mx-10" cols="12" md="8">
            <v-text-field v-model="namein" label="Name" outlined />
          </v-col>
          <v-col class="mx-10" cols="12" md="8">
            <v-text-field v-model="lastnamein" label="Lastname" outlined />
          </v-col>
          <v-col class="mx-10" cols="12" md="8">
            <v-text-field v-model="usernamein" label="Username" outlined />
          </v-col>
          <v-col class="mx-10" cols="12" md="8">
            <v-text-field v-model="passwordin" label="Password" outlined />
          </v-col>
          <v-col class="mx-10" cols="12" md="8">
            <v-text-field v-model="emailin" label="Email" outlined />
          </v-col>
          <v-col class="mx-10" cols="12" md="8">
            <v-text-field v-model="addressin" label="Address" outlined />
          </v-col>
        </v-row>
      </v-container>
      <v-row
        ><v-col class="ml-10" cols="12">
          <v-btn color="black" class="mr-4 ma-4 mx-10" @click="validate">
            submit
          </v-btn>
          <v-btn color="black" class="mr-4 ma-4 mx-3" @click="reset">
            Reset
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      namein: '',
      lastnamein: '',
      usernamein: '',
      passwordin: '',
      emailin: '',
      addressin: '',
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const name = this.namein
      const lastnamein = this.lastnamein
      const usernamein = this.usernamein
      const passwordin = this.passwordin
      const emailin = this.emailin
      const addressin = this.addressin
      this.$store.commit('input', {
        name,
        lastnamein,
        usernamein,
        passwordin,
        emailin,
        addressin,
      })

      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
