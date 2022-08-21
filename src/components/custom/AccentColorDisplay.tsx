import {
  Root as Checkbox,
  Indicator as CheckboxIndicator,
} from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import {
  Root as Progress,
  Indicator as ProgressIndicator,
} from '@radix-ui/react-progress';
import { FC, useState } from 'react';

const AccentColorDisplay: FC = () => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(true);

  return (
    <div className="pb-0.5">
      <fieldset className="m-4 border-2 border-accent p-4">
        <legend className="px-2">Accent Color Display</legend>
        <div className="flex gap-8 [&>*]:flex [&>*]:w-32 [&>*]:flex-col [&>*]:justify-between ">
          <label>
            <div>Progress</div>
            <Progress
              className="h-4 w-full overflow-hidden bg-accent-background"
              value={66}
            >
              <ProgressIndicator
                className="h-full w-full bg-accent"
                style={{ transform: `translateX(-${100 - 66}%)` }}
              />
            </Progress>
          </label>

          <label>
            <div>Checkbox</div>
            <Checkbox
              className="h-4 w-4 bg-accent"
              checked={checked}
              onCheckedChange={setChecked}
            >
              <CheckboxIndicator className="text-accent-background">
                {checked === true && <CheckIcon />}
              </CheckboxIndicator>
            </Checkbox>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default AccentColorDisplay;
