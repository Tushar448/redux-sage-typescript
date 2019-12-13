const DATA_Start = "DATA_START";

export function getLoginData() {
  return { type: DATA_Start };
}

getLoginData.toString = () => DATA_Start;

export function requestDataSuccess(data: any) {
  return { type: "DATA_SUCCESS", data: data.data.results };
}

export function requestDataFailure(e: any) {
  return { type: "DATA_FAILURE", error: e };
}
