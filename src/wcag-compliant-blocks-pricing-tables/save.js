import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { __, sprintf } from '@wordpress/i18n';

export default function save({ attributes }) {
	const { tiers } = attributes;
	
	return (
		<div { ...useBlockProps.save() }>
			<section className="wp-block-wcag-compliant-blocks-pricing-tables" aria-label={ __( 'Pricing plans', 'wcag-compliant-blocks-pricing-tables' ) }>
				{ /* A screen-reader-only heading provides a clear title for the section. */ }
				<h2 class="screen-reader-text">{ __( 'Choose your plan', 'wcag-compliant-blocks-pricing-tables' ) }</h2>
				{ /* The main container for all pricing tiers. role="region" and aria-label identify this section for screen reader users in order to navigate to it easily. */ }
				<div class="pricing-tables-container" role="region" aria-label={ __( 'Pricing tables', 'wcag-compliant-blocks-pricing-tables' ) }>
				{ /* Each pricing tier is an independent "article". The aria-labelledby attribute links the tier to its specific title for clear context. */ }
				{tiers.map((tier, index) => (
					<div key={index} className={`pricing-tier ${tier.featured_table ? 'featured' : ''}`} role="article" aria-labelledby={`plan-${index}-${tier.name.replace(/\s+/g, '-').toLowerCase()}`} {...(tier.featured_table ? { 'aria-current': 'true' } : {})}>
						<h3 id={`plan-${index}-${tier.name.replace(/\s+/g, '-').toLowerCase()}`}>{tier.name}</h3>
						<div className="price">{tier.price}</div>
						<RichText.Content
							tagName="div"
							className="description"
							value={tier.description}
						/>
						{tier.features && tier.features.length > 0 && (
							<ul className="features-list">
								{tier.features.map((feature, index) => (
									<li key={index}>{feature.text}</li>
								))}
							</ul>
						)}
						{tier.buttonUrl && (
							<a href={tier.buttonUrl} className="button" aria-label={tier.buttonText}>
								{tier.buttonText}
							</a>
						)}
					</div>
				))}
				</div>
			</section>
		</div>
	);
}
