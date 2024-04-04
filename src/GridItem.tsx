import { PropsWithChildren } from 'react';
import './GridItem.css';

const GridItem: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="grid-item">
      {children}
    </div>
  )
}

export default GridItem;
