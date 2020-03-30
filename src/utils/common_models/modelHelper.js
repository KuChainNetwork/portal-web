/**
 * avoid take(namespace/effect) warning
 * @param actionWithNameSpace
 * @returns {function(*): boolean}
 */
export const genCompare = (actionWithNameSpace) => {
  return (action) => {
    return action.type === actionWithNameSpace;
  };
};
