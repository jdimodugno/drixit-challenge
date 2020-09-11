import React, { FC } from 'react';
import styled from 'styled-components';
import IconSizes from '../Icon/IconSizes';
import { IIconProps } from '../Icon/IconProps';

const StyledIconCaret = styled.div`
	> .rotate {
		transform: rotate(180deg);
	}
`;

interface IIconCaretProps extends IIconProps {
	rotate?: boolean;
}

const IconCaret: FC<IIconCaretProps> = ({
	size = 'small',
	fill,
	rotate = false,
}) => (
	<StyledIconCaret>
		<svg
			viewBox="0 0 20 20"
			width={IconSizes[size].w}
			height={IconSizes[size].h}
			fill={fill}
			className={`${rotate ? 'rotate' : ''}`}
		>
			<path
				fillRule="evenodd"
				d="M14.335 14H5.683c-1.473 0-2.292-1.744-1.137-2.762l4.326-3.814a1.737 1.737 0 012.274 0l4.326 3.814c1.155 1.018.336 2.762-1.137 2.762zM10.01 9.088H6.706z"
			/>
		</svg>
	</StyledIconCaret>
);

export default IconCaret;