import { FC } from 'react';

const AccentColorDisplay: FC = () => {
  return (
    <div>
      <p className="notice">
        Your browser does not support the <code>accent-color</code> property.
      </p>
      <progress id="progress" max="100" value="50">
        Progress
      </progress>
    </div>
  );
};

export default AccentColorDisplay;
