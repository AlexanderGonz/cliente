export * from "./listsActions"
export * from "./cardsActions"
export * from "./boardActions"
export * from "./loginActions"
export * from "./usersActions"
export * from "./usersCompanyActions"

export const CONSTANTS = {
  ADD_CARD: "ADD_CARD",
  ADD_BOARD: "ADD_BOARD",
  ADD_LIST: "ADD_LIST",
  EDIT_CARD: "EDIT_CARD",
  EDIT_LIST_TITLE: "EDIT_LIST_TITLE",
  EDIT_BOARD_TITLE: "EDIT_BOARD_TITLE", 
  DELETE_CARD: "DELETE_CARD",
  DELETE_LIST: "DELETE_LIST",
  DELETE_BOARD: "DELETE_BOARD",
  DRAG_HAPPENED: "DRAG_HAPPENED",
  SET_ACTIVE_BOARD: "SET_ACTIVE_BOARD",
  SET_USER: "SET_USER",
  SET_LOGIN: "SET_LOGIN",
  LOGOUT: "LOGOUT",
  FETCH_BOARDS_REQUEST: "FETCH_BOARDS_REQUEST",
  FETCH_BOARDS_SUCCESS: "FETCH_BOARDS_SUCCESS",
  FETCH_BOARDS_ERROR: "FETCH_BOARDS_ERROR",
  FETCH_LISTS_REQUEST: "FETCH_LISTS_REQUEST",
  FETCH_LISTS_SUCCESS: "FETCH_LISTS_SUCCESS",
  FETCH_LISTS_ERROR: "FETCH_LISTS_ERROR",
  FETCH_CARDS_REQUEST: "FETCH_CARDS_REQUEST",
  FETCH_CARDS_SUCCESS: "FETCH_CARDS_SUCCESS",
  FETCH_CARDS_ERROR: "FETCH_CARDS_ERROR",
  FETCH_USERS_REQUEST: "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR: "FETCH_USERS_ERROR",
  FETCH_USERS_COMPANY_REQUEST: "FETCH_USERS_COMPANY_REQUEST",
  FETCH_USERS_COMPANY_SUCCESS: "FETCH_USERS_COMPANY_SUCCESS",
  FETCH_USERS_COMPANY_ERROR: "FETCH_USERS_COMPANY_ERROR",
  ADD_USER_TO_BOARD: "ADD_USER_TO_BOARD",
  REMOVE_USER_FROM_BOARD: "REMOVE_USER_FROM_BOARD"
};