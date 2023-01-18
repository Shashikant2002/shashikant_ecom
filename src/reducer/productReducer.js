const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "SET_API_DATA":
            const featureProducts = action.payload.filter((curEle) => { return curEle.featured === true });
            return {
                ...state,
                isLoading: false, 
                isError: false,
                product: action.payload,
                featureProducts: featureProducts
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            return state

    }
}

export default ProductReducer;