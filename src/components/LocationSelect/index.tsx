import React, { useMemo, useRef } from 'react';
import type { CascaderProps } from '@hankliu/hankliu-ui';
import { Cascader } from '@hankliu/hankliu-ui';
import locationData from './location';

interface ILocationSelectProps extends Omit<CascaderProps, 'onChange' | 'children' | 'multiple'> {
  onChange: (value?: string[], name?: string[]) => void;
}

const LocationSelect = ({
  options,
  expandTrigger = 'hover',
  placeholder = '省市 / 城市',
  size = 'large',
  value = [],
  onChange = () => {},
  ...props
}: ILocationSelectProps) => {
  const locationCacheRef = useRef<Record<string, any>>();

  function convertLocationListToTree(list) {
    let result = [];
    const locationOptions = JSON.parse(JSON.stringify(list));
    const locationCache = {};
    locationOptions.forEach((item) => (locationCache[item.id] = item));
    locationCacheRef.current = locationCache;

    locationOptions.forEach((item) => {
      item.label = item.name;
      item.value = item.id;
      // 只展示国内的
      if (item.superId === 1) {
        result.push(item);
      } else if (item.superId) {
        let parent = locationCache[item.superId];
        if (!parent.children) parent.children = [];
        parent.children.push(item);
      }
    });
    return result;
  }

  const cascaderOptions = useMemo(() => {
    return options || convertLocationListToTree(locationData);
  }, [options]);

  return (
    <Cascader
      className="location-select-cascader !w-full"
      options={cascaderOptions}
      size={size}
      placeholder={placeholder}
      expandTrigger={expandTrigger}
      value={value}
      onChange={(val) => {
        onChange(val, val ? val.map((key) => locationCacheRef.current[key]?.label) : undefined);
      }}
      {...props}
    />
  );
};

export default LocationSelect;
