export const DEFAULT_NAMESPACE = 'a';
export const STATE_PREFIX = 'is';
export const useNamespace = (namespace) => {
  return {
    b() {
      return `${DEFAULT_NAMESPACE}-${namespace}`;
    },
    is(state, name) {
      return name && state ? `${STATE_PREFIX}-${name}` : '';
    },
    m(suffix) {
      if (suffix) {
        return `${DEFAULT_NAMESPACE}-${namespace}-${suffix}`;
      }
      return '';
    },
    sy(data, label) {
      return {
        [label]: data
      };
    },
    is_sy(is, one, two) {
      if (!two) {
        if (is)
          return one;
        return {};
      }
      if (is) {
        return one;
      }
      else {
        return two;
      }
    }
  };
};