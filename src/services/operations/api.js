// const BASE_URL = "https://api.smartwrapfilms.com"
// aws deployed url
const BASE_URL = "http://3.109.158.73/smartwrap-api/public"

// PROFILE ENDPOINTS
export const profileEndpoints = {
    GET_PROFILE_DETAILS_API: BASE_URL + "/api/company-profile-get",
    POST_PROFILE_API: BASE_URL + "/api/company-profile",

    //bank endpoints 
    ADD_BANK_DETAILS: BASE_URL + "/api/banks",
    GET_BANK_DETAILS: BASE_URL + "/api/banks"
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
    EDIT_SIZES_API: (id) => `${BASE_URL}/api/sizes/${id}`,
    DELETE_SIZES_API: (id) => `${BASE_URL}/api/sizes/${id}`,
}

export const rawEndpoints = {
    ADD_RAW_MATERIAL_API: BASE_URL + "/api/company-raw-material",
    GET_RAW_MATERIALS_API: BASE_URL + "/api/company-raw-material",
    UPDATE_RAW_MATERIAL_API: (id) => `${BASE_URL}/api/company-raw-material/${id}`,
    DELETE_RAW_MATERIAL_API: (id) => `${BASE_URL}/api/company-raw-material/${id}`,
    FETCH_GRADE_BY_COMPANY_NAME: BASE_URL + "/api/fetch_grade_by_company_name"
}


export const finishGoodsEndpoints = {
    ADD_FINISH_GOODS_API: `${BASE_URL}/api/finish-goods`,
    GET_FINISH_GOODS_API: `${BASE_URL}/api/finish-goods`,
    
    PUT_FINISH_GOODS_API: (id) => `${BASE_URL}/api/finish-goods/${id}`,
    DELETE_FINISH_GOODS_API: (id) => `${BASE_URL}/api/finish-goods/${id}`,
}

export const dashboardndpoints = {
    DASHBOARD_API: `${BASE_URL}/api/dashboard`
}


export const authEndpoints = {
    LOGIN_URL: `${BASE_URL}/api/login`,
}