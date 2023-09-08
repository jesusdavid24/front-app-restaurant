import { useState, useEffect } from 'react';
import { Slider } from '@mantine/core';
import '../../styles/variables.scss';
import './index.scss';

const MenuSlider = ({ search, filterObejct, setFilterObejct, cost }) => {
  const [sliderValue, setSliderValue] = useState(100);

  useEffect(() => {
    setSliderValue(cost);
  }, [search]);

  const handleSliderChange = (value, cost) => {
    setSliderValue(value);
    setFilterObejct({
      ...filterObejct,
      cost: filterObejct[cost] == `&cost=${value}` ? '' : `&cost=${value}`,
    });
  };

  return (
    <div>
      <Slider
        id={sliderValue}
        name='cost'
        value={sliderValue ? sliderValue : 100}
        onChange={handleSliderChange}
        color='red'
        size='sm'
        radius='xs'
        showLabelOnHover={false}
        labelAlwaysOn
        min={0}
        max={100}
        step={10}
        label={(value) =>
          value == 0 ? `$${value}` : value >= 20 ? `$${value}` : null
        }
        styles={{
          label: {
            backgroundColor: 'var(--primary-accent)',
            fontWeight: '700',
          },
        }}
        marks={
          sliderValue == 10
            ? [{ value: 10, label: '$0 - $10' }]
            : sliderValue == 0
            ? [{ value: 0, label: '' }]
            : sliderValue >= 20
            ? [{ value: 0, label: '$0' }]
            : [{ value: 100, label: '' }]
        }
        thumbChildren={<i className='bi-heart-fill slider__thumb' />}
        thumbSize={30}
      />
    </div>
  );
};

export default MenuSlider;
