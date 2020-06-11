import { post } from 'utils/request';
import { v2ApiHosts } from 'config';
const { KUCHAIN_JS_API_SERVER } = v2ApiHosts;
export const applyForTestFunds = async (data) => {
  return await post(`${KUCHAIN_JS_API_SERVER}/portal-web/api/applyForTestFunds`, data);
};
