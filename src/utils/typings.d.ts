// @ts-ignore
/* eslint-disable */

declare namespace BaseApi {
  // SaaS 基础返回结构
  export type Response<T = any> = {
    XCmdrCode: number;
    XCmdrMessage: string;
    XCmdrResult: T;
  };
}
