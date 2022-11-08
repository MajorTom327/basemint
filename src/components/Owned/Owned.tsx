import React from 'react';
import { useOwning } from '../../hooks/useOwning';
import useStacking from '../../hooks/useStacking';
import Button from '../Button/Button';
import Card from '../Card';
import OwnedItem from './OwnedItem';

type Props = {
};

export const Owned: React.FC<Props> = ({}) => {
  const { ownedToken } = useOwning();
  const { stackTokens} = useStacking();

  const onStackTokens = () => {
    stackTokens((ownedToken || []).map((token) => token.id));
  }

  const hasAnyStaking = ownedToken?.some((token) => token.currentStakeTimestamp !== 0);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ownedToken.map((token) => (
          <OwnedItem key={token.id} token={token} />
        ))}
      </div>

      {!hasAnyStaking && ownedToken.length > 0 && (
        <Button onClick={onStackTokens}>Stack it</Button>
      )}
    </>
  );
}

Owned.defaultProps = {
};

export default Owned;
