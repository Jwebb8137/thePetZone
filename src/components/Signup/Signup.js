import React from 'react'

const Signup = () => {
  // function for validating matching passwords
  const validateRepeatPassword = () => {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return 'Passwords do not match';
    }
  }

  return (
    <form></form>
  )
}

export default Signup