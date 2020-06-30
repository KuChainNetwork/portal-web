import { post } from 'utils/request';

export const applyForTestFunds = async (data) => {
  return await post(`/portal-web/api/applyForTestFunds`, data);
};
