import { DateTime } from 'luxon';
import React from 'react';
import useStacking from '../../hooks/useStacking';

type Props = {
};

export const StakingDate: React.FC<Props> = ({}) => {
  const { stackingStart } = useStacking();
  return (
    <div className='flex flex-col gap-2'>
      <div className="text-3xl font-bold">{stackingStart.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}</div>
      <div className="text-xl font-semibold">{stackingStart.toRelative()}</div>
    </div>
  );
}

StakingDate.defaultProps = {
};

export default StakingDate;
