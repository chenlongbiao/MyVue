import { SIGN_UP } from '../../mutation-types'

const mutations = {
  [SIGN_UP] (state, res) {
    // state.signup_states = list
    state.signUpstate = res.resState
    // console.log(this.$store.state.logins.signUpstate)
  }
}

export default mutations
