import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { tiers } = attributes;
	
	return (
		<div { ...useBlockProps.save() }>
			<div className="wp-block-wcag-compliant-blocks-pricing-tables">
				{tiers.map((tier, index) => (
					<div key={index} className={`pricing-tier ${tier.featured_table ? 'featured' : ''}`}>
						<h3>{tier.name}</h3>
						<div className="price">{tier.price}</div>
						<RichText.Content
							tagName="div"
							className="description"
							value={tier.description}
						/>
						{tier.buttonUrl && (
							<a href={tier.buttonUrl} className="button">
								{tier.buttonText}
							</a>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
