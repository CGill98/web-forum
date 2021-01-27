
const getComments = async (postID) => {

    const result = await fetch(`http://127.0.0.1:4000/api/comments/${postID}`, {
                                mode: 'cors',
                            }).then(res => res.json()).catch(err => {console.log(err); return err})
    
    return result;
}

export default getComments