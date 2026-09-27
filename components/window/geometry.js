// 恢复尺寸始终从完整默认值补齐，不能合并到当前的最小化尺寸上。
export const completeParams = (params, defaults) => Object.fromEntries(
  Object.keys(defaults).map((key) => {
    const value = params?.[key];
    const valid = (typeof value === 'number' && Number.isFinite(value))
      || (typeof value === 'string' && value.trim() !== '');
    return [key, valid ? value : defaults[key]];
  }),
);

export const updateGeometry = (state, action) => {
  if (action.type === 'resize') {
    return { ...state, params: completeParams(action.params, state.params) };
  }

  const { isMin, isMax, minParams, maxParams } = action;

  if (state.isMin === isMin && state.isMax === isMax) {
    return state;
  }

  // 先处理最小化下面的窗口，再决定是否显示最小化尺寸。
  let params = completeParams(
    state.isMin ? state.beforeMin : state.params, state.defaults,
  );
  let { beforeMax } = state;

  if (state.isMax !== isMax) {
    if (isMax) {
      beforeMax = { ...params };
      params = completeParams(maxParams, {
        width: '100%', height: '100%', offsetX: 0, offsetY: 0,
      });
    } else {
      params = completeParams(beforeMax, state.defaults);
      beforeMax = null;
    }
  }

  const beforeMin = isMin ? { ...params } : null;

  if (isMin) {
    // 已最小化时切换最大化，仅更新恢复目标。
    params = state.isMin ? state.params : completeParams(minParams, params);
  }

  return { ...state, isMin, isMax, params, beforeMin, beforeMax };
};

export const createGeometry = ({ defaults, ...action }) => updateGeometry({
  defaults,
  params: { ...defaults },
  isMin: false,
  isMax: false,
  beforeMin: null,
  beforeMax: null,
}, action);
