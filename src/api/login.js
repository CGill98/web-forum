const login = async (event, state) => {
    event.preventDefault()

    return await fetch(`http://127.0.0.1:4000/api/login/${JSON.stringify(state)}`, {
                                method: 'GET',
                                mode: 'cors'
                            }).then(res => res.json())
                              .catch(err => {console.log(err); return err})

}

export default login