const initialData = {
    list: []
}
const submitdatareducer = (state = initialData, action) => {
    switch (action.type) {
        case 'Submitdata':
            const { id, username,password } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        username: username,
                        password:password
                    }
                ]
            }
            default :
            return state;

    }
}

export default submitdatareducer;