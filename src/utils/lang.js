import {
  formatMessage,
  // formatHTMLMessage,
  setLocale,
  // FormattedMessage,
  FormattedHTMLMessage,
} from 'umi-plugin-locale';

export const _t = (key, values) => {
  // return (
  //   <FormattedMessage
  //     id={key}
  //     values={values}
  //   />
  // )
  return formatMessage({ id: key }, values);
};

export const _tHTML = (key, values) => {
  return <FormattedHTMLMessage id={key} values={values} />;
  // return formatHTMLMessage({ id: key }, values);
};

export const setLang = (localeKey, realReload = true) => {
  setLocale((localeKey || '').replace('_', '-'), realReload);
};
