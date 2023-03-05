const authReducer = (state={data:null}, action)=>{

    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile', JSON.stringify({...action?.data}))
            return {data: action?.data};
        case 'LOGOUT':
            localStorage.clear();
            return {data: null}
        default:
            return state;
    }

}

export default authReducer