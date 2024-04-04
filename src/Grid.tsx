import { PropsWithChildren } from 'react';
import './Grid.css';

const Grid: React.FC<PropsWithChildren> = ({
  children,
}) => {
  if (!children) {
    return <div />;
  }

  return (
    <div className="grid">
      {children}
    </div>
  )
}

export default Grid;
