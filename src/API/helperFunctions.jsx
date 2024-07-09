const getThreeItems = async () => {
    let ids = [];
    for (let i = 0; i < 3; i++) {
        let id = Math.floor(Math.random() * 20);
        const responce = await fetch(`${process.env.REACT_APP_API_ENDPOINT}products/${id}`)
        .then(data => data.json());

        ids.push(responce);
    }

    return ids;
}


export {getThreeItems};