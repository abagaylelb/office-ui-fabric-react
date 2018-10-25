import * as React from 'react';
import { css, classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { getStyles, IButtonBasicExampleStyleProps, IButtonBasicExampleStyles } from './Button.Basic.Example.styles';
import { CopyButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

export class ButtonCopyExample extends React.Component<IButtonProps> {
  public constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    const { disabled, checked } = this.props;

    const getClassNames = classNamesFunction<IButtonBasicExampleStyleProps, IButtonBasicExampleStyles>();
    const classNames = getClassNames(getStyles, {});

    return (
      <div className={css(classNames.example)}>
        <CopyButton data-automation-id="test" allowDisabledFocus={true} disabled={disabled} checked={checked} copyText="Copy Me" />
      </div>
    );
  }
}
