import * as React from 'react';
import { BaseButton } from '../BaseButton';
import { BaseComponent, customizable, nullRender } from '../../../Utilities';
import { IButtonProps } from '../Button.types';
import { getStyles } from './CopyButton.styles';

const copy = require('clipboard-copy');

@customizable('CopyButton', ['theme', 'styles'], true)
export class CopyButton extends BaseComponent<IButtonProps, {}> {
  /**
   * Tell BaseComponent to bypass resolution of componentRef.
   */

  protected _skipComponentRefResolution = true;

  public render(): JSX.Element {
    const { styles, theme } = this.props;

    return (
      <BaseButton
        {...this.props}
        variantClassName="ms-Button--copy"
        styles={getStyles(theme!, styles)}
        iconProps={{ iconName: 'Copy' }}
        onRenderText={nullRender}
        onRenderDescription={nullRender}
        onClick={this._copyTextClick}
      />
    );
  }

  // Copies text property to the clipboard.
  private _copyTextClick = (): void => {
    if (this.props && this.props.copyText) {
      copy(this.props.copyText);
    }
    return;
  };
}
