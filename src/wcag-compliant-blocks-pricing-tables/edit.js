/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, RangeControl, ToggleControl, Icon, SelectControl } from '@wordpress/components';
import { arrowUp, arrowDown, plus, trash } from '@wordpress/icons';
import { RichText, URLInput } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { tiers } = attributes;

	const updateTierProperty = (index, property, value) => {
		const newTiers = [...tiers];
		newTiers[index][property] = value;
		setAttributes({ tiers: newTiers });
	};

	const updateFeatureProperty = (tierIndex, featureIndex, property, value) => {
		const newTiers = [...tiers];
		newTiers[tierIndex].features[featureIndex][property] = value;
		setAttributes({ tiers: newTiers });
	};

	const addFeature = (tierIndex) => {
		const newTiers = [...tiers];
		if (!newTiers[tierIndex].features) {
			newTiers[tierIndex].features = [];
		}
		newTiers[tierIndex].features.push({
			text: __('New Feature', 'wcag-compliant-blocks-pricing-tables'),
			isExcluded: false
		});
		setAttributes({ tiers: newTiers });
	};

	const removeFeature = (tierIndex, featureIndex) => {
		const newTiers = [...tiers];
		newTiers[tierIndex].features.splice(featureIndex, 1);
		setAttributes({ tiers: newTiers });
	};

	const moveFeatureUp = (tierIndex, featureIndex) => {
		if (featureIndex === 0) return;
		const newTiers = [...tiers];
		const features = [...newTiers[tierIndex].features];
		[features[featureIndex - 1], features[featureIndex]] = [features[featureIndex], features[featureIndex - 1]];
		newTiers[tierIndex].features = features;
		setAttributes({ tiers: newTiers });
	};

	const moveFeatureDown = (tierIndex, featureIndex) => {
		if (featureIndex === tiers[tierIndex].features.length - 1) return;
		const newTiers = [...tiers];
		const features = [...newTiers[tierIndex].features];
		[features[featureIndex], features[featureIndex + 1]] = [features[featureIndex + 1], features[featureIndex]];
		newTiers[tierIndex].features = features;
		setAttributes({ tiers: newTiers });
	};

	const addTier = () => {
		if (tiers.length >= 3) return;
		setAttributes({
			tiers: [
				...tiers,
				{
					name: __('New Tier', 'wcag-compliant-blocks-pricing-tables'),
					price: '$0/month',
					description: '',
					buttonText: __('Get Started', 'wcag-compliant-blocks-pricing-tables'),
					buttonUrl: '',
					features: [
						{ text: __('Feature 1', 'wcag-compliant-blocks-pricing-tables'), isExcluded: false },
						{ text: __('Feature 2', 'wcag-compliant-blocks-pricing-tables'), isExcluded: false }
					]
				}
			]
		});
	};

	const removeTier = (index) => {
		if (tiers.length <= 2) return;
		const newTiers = tiers.filter((_, i) => i !== index);
		setAttributes({ tiers: newTiers });
	};

	const moveTierUp = (index) => {
		if (index === 0) return;
		const newTiers = [...tiers];
		[newTiers[index - 1], newTiers[index]] = [newTiers[index], newTiers[index - 1]];
		setAttributes({ tiers: newTiers });
	};

	const moveTierDown = (index) => {
		if (index === tiers.length - 1) return;
		const newTiers = [...tiers];
		[newTiers[index], newTiers[index + 1]] = [newTiers[index + 1], newTiers[index]];
		setAttributes({ tiers: newTiers });
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={__('Pricing Tiers', 'wcag-compliant-blocks-pricing-tables')}>
					{tiers.map((tier, index) => (
						<PanelBody 
							title={sprintf(__('Tier %d', 'wcag-compliant-blocks-pricing-tables'), index + 1)}
							initialOpen={false}
							key={index}
						>
							<TextControl
								label={__('Plan Name', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.name}
								onChange={(value) => updateTierProperty(index, 'name', value)}
							/>
							<TextControl
								label={__('Price', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.price}
								onChange={(value) => updateTierProperty(index, 'price', value)}
							/>
							<RichText
								label={__('Description', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.description}
								onChange={(value) => updateTierProperty(index, 'description', value)}
								multiline="p"
							/>
							<ToggleControl
								label={__('Featured Table', 'wcag-compliant-blocks-pricing-tables')}
								checked={tier.featured_table || false}
								onChange={(value) => updateTierProperty(index, 'featured_table', value)}
							/>
							<div className="features-section">
								<label className="components-base-control__label">
									{__('Features', 'wcag-compliant-blocks-pricing-tables')}
								</label>
								{tier.features && tier.features.map((feature, featureIndex) => (
									<div key={featureIndex} className="qodef-repeater-item">
										<div className="qodef-repeater-item-heading">
											<span className="qodef-repeater-item-heading-label">
												{sprintf(__('Item %d', 'wcag-compliant-blocks-pricing-tables'), featureIndex + 1)}
											</span>
											<div className="qodef-repeater-item-action">
												<Button
													className="qodef-repeater-button qodef--move-up"
													disabled={featureIndex === 0}
													onClick={() => moveFeatureUp(index, featureIndex)}
													icon={arrowUp}
													label={__('Move Up', 'wcag-compliant-blocks-pricing-tables')}
													showTooltip
												/>
												<Button
													className="qodef-repeater-button qodef--move-down"
													disabled={featureIndex === tier.features.length - 1}
													onClick={() => moveFeatureDown(index, featureIndex)}
													icon={arrowDown}
													label={__('Move Down', 'wcag-compliant-blocks-pricing-tables')}
													showTooltip
												/>
												<Button
													className="qodef-repeater-button qodef--remove"
													onClick={() => removeFeature(index, featureIndex)}
													icon={trash}
													label={__('Remove Item', 'wcag-compliant-blocks-pricing-tables')}
													showTooltip
												/>
											</div>
										</div>
										<div className="qodef-repeater-item-options">
											<div className="qodef-repeater-item-option">
												<TextControl
													label={__('Feature Text', 'wcag-compliant-blocks-pricing-tables')}
													value={feature.text}
													onChange={(value) => updateFeatureProperty(index, featureIndex, 'text', value)}
												/>
											</div>
										</div>
									</div>
								))}
								<Button
									variant="secondary"
									onClick={() => addFeature(index)}
									icon={plus}
								>
									{__('Add Feature', 'wcag-compliant-blocks-pricing-tables')}
								</Button>
							</div>
							<TextControl
								label={__('Button Text', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.buttonText}
								onChange={(value) => updateTierProperty(index, 'buttonText', value)}
							/>
							<URLInput
								label={__('Button URL', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.buttonUrl}
								onChange={(value) => updateTierProperty(index, 'buttonUrl', value)}
							/>
							<div className="tier-actions">
								<Button
									className="move-tier-button"
									disabled={index === 0}
									onClick={() => moveTierUp(index)}
									icon={arrowUp}
									label={__('Move tier up', 'wcag-compliant-blocks-pricing-tables')}
									showTooltip
								/>
								<Button
									className="move-tier-button"
									disabled={index === tiers.length - 1}
									onClick={() => moveTierDown(index)}
									icon={arrowDown}
									label={__('Move tier down', 'wcag-compliant-blocks-pricing-tables')}
									showTooltip
								/>
								{tiers.length > 2 && (
									<Button
										variant="secondary"
										onClick={() => removeTier(index)}
									>
										{__('Remove Tier', 'wcag-compliant-blocks-pricing-tables')}
									</Button>
								)}
							</div>
						</PanelBody>
					))}
					{tiers.length < 3 && (
						<Button
							variant="primary"
							onClick={addTier}
						>
							{__('Add Tier', 'wcag-compliant-blocks-pricing-tables')}
						</Button>
					)}
				</PanelBody>
			</InspectorControls>

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
