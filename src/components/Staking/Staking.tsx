import React from 'react';
import Card from '../Card';
import StakingDate from './StakingDate';

type Props = {
};

export const Staking: React.FC<Props> = ({}) => {
  return (
    <Card>
      <StakingDate />
    </Card>
  );
}

Staking.defaultProps = {
};

export default Staking;
