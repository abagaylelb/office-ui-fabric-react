import * as React from 'react';
import { IFolderCoverProps, FolderCoverSize, FolderCoverType } from './FolderCover.types';
import { ISize, css } from '../../Utilities';
import * as FolderCoverStylesModule from './FolderCover.scss';
import * as SignalStylesModule from '../signals/Signal.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

// tslint:disable-next-line:no-any
const FolderCoverStyles = FolderCoverStylesModule as any;
// tslint:disable-next-line:no-any
const SignalStyles = SignalStylesModule as any;

export interface IFolderCoverState {
  // TODO Add animation support for drag/drop events.
}

const enum FolderCoverLayoutValues {
  smallWidth = 72,
  smallHeight = 52,
  largeWidth = 112,
  largeHeight = 80,
  contentPadding = 4
}

const SIZES: { [P in FolderCoverSize]: ISize } = {
  small: {
    width: FolderCoverLayoutValues.smallWidth - FolderCoverLayoutValues.contentPadding * 2,
    height: FolderCoverLayoutValues.smallHeight - FolderCoverLayoutValues.contentPadding * 2
  },
  large: {
    width: FolderCoverLayoutValues.largeWidth - FolderCoverLayoutValues.contentPadding * 2,
    height: FolderCoverLayoutValues.largeHeight - FolderCoverLayoutValues.contentPadding * 2
  }
};

const ASSETS: {
  [P in FolderCoverSize]: {
    [T in FolderCoverType]: {
      back: string;
      front: string;
    }
  }
} = {
  small: {
    default: {
      back: `folderCoverSmallDefaultBack`,
      front: `folderCoverSmallDefaultFront`
    },
    media: {
      back: `folderCoverSmallMediaBack`,
      front: `folderCoverSmallMediaFront`
    }
  },
  large: {
    default: {
      back: `folderCoverLargeDefaultBack`,
      front: `folderCoverLargeDefaultFront`
    },
    media: {
      back: `folderCoverLargeMediaBack`,
      front: `folderCoverLargeMediaFront`
    }
  }
};

export class FolderCover extends React.Component<IFolderCoverProps, IFolderCoverState> {
  public render(): JSX.Element | null {
    const {
      folderCoverSize: size = 'large',
      folderCoverType: type = 'default',
      hideContent = false,
      ref,
      metadata,
      signal,
      children,
      ...divProps
    } = this.props;

    const assets = ASSETS[size][type];

    return (
      <div
        {...divProps}
        className={css(FolderCoverStyles.root, {
          [`ms-FolderCover--isSmall ${FolderCoverStyles.isSmall}`]: size === 'small',
          [`ms-FolderCover--isLarge ${FolderCoverStyles.isLarge}`]: size === 'large',
          [`ms-FolderCover--isDefault ${FolderCoverStyles.isDefault}`]: type === 'default',
          [`ms-FolderCover--isMedia ${FolderCoverStyles.isMedia}`]: type === 'media',
          [`ms-FolderCover--hideContent ${FolderCoverStyles.hideContent}`]: hideContent
        })}
      >
        <Icon aria-hidden={true} className={css('ms-FolderCover-back', FolderCoverStyles.back)} iconName={assets.back} />
        {children ? (
          <span className={css('ms-FolderCover-content', FolderCoverStyles.content)}>
            <span className={css('ms-FolderCover-frame', FolderCoverStyles.frame)}>{children}</span>
          </span>
        ) : null}
        <Icon aria-hidden={true} className={css('ms-FolderCover-front', FolderCoverStyles.front)} iconName={assets.front} />
        {signal ? <span className={css('ms-FolderCover-signal', FolderCoverStyles.signal, SignalStyles.dark)}>{signal}</span> : null}
        {metadata ? <span className={css('ms-FolderCover-metadata', FolderCoverStyles.metadata)}>{metadata}</span> : null}
      </div>
    );
  }
}

export interface IFolderCoverLayout {
  contentSize: ISize;
}

export function getFolderCoverLayout(element: JSX.Element): IFolderCoverLayout {
  const folderCoverProps: IFolderCoverProps = element.props;

  const { folderCoverSize = 'large' } = folderCoverProps;

  return {
    contentSize: SIZES[folderCoverSize]
  };
}

export function renderFolderCoverWithLayout(element: JSX.Element, props: Partial<IFolderCoverProps>): JSX.Element {
  const Tag = element.type;

  return <Tag {...element.props} {...props} />;
}
