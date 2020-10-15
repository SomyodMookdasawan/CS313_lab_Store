export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Lastname', value: 'lastnamein' },
    { text: 'Username', value: 'usernamein' },
    { text: 'Password', value: 'passwordin' },
    { text: 'Email', value: 'emailin' },
    { text: 'Address', value: 'addressin' },
  ],
})
export const mutations = {
  input(
    state,
    { name, lastnamein, usernamein, passwordin, emailin, addressin }
  ) {
    state.data.push({
      name,
      lastnamein,
      usernamein,
      passwordin,
      emailin,
      addressin,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
