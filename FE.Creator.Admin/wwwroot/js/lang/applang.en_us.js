﻿var AppLang = {
    lang: "English",
    getFormatString : function(format, params){
        if (params == null || params.length == 0) {
            return format;
        }

        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof params[number] != 'undefined'
                   ? params[number]
                   : match;
        });
    },
    COMMON_EDIT_SAVE_SUCCESS: "Change Saved！",
    COMMON_EDIT_SAVE_FAILED: "Change Faild: ",
    COMMON_DELETE_FAILED: "Delete Faild: ",
    COMMON_DLG_TITLE_ERROR: "Error",
    COMMON_DLG_TITLE_WARN: "Warn",
    INDEX_YOY_STATICS_REPORT: "YOY Statics Report",
    INDEX_SUBTXT_PBD : "Post, Diary and Books",
    INDEX_AVG_PROGRESS_REPORT: "Average Progress Report",
    INDEX_SUBTXT_TT: "Target and Task",
    INDEX_REPORT_NAME_AVG: "Average",
    INDEX_SUBTXT_IMG: "Images",
    INDEX_REPORT_NAME_POST: "Post",
    INDEX_REPORT_NAME_BOOK: "Book",
    INDEX_REPORT_NAME_DIARY: "Diary",
    INDEX_REPORT_NAME_IMGS: "Images",
    INDEX_REPORT_NAME_TARGET: "Target",
    INDEX_REPORT_NAME_TASK: "Task",
    INDEX_PROVIDER_MESSAGE_FMT: "You have {0} messages",
    INDEX_EVENT_COUNTER_MSG_FMT: "You have {0} more latest events", 
    INDEX_TASK_FMT : "You have {0} more tasks",
    BOOK_INDEX_ROOT_FOLDER: "Home",
    BOOK_INDEX_NEW_FOLDER: "New Folder",
    BOOK_INDEX_NEW_DOCUMENT: "New Document",
    BOOK_BTN_NEW_CATEGORY: "New",
    BOOK_LBL_NEW_BOOK: "New Book",
    BOOK_LBL_NEWCATEGORY: "New Category",
    ACCOUNT_FIELD_NEW_REC: "New Account Record",
    IMAGEMGR_STD_LIST: "Standard List",
    IMAGEMGR_SLD_SHOW: "Slide Show",
    IMAGEMGR_WATER_FLOW: "Walter Flow",
    IMAGEMGR_NEW_ALBUM: "New album",
    IMAGEMGR_NEW_IMAGE: "New Image",
    IMAGEMGR_UPLOAD_ERR_MSG: "{0} of {1} images was failed to be uploaded",
    IMAGEMGR_VIEW_LOAD_ERROR: "Cann't load the image!",
    POST_NEW_POST: "New Post",
    POST_NEW_GROUP: "New Group",
    DIARY_WEATHER_SUNNY: "sunny",
    DIARY_WEATHER_CLOUDY: "cloudy",
    DIARY_WEATHER_CLOUDY_GUSTS: "cloudy gusts",
    DIARY_WEATHER_CLOUDY_WINDY: "cloudy windy",
    DIARY_WEATHER_FOG: "fog",
    DIARY_WEATHER_RAIN: "rain",
    DIARY_WEATHER_WINDY: "windy",
    DIARY_WEATHER_STORM: "thunder storm",
    DIARY_PREFIX_DIARY: "Diary ",
    PROFILE_CHANGE_FAILED: "Change failed: {0}",
    USERMGR_PASS_SAVE_DONE: "Password Reset Done",
    DATA_CUST_FIELD_FILE: "File Upload Field Name",
    DATA_CUST_FIELD_FILE_KEY: "File Upload Key Code",
    DATA_CUST_FIELD_OBJ_REF: "Table Data Reference Field Name",
    DATA_CUST_FIELD_OBJ_REF_KEY: "Table Data Reference Key Code",
    DATA_CUST_FIELD_SL: "Single Selection Field Name",
    DATA_CUST_FIELD_SL_KEY: "Single Selection Key Code",
    DATA_CUST_FIELD_STRING: "String Feild Name",
    DATA_CUST_FIELD_STRING_KEY: "String Key Code",
    DATA_CUST_FIELD_INTEGER: "Integer Feild Name",
    DATA_CUST_FIELD_INTEGER_KEY: "Integer Key Code",
    DATA_CUST_FIELD_LONG: "Long Field Name",
    DATA_CUST_FIELD_LONG_KEY: "Long Key Code",
    DATA_CUST_FIELD_DATETIME: "Datetime Field Name",
    DATA_CUST_FIELD_DATETIME_KEY: "Datetime Key Code",
    DATA_CUST_FIELD_NUMBER: "Number Field Name",
    DATA_CUST_FIELD_NUMBER_KEY: "Number Key Code",
    DATA_CUST_SL_ITEM: "New Choice Item",
    DATA_CUST_SL_ITEM_KEY: "New Choice Item Key Code",
    DATA_CUST_FILE_TYPE: "File",
    DATA_CUST_OBJREF_TYPE: "Reference",
    DATA_CUST_SL_TYPE: "Select",
    DATA_CUST_STRING_TYPE: "String",
    DATA_CUST_INTEGER_TYPE: "Integer",
    DATA_CUST_LONG_TYPE_TYPE: "Long",
    DATA_CUST_DATETIME_TYPE: "DateTime",
    DATA_CUST_NUMBER_TYPE: "Number",
    DATA_CUST_UNKNOWN_TYPE: "Unknown"
}