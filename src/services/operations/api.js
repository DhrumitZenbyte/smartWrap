const BASE_URL = "https://api.smartwrapfilms.com"

// PROFILE ENDPOINTS
export const profileEndpoints = {
    GET_PROFILE_DETAILS_API: BASE_URL + "/api/company-profile-get",
    POST_PROFILE_API: BASE_URL + "/api/company-profile",
}

export const productEndpoints = {
    ADD_PRODUCT_API: BASE_URL + "/api/products",
    GET_PRODUCTS_API: BASE_URL + "/api/products",
    EDIT_PRODUCTS_API: (id) => `${BASE_URL}/api/products/${id}`,
    DELETE_PRODUCT_API: (id) => `${BASE_URL}/api/products/${id}`,
}

export const sizeEndpoints = {
    ADD_SIZE_API: BASE_URL + "/api/sizes",
    GET_SIZES_API: BASE_URL + "/api/sizes",
    DELETE_SIZES_API: (id) => `${BASE_URL}/api/sizes/${id}`,
}

export const rawEndpoints = {
    ADD_RAW_MATERIAL_API: BASE_URL + "/api/company-raw-material",
    GET_RAW_MATERIALS_API: BASE_URL + "/api/company-raw-material",
    UPDATE_RAW_MATERIAL_API: (id) => `${BASE_URL}/api/company-raw-material/${id}`,
    DELETE_RAW_MATERIAL_API: (id) => `${BASE_URL}/api/company-raw-material/${id}`,
}


export const finishGoodsEndpoints = {
    ADD_FINISH_GOODS_API: `${BASE_URL}/api/finish-goods`,
}


export const authEndpoints = {
    LOGIN_URL: `${BASE_URL}/api/login`,
}