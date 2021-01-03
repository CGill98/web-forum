const register = (event, state) => {
    const value = state;
    console.log(value)

    fetch(`http://127.0.0.1:4000/api/register/${JSON.stringify(value)}`, {
        method: 'POST',
        mode: 'cors'
    }).then(res => console.log(res.text()))
      .catch(err => console.log(err))

    event.preventDefault()

}

export default register
