import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyle';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle } from './InfoSection.elements';
import { DataInterface } from '../../pages/HomePage/Data';

const InfoSection: React.FC<DataInterface> = ({
	lightBg,
	imgStart,
	lightTopLine,
	topLine,
	lightText,
	headline,
	lightTextDesc,
	description,
	primary,
	buttonLabel
}) => {
	return (
		<React.Fragment>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								<Link to="/sign-up">
									<Button big fontBig primary={primary}>
										{buttonLabel}
									</Button>
								</Link>
							</TextWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</React.Fragment>
	);
};

export default InfoSection;
