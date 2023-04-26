import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { selectFilters } from '../store/filters/filter-selectors';
import { removeFilter, clearFilter } from '../store/filters/filter-actions';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilters.map((item) => (
            <Badge
              onClear={() => dispatch(removeFilter(item))}
              key={item}
              variant='clearable'
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className='link'>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
